import fs from 'fs'
import path from 'path'
import { JSX_OUTPUT_DIR, SVG_OUTPUT_DIR } from '../src/constants'
import { normalizeComponentName } from '../src/ops'

const svgDirectories = {
  branded: fs.readdirSync(path.join(SVG_OUTPUT_DIR, 'branded')),
  mono: fs.readdirSync(path.join(SVG_OUTPUT_DIR, 'mono')),
}

// Create a combined set of all unique SVG names
const allSvgNames = new Set(
  [...svgDirectories.branded, ...svgDirectories.mono].map((svg) =>
    path.basename(svg, '.svg'),
  ),
)

// Generate export statements
const indexFileContent = Array.from(allSvgNames)
  .map((svgName) => {
    const componentName = normalizeComponentName(svgName)
    return `export { default as Icon${componentName} } from "./${componentName}";`
  })
  .join('\n')
  .concat("\nexport * from './types';")

// Write the content to index.ts
fs.writeFileSync(path.join(JSX_OUTPUT_DIR, 'index.ts'), indexFileContent)
