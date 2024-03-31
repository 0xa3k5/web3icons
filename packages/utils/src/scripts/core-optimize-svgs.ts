import { coreRoot, SVG_OUTPUT_DIR, SVG_SOURCE_DIR } from '../constants'
import { optimizeSvg } from '../utils'
import path from 'path'
import fs from 'fs'

if (!fs.existsSync(path.resolve(coreRoot, 'dist'))) {
  fs.mkdirSync(path.resolve(coreRoot, 'dist'))
}

if (!fs.existsSync(SVG_OUTPUT_DIR)) {
  fs.mkdirSync(SVG_OUTPUT_DIR)
}

if (!fs.existsSync(path.join(SVG_OUTPUT_DIR, 'branded'))) {
  fs.mkdirSync(path.join(SVG_OUTPUT_DIR, 'branded'))
}

if (!fs.existsSync(path.join(SVG_OUTPUT_DIR, 'mono'))) {
  fs.mkdirSync(path.join(SVG_OUTPUT_DIR, 'mono'))
}

const rawSVGs = {
  branded: fs.readdirSync(path.join(SVG_SOURCE_DIR, 'branded')),
  mono: fs.readdirSync(path.join(SVG_SOURCE_DIR, 'mono')),
}

const optimizeAndOutput = (rawSVG: string, variant: string) => {
  const baseName = path.basename(rawSVG, '.svg')
  const svgFilePath = path.join(SVG_SOURCE_DIR, variant, rawSVG)
  const optimizedSVG = optimizeSvg(
    fs.readFileSync(svgFilePath, 'utf-8'),
    baseName,
  )
  fs.writeFileSync(path.join(SVG_OUTPUT_DIR, variant, rawSVG), optimizedSVG)
}

Object.entries(rawSVGs).forEach(([key, value]) => {
  value.forEach((rawSVG) => {
    optimizeAndOutput(rawSVG, key)
  })
  console.log(`→ optimized ${key}:`, value.length)
})
