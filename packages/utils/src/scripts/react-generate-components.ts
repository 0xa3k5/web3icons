// Import necessary modules and constants
import fs from 'fs'
import path from 'path'
import {
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  ROOT_REACT,
} from '../constants'
import { generateReactComponent, ensureDirectoryExists } from '../utils'

ensureDirectoryExists(path.join(ROOT_REACT, 'src'))
ensureDirectoryExists(path.join(ROOT_REACT, 'src', 'icons'))
ensureDirectoryExists(SVG_TOKENS_OUT_DIR)
ensureDirectoryExists(SVG_NETWORKS_OUT_DIR)
ensureDirectoryExists(JSX_TOKENS_OUT_DIR)
ensureDirectoryExists(JSX_NETWORKS_OUT_DIR)

// Function to process SVGs and generate React components
const processSVGs = (svgOutDir: string, jsxOutDir: string): void => {
  ;['branded', 'mono'].forEach((variant) => {
    const dir = path.join(svgOutDir, variant)
    if (fs.existsSync(dir)) {
      const svgFiles = fs.readdirSync(dir)
      svgFiles.forEach((svg) => {
        if (path.extname(svg) === '.svg') {
          generateReactComponent(path.basename(svg, '.svg'), jsxOutDir)
        }
      })
    }
  })
}

// Process SVGs for tokens and networks
processSVGs(SVG_TOKENS_OUT_DIR, JSX_TOKENS_OUT_DIR)
processSVGs(SVG_NETWORKS_OUT_DIR, JSX_NETWORKS_OUT_DIR)

// Generate index file
require('child_process').execSync('bun run react:index')
