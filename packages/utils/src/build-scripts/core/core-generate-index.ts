import fs from 'fs'
import path from 'path'
import {
  CORE_INDEX_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
} from '../../constants'
import { kebabToPascalCase } from '../../utils'
import { TType, TVariant } from '../../types'

const readSvgFilesFromDirectory = (directoryPath: string): string[] => {
  return fs
    .readdirSync(directoryPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
}

const createExports = (
  svgFiles: string[],
  type: TType,
  variant: TVariant,
): string => {
  return svgFiles
    .map((file) => {
      const svgName = file.replace('.svg', '')
      return `export { default as ${kebabToPascalCase(`${type}-${variant}-${svgName}`)} } from '../dist/svgs/${type}s/${variant}/${file}';\n`
    })
    .join('')
}

export function generateIndex() {
  let indexContent =
    '/* Generated */\nexport { svgs } from "./svg-module";\nexport * from "./types";\nexport { tokens, networks, wallets } from "./metadata";\n'

  // Process branded and mono for both token and network
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'branded')),
    'token',
    'branded',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'mono')),
    'token',
    'mono',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'branded')),
    'network',
    'branded',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'mono')),
    'network',
    'mono',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_WALLETS_OUT_DIR, 'branded')),
    'wallet',
    'branded',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_WALLETS_OUT_DIR, 'mono')),
    'wallet',
    'mono',
  )

  fs.writeFileSync(CORE_INDEX_PATH, indexContent)
  console.log('✓ Generated: index file at src/index.ts')
}
