import { execSync } from 'child_process'
import path from 'path'
import { TType, TVariant } from '@web3icons/common'
import { SVG_SRC_DIR } from '../../constants'
import {
  validateSvg,
  getTypeAndVariant,
  findExistingMetadata,
  addNewIcon,
  addNewVariant,
} from '../../utils'
import chalk from 'chalk'
import { handleDeletedIcons } from './delete-icons'

const getModifiedIcons = () => {
  return execSync("git ls-files --others -m --exclude-standard -- '*.svg' | tr '\n' ','")
    .toString()
    .trim()
}

const getDeletedIcons = () => {
  return execSync("git ls-files --deleted -- '*.svg' | tr '\n' ','").toString().trim()
}

const addIcons = async () => {
  await handleDeletedIcons()

  const modifiedIcons = getModifiedIcons()
  const passedFiles = process.argv.slice(2)
  const deletedFiles = getDeletedIcons().split(',').filter(Boolean)

  if (
    (modifiedIcons === '' || !modifiedIcons.includes('raw-svgs/')) &&
    (passedFiles === undefined || passedFiles.length === 0) &&
    deletedFiles.length === 0
  ) {
    console.error(`No icon changes detected`)
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
    [key: string]: { type: TType; variants: TVariant[] }
  } = {}

  iconPaths.forEach((filePath) => {
    const fileName = path.basename(filePath, '.svg')
    const { type, variant } = getTypeAndVariant(filePath)

    if (!groupedIcons[fileName]) {
      groupedIcons[fileName] = { type, variants: [] }
    }

    if (!groupedIcons[fileName].variants.includes(variant)) {
      groupedIcons[fileName].variants.push(variant)
    }
  })

  for (const icon of Object.entries(groupedIcons)) {
    const [fileName, { type, variants }] = icon

    const existingMetadata = findExistingMetadata(fileName, type)

    if (!existingMetadata) {
      console.log(chalk.green(`Adding new ${type} icon: ${fileName}`))
      await addNewIcon(icon)
      continue
    }

    if (variants.some((variant) => !existingMetadata.variants.includes(variant))) {
      console.log(chalk.blue(`Adding new variants to existing ${type} icon: ${fileName}`))
      await addNewVariant(existingMetadata, type, variants)
      continue
    }
  }
}

await addIcons()
