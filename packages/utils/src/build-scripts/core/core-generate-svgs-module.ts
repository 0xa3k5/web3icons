import fs from 'fs'
import path from 'path'
import {
  CORE_SVG_MODULE_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
} from '../../constants'
import { kebabToPascalCase } from '../../utils'
import { TType } from '@web3icons/common'

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
        const variableTypeAbbr = type.slice(0, 1).toUpperCase() // N (networks), T (tokens), W (wallets), E (exchanges)
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
  svgObjectContent += processDirectory(SVG_EXCHANGES_OUT_DIR, 'exchange')

  svgObjectContent += '};\n'

  fs.writeFileSync(CORE_SVG_MODULE_PATH, fileContent + svgObjectContent)

  console.log('✓ Generated: svgs module')
}
