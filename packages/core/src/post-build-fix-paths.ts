import * as path from 'path'
import fs from 'fs'

// fix paths in index.js
const indexPath = path.join(__dirname, '..', 'dist', 'index.js')

let indexContent = fs.readFileSync(indexPath, 'utf8')
indexContent = indexContent.replace(
  /\.\.\/dist\/optimized-svgs\//g,
  './optimized-svgs/',
)
fs.writeFileSync(indexPath, indexContent)

// fix paths in svg-module.js
const svgModulePath = path.join(__dirname, '..', 'dist', 'svg-module.js')

let svgModuleContent = fs.readFileSync(svgModulePath, 'utf8')
svgModuleContent = svgModuleContent.replace(
  /\.\.\/dist\/optimized-svgs\//g,
  './optimized-svgs/',
)
fs.writeFileSync(svgModulePath, svgModuleContent)
