import fs from 'fs'
import path from 'path'
import {
  CORE_SVG_MODULE_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  ROOT_CORE,
} from '../../constants'
import { kebabToPascalCase } from '../../utils'
import { TType, TVariant } from '@web3icons/common'

const readSvgFilesFromDir = (dirPath: string) => {
  return fs
    .readdirSync(dirPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
    .map((file) => file.replace('.svg', ''))
}

export function generateSvgModule() {
  let fileContent = '/* Generated */\n'
  let svgObjectContent = 'export const svgs = {\n'

  const initializeObjectContent = () => {
    return {
      mono: '',
      branded: '',
    }
  }

  const processDirectory = (dirPath: string, type: TType) => {
    const typeObjectContent = initializeObjectContent()

    ;['branded', 'mono'].forEach((variant) => {
      const svgFiles = readSvgFilesFromDir(path.join(dirPath, variant))

      svgFiles.forEach((svgFile) => {
        const variableName = kebabToPascalCase(svgFile)
        const variableTypeAbbr = type.slice(0, 1).toUpperCase() // N (networks), T (tokens), W (wallets)
        const importName = `${variableTypeAbbr}${variant.charAt(0).toUpperCase() + variant.slice(1)}${variableName}`

        fileContent += `import * as ${importName} from './svgs/${type}s/${variant}/${svgFile}.svg';\n`

        const objectContent = `      '${svgFile}': ${importName},\n`
        typeObjectContent[variant as 'mono' | 'branded'] += objectContent
      })
    })

    return `  ${type}s: {\n    mono: {\n${typeObjectContent.mono}    },\n    branded: {\n${typeObjectContent.branded}    }\n  },\n`
  }

  svgObjectContent += processDirectory(SVG_TOKENS_OUT_DIR, 'token')
  svgObjectContent += processDirectory(SVG_NETWORKS_OUT_DIR, 'network')
  svgObjectContent += processDirectory(SVG_WALLETS_OUT_DIR, 'wallet')

  svgObjectContent += '};\n'

  fs.writeFileSync(CORE_SVG_MODULE_PATH, fileContent + svgObjectContent)

  console.log('✓ Generated: svgs module')
}

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
  fs.writeFileSync(path.join(ROOT_CORE, 'src/svgs/index.ts'), svgsIndexContent)
}
