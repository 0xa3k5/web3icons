import fs from 'fs'
import path from 'path'
import { JSX_OUTPUT_DIR, SVG_OUTPUT_DIR } from '../constants'
import { normalizeComponentName } from '../ops'

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
    const componentName = normalizeComponentName(svgName)
    return `export { default as Icon${componentName} } from "./${componentName}";`
  })
  .join('\n')
  .concat("\nexport * from './types';")

fs.writeFileSync(path.join(JSX_OUTPUT_DIR, 'index.ts'), indexFileContent)
