import fs from 'fs'
import path from 'path'
import { CORE_INDEX_PATH, SVG_OUTPUT_DIR } from '../constants'

const brandedSvgDir = path.join(SVG_OUTPUT_DIR, 'branded')
const monoSvgDir = path.join(SVG_OUTPUT_DIR, 'mono')

function readSvgFilesFromDirectory(directoryPath: string): string[] {
  return fs
    .readdirSync(directoryPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
}

const brandedSvgFiles = readSvgFilesFromDirectory(brandedSvgDir)
const monoSvgFiles = readSvgFilesFromDirectory(monoSvgDir)

let indexContent = `/* Generated */\nexport { tokens } from './metadata/index.js'\nexport { svgs } from './svg-module.js'\n`

// branded
brandedSvgFiles.forEach((file) => {
  const svgName = file.replace('.svg', '')
  indexContent += `export { default as branded${svgName.charAt(0).toUpperCase() + svgName.slice(1)} } from '../dist/optimized-svgs/branded/${file}';\n` // this dist path will be fixed in postbuild-fix-paths.js
})

// mono
monoSvgFiles.forEach((file) => {
  const svgName = file.replace('.svg', '')
  indexContent += `export { default as mono${svgName.charAt(0).toUpperCase() + svgName.slice(1)} } from '../dist/optimized-svgs/mono/${file}';\n` // this dist path will be fixed in postbuild-fix-paths.js
})

fs.writeFileSync(CORE_INDEX_PATH, indexContent)

console.log('✓ generated: index file at src/index.ts')
