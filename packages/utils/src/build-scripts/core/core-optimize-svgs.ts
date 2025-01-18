import * as path from 'path'
import fs from 'fs'
import {
  ROOT_CORE,
  SVG_TOKENS_SRC_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_SRC_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_SRC_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  SVG_EXCHANGES_SRC_DIR,
} from '../../constants'
import { ensureDirectoryExists, optimizeSvg } from '../../utils'
import { TVariant } from '@web3icons/common'

export function optimizeSVGs() {
  console.log('Optimizing SVGs...')
  ensureDirectoryExists(path.resolve(ROOT_CORE, 'src', 'svgs'))
  ensureDirectoryExists(SVG_TOKENS_OUT_DIR)
  ensureDirectoryExists(SVG_NETWORKS_OUT_DIR)
  ensureDirectoryExists(SVG_WALLETS_OUT_DIR)
  ensureDirectoryExists(SVG_EXCHANGES_OUT_DIR)
  ensureDirectoryExists(path.join(SVG_TOKENS_OUT_DIR, 'mono'))
  ensureDirectoryExists(path.join(SVG_TOKENS_OUT_DIR, 'branded'))
  ensureDirectoryExists(path.join(SVG_TOKENS_OUT_DIR, 'background'))
  ensureDirectoryExists(path.join(SVG_NETWORKS_OUT_DIR, 'mono'))
  ensureDirectoryExists(path.join(SVG_NETWORKS_OUT_DIR, 'branded'))
  ensureDirectoryExists(path.join(SVG_NETWORKS_OUT_DIR, 'background'))
  ensureDirectoryExists(path.join(SVG_WALLETS_OUT_DIR, 'mono'))
  ensureDirectoryExists(path.join(SVG_WALLETS_OUT_DIR, 'branded'))
  ensureDirectoryExists(path.join(SVG_WALLETS_OUT_DIR, 'background'))
  ensureDirectoryExists(path.join(SVG_EXCHANGES_OUT_DIR, 'mono'))
  ensureDirectoryExists(path.join(SVG_EXCHANGES_OUT_DIR, 'branded'))
  ensureDirectoryExists(path.join(SVG_EXCHANGES_OUT_DIR, 'background'))

  const readSVGsFromDir = (dir: string): Record<TVariant, string[]> => ({
    branded: fs.readdirSync(path.join(dir, 'branded')),
    mono: fs.readdirSync(path.join(dir, 'mono')),
    background: fs.readdirSync(path.join(dir, 'background')),
  })

  const processSVGs = (
    sourceDir: string,
    outDir: string,
    variant: TVariant,
    rawSVGs: string[],
  ): void => {
    rawSVGs.forEach((rawSVG) => {
      optimizeAndOutput(rawSVG, sourceDir, outDir, variant)
    })
    console.log(`→ optimized ${variant} in ${path.basename(sourceDir)}:`, rawSVGs.length)
  }

  const optimizeAndOutput = (
    rawSVG: string,
    sourceDir: string,
    outDir: string,
    variant: TVariant,
  ): void => {
    const baseName = path.basename(rawSVG, '.svg')
    const svgFilePath = path.join(sourceDir, variant, rawSVG)
    const optimizedSVG = optimizeSvg(fs.readFileSync(svgFilePath, 'utf-8'), baseName)
    fs.writeFileSync(path.join(outDir, variant, rawSVG), optimizedSVG)
  }

  const types = [
    { srcDir: SVG_TOKENS_SRC_DIR, outDir: SVG_TOKENS_OUT_DIR },
    { srcDir: SVG_NETWORKS_SRC_DIR, outDir: SVG_NETWORKS_OUT_DIR },
    { srcDir: SVG_WALLETS_SRC_DIR, outDir: SVG_WALLETS_OUT_DIR },
    { srcDir: SVG_EXCHANGES_SRC_DIR, outDir: SVG_EXCHANGES_OUT_DIR },
  ]

  types.forEach(({ srcDir, outDir }) => {
    const svgVariants = readSVGsFromDir(srcDir)
    Object.entries(svgVariants).forEach(([variant, svgList]) => {
      processSVGs(srcDir, outDir, variant as TVariant, svgList)
    })
  })
}
