import fs from 'fs'
import path from 'path'
import {
  CORE_INDEX_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
} from '../constants'

const readSvgFilesFromDirectory = (directoryPath: string): string[] => {
  return fs
    .readdirSync(directoryPath)
    .filter((file) => path.extname(file).toLowerCase() === '.svg')
}

const createExports = (
  svgFiles: string[],
  type: 'branded' | 'mono',
  category: 'tokens' | 'networks',
): string => {
  return svgFiles
    .map((file) => {
      const svgName = file.replace('.svg', '')
      return `export { default as ${category}${type}${svgName.charAt(0).toUpperCase() + svgName.slice(1)} } from '../dist/svgs/${category}/${type}/${file}';\n`
    })
    .join('')
}

let indexContent = '/* Generated */\n'

// Process branded and mono for both tokens and networks
indexContent += createExports(
  readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'branded')),
  'branded',
  'tokens',
)
indexContent += createExports(
  readSvgFilesFromDirectory(path.join(SVG_TOKENS_OUT_DIR, 'mono')),
  'mono',
  'tokens',
)
indexContent += createExports(
  readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'branded')),
  'branded',
  'networks',
)
indexContent += createExports(
  readSvgFilesFromDirectory(path.join(SVG_NETWORKS_OUT_DIR, 'mono')),
  'mono',
  'networks',
)

fs.writeFileSync(CORE_INDEX_PATH, indexContent)
console.log('✓ Generated: index file at src/index.ts')