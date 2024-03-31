import fs from 'fs'
import path from 'path'
import { CORE_SVG_MODULE_PATH, SVG_OUTPUT_DIR } from '../constants'

const variants = ['branded', 'mono']

function readSvgFilesFromDir(dirPath: string) {
  return fs
    .readdirSync(dirPath)
    .filter((file: string) => path.extname(file).toLowerCase() === '.svg')
    .map((file: string) => file.replace('.svg', ''))
}

let fileContent = '/* Generated */\n'
let svgsObjectContent = '\nexport const svgs: { [key: string]: string } = {\n'

variants.forEach((variant) => {
  const dirPath = path.join(SVG_OUTPUT_DIR, variant)
  const svgFiles = readSvgFilesFromDir(dirPath)

  // imports
  svgFiles.forEach((svgFile) => {
    fileContent += `import ${variant}${svgFile} from '../dist/optimized-svgs/${variant}/${svgFile}.svg';\n` // this dist path will be fixed in postbuild-fix-paths.js
  })

  svgFiles.forEach((svgFile) => {
    svgsObjectContent += `   ${variant}${svgFile},\n`
  })
})

svgsObjectContent += '};\n'

fs.writeFileSync(CORE_SVG_MODULE_PATH, (fileContent += svgsObjectContent))

console.log('✓ generated: svgs module')
