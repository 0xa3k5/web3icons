import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  reactRoot,
} from '../constants'

const generateIndexFile = (
  directory: string,
  category: 'tokens' | 'networks',
) => {
  // if (!fs.existsSync(directory) || fs.readdirSync(directory).length === 0) {
  //   console.log(`No components to generate index file for ${category}`);
  //   return;
  // }

  const svgFiles = fs
    .readdirSync(directory)
    .filter((file) => file !== 'index.ts')
  const exports = svgFiles
    .map((svgFile) => {
      const baseName = path.basename(svgFile, '.tsx')
      return `export { ${baseName} } from './${baseName}';\n`
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
  path.join(reactRoot, 'src', 'icons', 'index.ts'),
  iconsIndexContent,
)
console.log('✓ Generated: icons index file')

// Update the main src/index.ts
const mainIndexContent =
  `/* Generated */\n` +
  `export * from './types';\n` +
  `export { BaseIcon } from './BaseIcon';\n` +
  `export { TokenIcon } from './TokenIcon';\n` +
  `export * from './icons';\n`

fs.writeFileSync(path.join(reactRoot, 'src', 'index.ts'), mainIndexContent)
console.log('✓ Generated: Main React index file')

// import fs from 'fs'
// import path from 'path'
// import { JSX_TOKENS_OUT_DIR, reactRoot, SVG_TOKENS_OUT_DIR } from '../constants'

// const svgDirectories = {
//   branded: fs.readdirSync(path.join(SVG_TOKENS_OUT_DIR, 'branded')),
//   mono: fs.readdirSync(path.join(SVG_TOKENS_OUT_DIR, 'mono')),
// }

// const allSvgNames = new Set(
//   [...svgDirectories.branded, ...svgDirectories.mono].map((svg) =>
//     path.basename(svg, '.svg'),
//   ),
// )

// const indexFileContent = Array.from(allSvgNames)
//   .map((svgName) => {
//     const componentName = svgName.replace(/[- ]+/g, '_').toLocaleUpperCase()
//     return `export { Icon${componentName} } from "./${componentName}";`
//   })
//   .join('\n')

// fs.writeFileSync(path.join(JSX_TOKENS_OUT_DIR, 'index.ts'), indexFileContent)
// fs.writeFileSync(
//   path.join(reactRoot, 'src', 'index.ts'),
//   `export * from './types';\nexport { BaseIcon } from './BaseIcon';\nexport { TokenIcon } from './TokenIcon';`,
// )
