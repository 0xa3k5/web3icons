import fs from 'fs'
import path from 'path'
import {
  CORE_SVG_MODULE_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
} from '../../constants'
import { kebabToPascalCase } from '../../utils'
import { TType } from '../../types'

const readSvgFilesFromDir = (dirPath: string) => {
  return fs
    .readdirSync(dirPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
    .map((file) => file.replace('.svg', ''))
}

  let fileContent = '/* Generated */\n'
  let tokensObjectContent = '\nexport const svgs = {\n  tokens: {\n'
  let networksObjectContent = '  },\n  networks: {\n'

  const processDirectory = (dirPath: string, type: TType) => {
    ;['branded', 'mono'].forEach((variant) => {
      const svgFiles = readSvgFilesFromDir(path.join(dirPath, variant))

      svgFiles.forEach((svgFile) => {
        const variableName = kebabToPascalCase(`${variant}-${svgFile}`)
        console.log({ variableName })
        const variableTypeAbbr = type.slice(0, 1).toUpperCase() // N (networks), T (tokens), W (wallets)
        fileContent += `import ${variableTypeAbbr}${variableName} from './svgs/${type}/${variant}/${svgFile}.svg';\n`

        const objectContent = `${variableName}: ${variableTypeAbbr}${variableName},\n`
        console.log({ objectContent })
        if (type === 'tokens') {
          tokensObjectContent += objectContent
        } else {
          networksObjectContent += objectContent
        }
      })
    })
  }

  processDirectory(SVG_TOKENS_OUT_DIR, 'tokens')
  processDirectory(SVG_NETWORKS_OUT_DIR, 'networks')

  tokensObjectContent += networksObjectContent + '  }\n};\n'
  fs.writeFileSync(CORE_SVG_MODULE_PATH, fileContent + tokensObjectContent)

  console.log('✓ Generated: svgs module')
