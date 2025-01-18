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

  const directories = [
    { dir: SVG_TOKENS_OUT_DIR, type: 'token' },
    { dir: SVG_NETWORKS_OUT_DIR, type: 'network' },
    { dir: SVG_WALLETS_OUT_DIR, type: 'wallet' },
    { dir: SVG_EXCHANGES_OUT_DIR, type: 'exchange' },
  ]

  const variants = ['branded', 'mono', 'background']

  directories.forEach(({ dir, type }) => {
    variants.forEach((variant) => {
      svgsIndexContent += createExports(
        readSvgFilesFromDirectory(path.join(dir, variant)),
        type as TType,
        variant as TVariant,
      )
    })
  })

  console.log(`✓ Generated: svgs index at ${path.join(ROOT_CORE, 'src/svgs/index.ts')}`)
  fs.writeFileSync(path.join(ROOT_CORE, 'src/svgs/index.ts'), svgsIndexContent)
}
