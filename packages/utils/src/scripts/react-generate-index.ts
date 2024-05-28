import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  ROOT_REACT,
} from '../constants'

const generateIndexFile = (
  directory: string,
  category: 'tokens' | 'networks',
) => {
  const svgFiles = fs
    .readdirSync(directory)
    .filter((file) => path.extname(file).toLocaleLowerCase() === '.tsx')
  const exports = svgFiles
    .map((svgFile) => {
      const baseName = path.basename(svgFile, '.tsx')
      return `export { default as ${baseName} } from './${baseName}';\n`
    })
    .join('')

  fs.writeFileSync(path.join(directory, 'index.ts'), exports)
  console.log(`✓ Generated: ${category} index file`)
}

// Generate index.ts for tokens and networks
generateIndexFile(JSX_TOKENS_OUT_DIR, 'tokens')
generateIndexFile(JSX_NETWORKS_OUT_DIR, 'networks')

// Generate icons/index.ts in src
const iconsIndexContent = `export * from './tokens';\nexport * from './networks';\n`
fs.writeFileSync(
  path.join(ROOT_REACT, 'src', 'icons', 'index.ts'),
  iconsIndexContent,
)
console.log('✓ Generated: icons index file')
