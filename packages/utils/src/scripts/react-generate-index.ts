import fs from 'fs'
import path from 'path'
import { JSX_OUTPUT_DIR, SVG_OUTPUT_DIR } from '../constants'

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
  .concat(
    "\nexport * from './types';\nexport { TokenIcon } from './TokenIcon';",
  )

fs.writeFileSync(path.join(JSX_OUTPUT_DIR, 'index.ts'), indexFileContent)
