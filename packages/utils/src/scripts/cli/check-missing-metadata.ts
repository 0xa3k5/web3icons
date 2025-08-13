import { confirm, select } from '@clack/prompts'
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import { TType, TVariant } from '@web3icons/common'
import { findExistingMetadata, addNewIcon } from '../../utils'
import { SVG_SRC_DIR } from '../../constants'

interface MissingIcon {
  fileName: string
  type: TType
  variant: TVariant
  filePath: string
}

const getAllSvgFiles = (): MissingIcon[] => {
  const svgFiles: MissingIcon[] = []
  const types: TType[] = ['token', 'network', 'wallet', 'exchange']

  types.forEach((type) => {
    const typeDir = path.join(SVG_SRC_DIR, `${type}s`)
    if (!fs.existsSync(typeDir)) return

    const variants = fs
      .readdirSync(typeDir)
      .filter((v) => fs.statSync(path.join(typeDir, v)).isDirectory())

    variants.forEach((variant) => {
      const variantDir = path.join(typeDir, variant)
      const files = fs.readdirSync(variantDir).filter((f) => f.endsWith('.svg'))

      files.forEach((file) => {
        const fileName = path.basename(file, '.svg')
        svgFiles.push({
          fileName,
          type,
          variant: variant as TVariant,
          filePath: path.join(variantDir, file),
        })
      })
    })
  })

  return svgFiles
}

const getMissingIcons = (): Map<string, MissingIcon[]> => {
  const allSvgFiles = getAllSvgFiles()
  const missingByKey = new Map<string, MissingIcon[]>()

  allSvgFiles.forEach((svgFile) => {
    const metadata = findExistingMetadata(svgFile.fileName, svgFile.type)
    if (!metadata) {
      const key = `${svgFile.type}:${svgFile.fileName}`
      if (!missingByKey.has(key)) {
        missingByKey.set(key, [])
      }
      missingByKey.get(key)!.push(svgFile)
    }
  })

  return missingByKey
}

const handleDeleteIcons = async (iconGroup: MissingIcon[]): Promise<void> => {
  const firstIcon = iconGroup[0]!
  console.log(chalk.red(`\nDeleting ${firstIcon.type}: ${firstIcon.fileName}`))
  console.log(chalk.gray(`Variants: ${iconGroup.map((i) => i.variant).join(', ')}`))

  const confirmDelete = await confirm({
    message: `Are you sure you want to delete all ${iconGroup.length} file(s)?`,
    initialValue: false,
  })

  if (confirmDelete) {
    iconGroup.forEach((icon) => {
      fs.unlinkSync(icon.filePath)
      console.log(chalk.red(`✗ Deleted ${icon.filePath}`))
    })
  }
}

const main = async () => {
  console.log(chalk.bold('\n🔍 Checking for SVG files without metadata...\n'))

  const missingIcons = getMissingIcons()

  if (missingIcons.size === 0) {
    console.log(chalk.green('✓ All SVG files have corresponding metadata!'))
    process.exit(0)
  }

  console.log(chalk.yellow(`Found ${missingIcons.size} icon(s) without metadata:\n`))

  // Group by type for better display
  const byType = new Map<TType, string[]>()
  missingIcons.forEach((icons, key) => {
    const [type, fileName] = key.split(':')
    if (!byType.has(type as TType)) {
      byType.set(type as TType, [])
    }
    byType.get(type as TType)!.push(fileName!)
  })

  byType.forEach((fileNames, type) => {
    console.log(chalk.cyan(`${type}s (${fileNames.length}):`))
    fileNames.forEach((fileName) => {
      const icons = missingIcons.get(`${type}:${fileName}`)!
      const variants = icons.map((i) => i.variant).join(', ')
      console.log(`  • ${fileName} [${variants}]`)
    })
  })

  console.log('\n')

  // Process each missing icon
  for (const [key, iconGroup] of missingIcons) {
    const [type, fileName] = key.split(':')
    console.log(chalk.bold(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`))
    console.log(chalk.bold(`Missing metadata for ${type}: ${fileName}`))
    console.log(chalk.gray(`Variants: ${iconGroup.map((i) => i.variant).join(', ')}`))

    const action = await select({
      message: 'What would you like to do?',
      options: [
        { value: 'add', label: '➕ Add metadata' },
        { value: 'delete', label: '🗑️  Delete files' },
        { value: 'skip', label: '⏭️  Skip' },
        { value: 'exit', label: '🚪 Exit' },
      ],
    })

    if (action === 'add') {
      // Reuse the existing addNewIcon function from add-icons
      const variants = iconGroup.map((i) => i.variant)
      console.log(chalk.green(`Adding new ${type} icon: ${fileName}`))
      await addNewIcon([fileName!, { type: type as TType, variants }])
    } else if (action === 'delete') {
      await handleDeleteIcons(iconGroup)
    } else if (action === 'exit') {
      console.log(chalk.gray('\nExiting...'))
      process.exit(0)
    }
  }

  console.log(chalk.green('\n✓ Finished processing missing metadata!'))
}

// Run the script
await main()
