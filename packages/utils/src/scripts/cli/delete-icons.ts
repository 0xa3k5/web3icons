import { execSync } from 'child_process'
import path from 'path'
import { TType, TVariant, TMetadata } from '@web3icons/common'
import { confirm } from '@clack/prompts'
import chalk from 'chalk'
import fs from 'fs'
import {
  getTypeAndVariant,
  findExistingMetadata,
  deleteMetadata,
  updateMetadataJson,
} from '../../utils'

const getDeletedIcons = () => {
  return execSync("git ls-files --deleted -- '*.svg' | tr '\n' ','").toString().trim()
}

const deleteVariant = async (
  metadata: TMetadata,
  type: TType,
  deletedVariant: TVariant,
): Promise<void> => {
  const updatedVariants = metadata.variants.filter((v) => v !== deletedVariant)
  metadata.variants = updatedVariants

  await updateMetadataJson(metadata, type)
  console.log(chalk.blue(`Removed ${deletedVariant} variant from ${metadata.id}`))
}

const deleteAllVariants = async (
  fileName: string,
  type: TType,
  remainingVariants: TVariant[],
): Promise<void> => {
  // Delete remaining SVG files
  remainingVariants.forEach((variant) => {
    const svgPath = path.join('raw-svgs', type, variant, `${fileName}.svg`)
    if (fs.existsSync(svgPath)) {
      fs.unlinkSync(svgPath)
      console.log(chalk.red(`Deleted ${fileName} (${variant})`))
    }
  })

  await deleteMetadata(fileName, type)
  console.log(chalk.red(`Removed ${fileName} metadata`))
}

export const handleDeletedIcons = async (): Promise<void> => {
  const deletedFiles = getDeletedIcons()
  if (!deletedFiles) return

  const deletedIconPaths = deletedFiles.split(',').filter(Boolean)

  for (const filePath of deletedIconPaths) {
    const fileName = path.basename(filePath, '.svg')
    const { type, variant } = getTypeAndVariant(filePath)

    const existingMetadata = findExistingMetadata(fileName, type)
    if (!existingMetadata) {
      console.log(chalk.yellow(`No metadata found for ${fileName}, safe to delete`))
      continue
    }

    console.log(chalk.yellow(`\nDeleted ${variant} variant of ${fileName}`))

    if (existingMetadata.variants.length > 1) {
      // Multiple variants exist
      const remainingVariants = existingMetadata.variants.filter((v) => v !== variant)

      if (remainingVariants.length === existingMetadata.variants.length) {
        continue
      }

      const shouldDeleteAll = await confirm({
        message: `Delete all variants of ${fileName}? (${remainingVariants.join(', ')})`,
        active: 'Yes',
        inactive: 'No',
        initialValue: false,
      })

      if (shouldDeleteAll) {
        await deleteAllVariants(fileName, type, remainingVariants)
      } else {
        await deleteVariant(existingMetadata, type, variant)
      }
    } else {
      // Only one variant exists
      const shouldDeleteMetadata = await confirm({
        message: `Remove metadata for ${fileName}?`,
        active: 'Yes',
        inactive: 'No',
        initialValue: false,
      })

      if (shouldDeleteMetadata) {
        await deleteMetadata(fileName, type)
        console.log(chalk.red(`Removed ${fileName} metadata`))
      }
    }
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  await handleDeletedIcons()
}
