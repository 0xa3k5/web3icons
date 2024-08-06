import fs from 'fs'
import path from 'path'
import {
  CORE_SVG_MODULE_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
} from '../../constants'
import { kebabToCamel } from '../../utils'

const readSvgFilesFromDir = (dirPath: string) => {
  return fs
    .readdirSync(dirPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
    .map((file) => file.replace('.svg', ''))
}

let fileContent = '/* Generated */\n'
let svgsObjectContent = '\nexport const svgs = {\n  tokens: {\n'
let networksObjectContent = '  },\n  networks: {\n'

const processDirectory = (dirPath: string, type: 'tokens' | 'networks') => {
  ;['branded', 'mono'].forEach((variant) => {
    const svgFiles = readSvgFilesFromDir(path.join(dirPath, variant))

    svgFiles.forEach((svgFile) => {
      const variableName = kebabToCamel(`${variant}-${svgFile}`)
      const variableType = type === 'networks' ? 'N' : 'T'
      fileContent += `import ${variableType}${variableName} from './svgs/${type}/${variant}/${svgFile}.svg';\n`

      const objectContent = `    ${variableName}: ${variableType}${variableName},\n`
      if (type === 'tokens') {
        svgsObjectContent += objectContent
      } else {
        networksObjectContent += objectContent
      }
    })
  })
}

processDirectory(SVG_TOKENS_OUT_DIR, 'tokens')
processDirectory(SVG_NETWORKS_OUT_DIR, 'networks')

svgsObjectContent += networksObjectContent + '  }\n};\n'
fs.writeFileSync(CORE_SVG_MODULE_PATH, fileContent + svgsObjectContent)

console.log('✓ Generated: svgs module')
