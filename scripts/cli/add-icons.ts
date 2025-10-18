import { execSync } from 'child_process'
import path from 'path'
import { TType, TVariant } from '@web3icons/common'
import { SVG_SRC_DIR } from '../constants'
import {
  validateSvg,
  getTypeAndVariant,
  findExistingMetadata,
  addNewIcon,
  addNewVariant,
} from '../utils'
import chalk from 'chalk'
import { handleDeletedIcons } from './delete-icons'
import { select, text, confirm } from '@clack/prompts'

const getModifiedIcons = () => {
  return execSync(
    "git ls-files --others -m --exclude-standard -- '*.svg' | tr '\n' ','",
  )
    .toString()
    .trim()
}

const getDeletedIcons = () => {
  return execSync("git ls-files --deleted -- '*.svg' | tr '\n' ','")
    .toString()
    .trim()
}

/**
 * Add metadata entry without requiring icon files
 * Used for entries that reference existing icons (e.g., testnets, wrapped tokens)
 */
const addMetadataOnly = async () => {
  const addAnother = async (): Promise<void> => {
    // Select the type for the NEW entry being created
    const newEntryType = (await select({
      message: 'Select type for the new entry you are creating',
      options: [
        { value: 'network', label: 'Network' },
        { value: 'token', label: 'Token' },
        { value: 'wallet', label: 'Wallet' },
        { value: 'exchange', label: 'Exchange' },
      ],
    })) as TType

    // Ask for the full icon reference in one prompt
    const iconRef = (await text({
      message: 'Enter icon reference to use (format: type:name)',
      placeholder: 'network:ethereum',
      validate: (value) => {
        if (!value) return 'Icon reference is required'
        const parts = value.split(':')
        if (parts.length !== 2) {
          return 'Invalid format. Use "type:name" (e.g., "network:ethereum", "token:usdc")'
        }
        const validTypes = ['network', 'token', 'wallet', 'exchange']
        if (!validTypes.includes(parts[0]!)) {
          return `Invalid type. Must be one of: ${validTypes.join(', ')}`
        }
        return undefined
      },
    })) as string

    // Parse the reference
    const [refTypeInput, iconName] = iconRef.split(':')

    // Find the reference metadata to get variants
    const refMetadata = findExistingMetadata(iconName!, refTypeInput as TType)

    if (!refMetadata) {
      console.log(
        chalk.red(
          `Error: Referenced icon "${iconRef}" not found. Please ensure the icon exists.`,
        ),
      )
      process.exit(1)
    }

    console.log(
      chalk.dim(
        `Using variants from ${iconRef}: ${refMetadata.variants.join(', ')}`,
      ),
    )
    console.log('')

    // Pass the iconRef and the NEW entry's type
    await addNewIcon([iconRef, { type: newEntryType, variants: refMetadata.variants }])

    const shouldAddAnother = await confirm({
      message: 'Add another metadata entry?',
      initialValue: false,
    })

    if (shouldAddAnother) {
      await addAnother()
    }
  }

  await addAnother()
}

const addIcons = async () => {
  await handleDeletedIcons()

  const args = process.argv.slice(2)
  const metadataOnlyFlag = args.includes('--metadata-only')
  const passedFiles = args.filter((arg) => !arg.startsWith('--'))

  // If --metadata-only flag is used, skip to metadata creation
  if (metadataOnlyFlag) {
    console.log(
      chalk.blue(
        '📝 Metadata-only mode: Add new metadata entries without icon files',
      ),
    )
    await addMetadataOnly()
    process.exit(0)
  }

  const modifiedIcons = getModifiedIcons()
  const deletedFiles = getDeletedIcons().split(',').filter(Boolean)

  if (
    (modifiedIcons === '' || !modifiedIcons.includes('raw-svgs/')) &&
    (passedFiles === undefined || passedFiles.length === 0) &&
    deletedFiles.length === 0
  ) {
    console.error(`No icon changes detected`)
    console.log(
      chalk.dim(
        '\nTip: Use "bun run add-icons --metadata-only" to add entries that reference existing icons',
      ),
    )
    process.exit(0)
  }

  // Skip if only deletions were found
  if (modifiedIcons === '' && passedFiles.length === 0) {
    process.exit(0)
  }

  // Filter out deleted files from the modified files list
  const deletedSet = new Set(deletedFiles)
  const iconPaths = modifiedIcons
    .concat(passedFiles.map((f) => `${SVG_SRC_DIR}/${f}`).join(','))
    .split(',')
    .filter(Boolean)
    .filter((filePath) => !deletedSet.has(filePath))
    .filter((filePath) => validateSvg(filePath))

  const groupedIcons: {
    [key: string]: { [type in TType]?: { variants: TVariant[] } }
  } = {}

  iconPaths.forEach((filePath) => {
    const fileName = path.basename(filePath, '.svg')
    const { type, variant } = getTypeAndVariant(filePath)

    if (!groupedIcons[fileName]) {
      groupedIcons[fileName] = {}
    }

    if (!groupedIcons[fileName][type]) {
      groupedIcons[fileName][type] = { variants: [] }
    }

    if (!groupedIcons[fileName][type]!.variants.includes(variant)) {
      groupedIcons[fileName][type]!.variants.push(variant)
    }
  })

  for (const [fileName, typeGroups] of Object.entries(groupedIcons)) {
    for (const [type, { variants }] of Object.entries(typeGroups)) {
      const existingMetadata = findExistingMetadata(fileName, type as TType)

      if (!existingMetadata) {
        console.log(chalk.green(`Adding new ${type} icon: ${fileName}`))
        await addNewIcon([fileName, { type: type as TType, variants }])
        continue
      }

      if (
        variants.some((variant) => !existingMetadata.variants.includes(variant))
      ) {
        console.log(
          chalk.blue(
            `Adding new variants to existing ${type} icon: ${fileName}`,
          ),
        )
        await addNewVariant(existingMetadata, type as TType, variants)
        continue
      }
    }
  }
}

await addIcons()
