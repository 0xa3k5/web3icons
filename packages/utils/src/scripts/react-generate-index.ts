import fs from 'fs'
import path from 'path'
import { JSX_OUTPUT_DIR, reactRoot, SVG_OUTPUT_DIR } from '../constants'

const svgDirectories = {
  branded: fs.readdirSync(path.join(SVG_OUTPUT_DIR, 'branded')),
  mono: fs.readdirSync(path.join(SVG_OUTPUT_DIR, 'mono')),
}

const allSvgNames = new Set(
  [...svgDirectories.branded, ...svgDirectories.mono].map((svg) =>
    path.basename(svg, '.svg'),
  ),
)

const indexFileContent = Array.from(allSvgNames)
  .map((svgName) => {
    const componentName = svgName.replace(/[- ]+/g, '_').toLocaleUpperCase()
    return `export { Icon${componentName} } from "./${componentName}";`
  })
  .join('\n')

fs.writeFileSync(path.join(JSX_OUTPUT_DIR, 'index.ts'), indexFileContent)
fs.writeFileSync(
  path.join(reactRoot, 'src', 'index.ts'),
  `export * from './types';\nexport { BaseIcon } from './BaseIcon';\nexport { TokenIcon } from './TokenIcon';`,
)
