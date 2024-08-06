import fs from 'fs'
import path from 'path'
import {
  CORE_INDEX_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
} from '../../constants'
import { kebabToCamel } from '../../utils'
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
      return `export { default as ${kebabToCamel(`${type}-${variant}-${svgName}`)} } from '../dist/svgs/${type}/${variant}/${file}';\n`
    })
    .join('')
}

export function generateIndex() {
  let indexContent =
    '/* Generated */\nexport { svgs } from "./svg-module";\nexport * from "./types";\n'

  // Process branded and mono for both tokens and networks
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'branded')),
    'tokens',
    'branded',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'mono')),
    'tokens',
    'mono',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'branded')),
    'networks',
    'branded',
  )
  indexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'mono')),
    'networks',
    'mono',
  )

  fs.writeFileSync(CORE_INDEX_PATH, indexContent)
  console.log('✓ Generated: index file at src/index.ts')
}
