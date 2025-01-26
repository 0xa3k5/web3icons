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

const getModifiedIcons = () => {
  return execSync("git ls-files --others -m --exclude-standard -- '*.svg' | tr '\n' ','")
    .toString()
    .trim()
}

const addIcons = async () => {
  const modifiedIcons = getModifiedIcons()
  const passedFiles = process.argv.slice(2)

  if (
    (modifiedIcons === '' || !modifiedIcons.includes('raw-svgs/')) &&
    (passedFiles === undefined || passedFiles.length === 0)
  ) {
    console.error(`No new icons found`)
    process.exit(1)
  }

  const iconPaths = modifiedIcons
    .concat(passedFiles.map((f) => `${SVG_SRC_DIR}/${f}`).join(','))
    .split(',')
    .filter(Boolean)
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
