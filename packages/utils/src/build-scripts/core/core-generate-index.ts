import * as fs from 'fs'
import * as path from 'path'
import { kebabToPascalCase } from '../../utils'
import { TType, TVariant } from '@web3icons/common'
import {
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  ROOT_CORE,
  SVG_EXCHANGES_OUT_DIR,
} from '../../constants'

const readSvgFilesFromDirectory = (directoryPath: string): string[] => {
  return fs.readdirSync(directoryPath).filter((file) => path.extname(file).toLowerCase() === '.svg')
}

export function generateIndex() {
  const createExports = (svgFiles: string[], type: TType, variant: TVariant): string => {
    return svgFiles
      .map((file) => {
        const svgName = file.replace('.svg', '')
        return `export * as ${kebabToPascalCase(`${type}-${variant}-${svgName}`)} from './${type}s/${variant}/${file}';\n`
      })
      .join('')
  }

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
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_EXCHANGES_OUT_DIR, 'branded')),
    'exchange',
    'branded',
  )
  svgsIndexContent += createExports(
    readSvgFilesFromDirectory(path.join(SVG_EXCHANGES_OUT_DIR, 'mono')),
    'exchange',
    'mono',
  )
  console.log(`✓ Generated: svgs index at ${path.join(ROOT_CORE, 'src/svgs/index.ts')}`)
  fs.writeFileSync(path.join(ROOT_CORE, 'src/svgs/index.ts'), svgsIndexContent)
}
