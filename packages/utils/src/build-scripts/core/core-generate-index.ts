import fs from 'fs'
import path from 'path'
import {
  CORE_INDEX_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  ROOT_CORE,
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
      return `export * as ${kebabToPascalCase(`${type}-${variant}-${svgName}`)} from './${type}s/${variant}/${file}';\n`
    })
    .join('')
}

export function generateIndex() {
  const indexContent =
    '/* Generated */\nexport { svgs } from "./svg-module";\nexport * from "./types";\nexport * from "./metadata";\nexport * from "./svgs";\n'

  let svgsIndexContent = ''

  // Process branded and mono for both token and network
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'branded')),
    'token',
    'branded',
  )
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'mono')),
    'token',
    'mono',
  )
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'branded')),
    'network',
    'branded',
  )
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'mono')),
    'network',
    'mono',
  )
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_WALLETS_OUT_DIR, 'branded')),
    'wallet',
    'branded',
  )
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_WALLETS_OUT_DIR, 'mono')),
    'wallet',
    'mono',
  )

  fs.writeFileSync(CORE_INDEX_PATH, indexContent)
  fs.writeFileSync(path.join(ROOT_CORE, 'src/svgs/index.ts'), svgsIndexContent)
  console.log('✓ Generated: index file at src/index.ts')
}
