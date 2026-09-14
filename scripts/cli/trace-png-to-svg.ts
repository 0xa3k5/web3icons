#!/usr/bin/env bun
/**
 * trace-png-to-svg.ts
 *
 * Converts a PNG/JPEG/WebP image to a 24x24 SVG suitable for web3icons.
 * Uses sharp for image preprocessing and potrace for bitmap-to-vector tracing.
 *
 * Usage:
 *   bun scripts/cli/trace-png-to-svg.ts <input-image> <output.svg> [--mono] [--threshold <0-255>]
 *
 * Options:
 *   --mono          Generate a monochrome SVG with fill="white" (for mono variant)
 *   --threshold N   Potrace threshold for black/white cutoff (default: 128)
 *   --color HEX     Fill color for traced paths (default: white for mono, black otherwise)
 *   --turnpolicy    Potrace turn policy: black, white, left, right, minority, majority (default: minority)
 *   --turdsize N    Suppress speckles up to this size (default: 2)
 *
 * Examples:
 *   bun trace-to-svg logo.png raw-svgs/tokens/mono/MANTA.svg --mono
 *   bun trace-to-svg logo.png raw-svgs/networks/branded/manta.svg --color "#1E90FF"
 */

import { execSync } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import chalk from 'chalk'

const VIEWBOX_SIZE = 24
const MAX_ICON_SIZE = 16 // largest side for mono/branded variants
const MAX_ICON_SIZE_BG = 14 // largest side for background variant
const DEFAULT_THRESHOLD = 128
const DEFAULT_TURDSIZE = 2

interface TraceOptions {
  inputPath: string
  outputPath: string
  mono: boolean
  background: boolean
  threshold: number
  color: string | null
  turnPolicy: string
  turdSize: number
}

function parseArgs(): TraceOptions {
  const args = process.argv.slice(2)

  if (args.length < 2) {
    console.error(chalk.red('Usage: bun trace-png-to-svg <input> <output.svg> [options]'))
    console.error(chalk.dim('  --mono            Mono variant (fill="white", max 16px)'))
    console.error(chalk.dim('  --background      Background variant (max 14px)'))
    console.error(chalk.dim('  --threshold N     Black/white cutoff (0-255, default: 128)'))
    console.error(chalk.dim('  --color HEX       Fill color (e.g., "#1E90FF")'))
    console.error(chalk.dim('  --turnpolicy P    black|white|left|right|minority|majority'))
    console.error(chalk.dim('  --turdsize N      Speckle suppression size (default: 2)'))
    process.exit(1)
  }

  const inputPath = args[0]!
  const outputPath = args[1]!
  let mono = false
  let background = false
  let threshold = DEFAULT_THRESHOLD
  let color: string | null = null
  let turnPolicy = 'minority'
  let turdSize = DEFAULT_TURDSIZE

  for (let i = 2; i < args.length; i++) {
    switch (args[i]) {
      case '--mono':
        mono = true
        break
      case '--background':
        background = true
        break
      case '--threshold':
        threshold = parseInt(args[++i]!, 10)
        break
      case '--color':
        color = args[++i]!
        break
      case '--turnpolicy':
        turnPolicy = args[++i]!
        break
      case '--turdsize':
        turdSize = parseInt(args[++i]!, 10)
        break
    }
  }

  return { inputPath, outputPath, mono, background, threshold, color, turnPolicy, turdSize }
}

function ensurePotraceInstalled(): void {
  try {
    execSync('which potrace', { stdio: 'ignore' })
  } catch {
    console.log(chalk.yellow('potrace not found. Installing via Homebrew...'))
    try {
      execSync('brew install potrace', { stdio: 'inherit' })
    } catch {
      console.error(
        chalk.red(
          'Failed to install potrace. Install it manually:\n' +
            '  macOS:  brew install potrace\n' +
            '  Linux:  sudo apt-get install potrace\n',
        ),
      )
      process.exit(1)
    }
  }
}

function ensureSharpAvailable(): void {
  try {
    require.resolve('sharp')
  } catch {
    console.log(chalk.yellow('sharp not found. Installing...'))
    execSync('bun add -d sharp', { stdio: 'inherit', cwd: path.resolve(__dirname, '../..') })
  }
}

async function preprocessImage(
  inputPath: string,
  threshold: number,
): Promise<string> {
  const sharp = (await import('sharp')).default

  const tmpDir = path.join(path.resolve(__dirname, '../..'), 'node_modules', '.cache', 'web3icons')
  fs.mkdirSync(tmpDir, { recursive: true })
  const bmpPath = path.join(tmpDir, `trace-${Date.now()}.bmp`)

  // Read image, resize to a reasonable working size, convert to grayscale BMP
  await sharp(inputPath)
    .resize(256, 256, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .flatten({ background: { r: 0, g: 0, b: 0 } })
    .greyscale()
    .threshold(threshold)
    .toFormat('png')
    .toFile(bmpPath.replace('.bmp', '.png'))

  // Convert to PBM (Portable Bitmap) for potrace
  const pbmPath = bmpPath.replace('.bmp', '.pbm')
  const pngPath = bmpPath.replace('.bmp', '.png')

  // Use sharp to create a raw 1-bit image, then convert to PBM manually
  const { data, info } = await sharp(pngPath)
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true })

  // Create PBM (P4 binary format)
  const width = info.width
  const height = info.height
  const header = `P1\n${width} ${height}\n`
  const pixels: string[] = []
  for (let y = 0; y < height; y++) {
    const row: string[] = []
    for (let x = 0; x < width; x++) {
      const val = data[y * width + x]!
      row.push(val < 128 ? '1' : '0')
    }
    pixels.push(row.join(' '))
  }
  fs.writeFileSync(pbmPath, header + pixels.join('\n'))

  // Cleanup PNG
  fs.unlinkSync(pngPath)

  return pbmPath
}

