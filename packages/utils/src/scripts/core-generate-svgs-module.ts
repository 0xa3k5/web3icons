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
      fileContent += `import ${type}${variant}${svgFile} from './${type}/${variant}/${svgFile}.svg';\n`
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

// import fs from 'fs'
// import path from 'path'
// import { CORE_SVG_MODULE_PATH, SVG_TOKENS_OUT_DIR } from '../constants'

// const variants = ['branded', 'mono']

// function readSvgFilesFromDir(dirPath: string) {
//   return fs
//     .readdirSync(dirPath)
//     .filter((file: string) => path.extname(file).toLowerCase() === '.svg')
//     .map((file: string) => file.replace('.svg', ''))
// }

// let fileContent = '/* Generated */\n'
// let svgsObjectContent = '\nexport const svgs: { [key: string]: string } = {\n'

// variants.forEach((variant) => {
//   const dirPath = path.join(SVG_TOKENS_OUT_DIR, variant)
//   const svgFiles = readSvgFilesFromDir(dirPath)

//   // imports
//   svgFiles.forEach((svgFile) => {
//     fileContent += `import ${variant}${svgFile} from '../dist/svgs/${variant}/${svgFile}.svg';\n` // this dist path will be fixed in postbuild-fix-paths.js
//   })

//   svgFiles.forEach((svgFile) => {
//     svgsObjectContent += `   ${variant}${svgFile},\n`
//   })
// })

// svgsObjectContent += '};\n'

// fs.writeFileSync(CORE_SVG_MODULE_PATH, (fileContent += svgsObjectContent))

// console.log('✓ generated: svgs module')
