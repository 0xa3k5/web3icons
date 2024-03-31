import fs from 'fs'
import path from 'path'
import { JSX_OUTPUT_DIR, SVG_OUTPUT_DIR } from '../constants'
import {
  generateBaseIconComponent,
  generateReactComponent,
  generateTokenIconComponent,
  generateTypesFile,
} from '../utils'

if (!fs.existsSync(SVG_OUTPUT_DIR)) {
  fs.mkdirSync(SVG_OUTPUT_DIR)
}

if (!fs.existsSync(JSX_OUTPUT_DIR)) {
  fs.mkdirSync(JSX_OUTPUT_DIR)
}

// generate types file
generateTypesFile()

// generate BaseIcon component
generateBaseIconComponent()

// generate TokenIcon component
generateTokenIconComponent()

if (
  !fs.existsSync(path.join(SVG_OUTPUT_DIR, 'mono')) ||
  !fs.existsSync(path.join(SVG_OUTPUT_DIR, 'branded'))
) {
  console.info('No optimized SVGs found, building @token-icons/core...')
  require('child_process').execSync('bun run build:core')
  require('child_process').execSync('bun run build:react')
}

const svgFiles = {
  branded: fs.readdirSync(path.join(SVG_OUTPUT_DIR, 'branded')),
  mono: fs.readdirSync(path.join(SVG_OUTPUT_DIR, 'mono')),
}

if (Object.entries(svgFiles).length === 0) {
  console.info('No optimized SVGs found, building @token-icons/core...')
  require('child_process').execSync('bun run build:core')
  require('child_process').execSync('bun run build:react')
}

// generate react components
Object.entries(svgFiles).forEach(([_, value]) => {
  value.forEach((svg) => {
    if (path.extname(svg) === '.svg') {
      generateReactComponent(path.basename(svg, '.svg'))
    }
  })
})

// generate index file
require('child_process').execSync('bun run react:index')
