import fs from 'fs'
import path from 'path'
import {
  CORE_SVG_MODULE_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
} from '../constants'

const variants = ['branded', 'mono']

const readSvgFilesFromDir = (dirPath: string) => {
  return fs
    .readdirSync(dirPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
    .map((file) => file.replace('.svg', ''))
}

let fileContent = '/* Generated */\n'
let svgsObjectContent = '\nexport const svgs: { [key: string]: string } = {\n'

const processDirectory = (dirPath: string, type: 'tokens' | 'networks') => {
  variants.forEach((variant) => {
    const svgFiles = readSvgFilesFromDir(path.join(dirPath, variant))

    // imports
    svgFiles.forEach((svgFile) => {
      fileContent += `import ${type}${variant}${svgFile} from './svgs/${type}/${variant}/${svgFile}.svg';\n`
    })

    svgFiles.forEach((svgFile) => {
      svgsObjectContent += `   ${type}${variant}${svgFile},\n`
    })
  })
}

// Process tokens and networks
processDirectory(SVG_TOKENS_OUT_DIR, 'tokens')
processDirectory(SVG_NETWORKS_OUT_DIR, 'networks')

svgsObjectContent += '};\n'
fs.writeFileSync(CORE_SVG_MODULE_PATH, fileContent + svgsObjectContent)

console.log('✓ Generated: svgs module')
