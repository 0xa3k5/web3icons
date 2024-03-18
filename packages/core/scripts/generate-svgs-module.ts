import fs from 'fs'
import path from 'path'

const baseDir = path.join(__dirname, '..', 'dist', 'optimized-svgs')
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
  const dirPath = path.join(baseDir, variant)
  const svgFiles = readSvgFilesFromDir(dirPath)

  // imports
  svgFiles.forEach((svgFile) => {
    fileContent += `import ${variant}${svgFile} from './optimized-svgs/${variant}/${svgFile}.svg';\n`
  })

  svgFiles.forEach((svgFile) => {
    svgsObjectContent += `   ${variant}${svgFile},\n`
  })
})

svgsObjectContent += '};\n'

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'svg-module.ts'),
  (fileContent += svgsObjectContent),
)

console.log('✓ generated: svgs module at src/svg-module.ts')