function traceTeSvg(
  pbmPath: string,
  turnPolicy: string,
  turdSize: number,
): string {
  const svgPath = pbmPath.replace('.pbm', '.svg')

  execSync(
    `potrace "${pbmPath}" -s -o "${svgPath}" --turnpolicy ${turnPolicy} --turdsize ${turdSize} --flat`,
  )

  const svgContent = fs.readFileSync(svgPath, 'utf8')

  // Cleanup temp files
  fs.unlinkSync(pbmPath)
  fs.unlinkSync(svgPath)

  return svgContent
}

function reformatSvg(
  rawSvg: string,
  fillColor: string,
  isBackground: boolean,
): string {
  // Extract paths from the traced SVG
  const pathMatches = rawSvg.match(/<path[^>]*\/>/g) || rawSvg.match(/<path[^>]*>[\s\S]*?<\/path>/g) || []

  // Extract just the 'd' attributes
  const paths = pathMatches.map((p) => {
    const dMatch = p.match(/d="([^"]*)"/)
    return dMatch ? dMatch[1] : ''
  }).filter(Boolean)

  if (paths.length === 0) {
    console.error(chalk.red('No paths found in traced SVG'))
    process.exit(1)
  }

  // Parse original SVG dimensions to compute transform
  const widthMatch = rawSvg.match(/width="([^"]*)"/)
  const heightMatch = rawSvg.match(/height="([^"]*)"/)
  const viewBoxMatch = rawSvg.match(/viewBox="([^"]*)"/)

  let origWidth = 256
  let origHeight = 256

  if (viewBoxMatch) {
    const parts = viewBoxMatch[1]!.split(/\s+/)
    origWidth = parseFloat(parts[2]!)
    origHeight = parseFloat(parts[3]!)
  } else if (widthMatch && heightMatch) {
    origWidth = parseFloat(widthMatch[1]!.replace(/[^0-9.]/g, ''))
    origHeight = parseFloat(heightMatch[1]!.replace(/[^0-9.]/g, ''))
  }

  // Scale factor: largest side must be MAX_ICON_SIZE (16px), centered in 24x24
  // For background variant, use MAX_ICON_SIZE_BG (14px) instead
  const targetSize = isBackground ? MAX_ICON_SIZE_BG : MAX_ICON_SIZE
  const scale = targetSize / Math.max(origWidth, origHeight)
  const offsetX = (VIEWBOX_SIZE - origWidth * scale) / 2
  const offsetY = (VIEWBOX_SIZE - origHeight * scale) / 2

  const pathElements = paths
    .map(
      (d) =>
        `<path d="${d}" fill="${fillColor}" transform="translate(${offsetX.toFixed(3)},${offsetY.toFixed(3)}) scale(${scale.toFixed(6)})"/>`,
    )
    .join('\n')

  return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
${pathElements}
</svg>`
}

async function main() {
  const opts = parseArgs()

  if (!fs.existsSync(opts.inputPath)) {
    console.error(chalk.red(`Input file not found: ${opts.inputPath}`))
    process.exit(1)
  }

  const ext = path.extname(opts.inputPath).toLowerCase()
  if (!['.png', '.jpg', '.jpeg', '.webp', '.gif', '.bmp'].includes(ext)) {
    console.error(chalk.red(`Unsupported image format: ${ext}`))
    console.error(chalk.dim('Supported: PNG, JPEG, WebP, GIF, BMP'))
    process.exit(1)
  }

  console.log(chalk.blue(`Tracing ${path.basename(opts.inputPath)} to SVG...`))

  ensurePotraceInstalled()
  ensureSharpAvailable()

  // Step 1: Preprocess the image
  console.log(chalk.dim('  Preprocessing image...'))
  const pbmPath = await preprocessImage(opts.inputPath, opts.threshold)

  // Step 2: Trace to SVG using potrace
  console.log(chalk.dim('  Running potrace...'))
  const rawSvg = traceTeSvg(pbmPath, opts.turnPolicy, opts.turdSize)

  // Step 3: Reformat to 24x24 web3icons format
  console.log(chalk.dim('  Reformatting to 24x24...'))
  const fillColor = opts.color || (opts.mono ? 'white' : 'black')
  const finalSvg = reformatSvg(rawSvg, fillColor, opts.background)

  // Step 4: Write output
  const outputDir = path.dirname(opts.outputPath)
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(opts.outputPath, finalSvg)

  console.log(chalk.green(`SVG written to ${opts.outputPath}`))
  console.log(
    chalk.dim(
      `  Dimensions: ${VIEWBOX_SIZE}x${VIEWBOX_SIZE} | Fill: ${fillColor}`,
    ),
  )
}

main().catch((err) => {
  console.error(chalk.red('Error:'), err.message)
  process.exit(1)
})
