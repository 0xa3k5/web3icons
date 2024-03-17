import fs from 'fs'
import path from 'path'

const brandedSvgDir = path.join(__dirname, '..', 'src', 'svgs', 'branded')
const monoSvgDir = path.join(__dirname, '..', 'src', 'svgs', 'mono')

function readSvgFilesFromDirectory(directoryPath: string): string[] {
  return fs
    .readdirSync(directoryPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
}

const brandedSvgFiles = readSvgFilesFromDirectory(brandedSvgDir)
const monoSvgFiles = readSvgFilesFromDirectory(monoSvgDir)

let indexContent = `export * from './metadata'\n`

// branded
brandedSvgFiles.forEach((file) => {
  const svgName = file.replace('.svg', '')
  indexContent += `export { default as branded${svgName.charAt(0).toUpperCase() + svgName.slice(1)} } from './svgs/branded/${file}';\n`
})

// mono
monoSvgFiles.forEach((file) => {
  const svgName = file.replace('.svg', '')
  indexContent += `export { default as mono${svgName.charAt(0).toUpperCase() + svgName.slice(1)} } from './svgs/mono/${file}';\n`
})

fs.writeFileSync(path.join(__dirname, '..', 'src', 'index.ts'), indexContent)

console.log('Index file generated successfully.')
