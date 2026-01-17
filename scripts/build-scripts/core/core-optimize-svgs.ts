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
import {
  ensureDirectoryExists,
  optimizeSvg,
  addWeb3IconsClass,
} from '../../utils'
import { TVariant } from '@web3icons/common'
import {
  loadCache,
  saveCache,
  hasFileChanged,
  updateFileCache,
  isIncrementalEnabled,
} from '../../utils/build-cache'

export async function optimizeSVGs() {
  console.log('Optimizing SVGs...')
  const startTime = performance.now()
  const incrementalEnabled = isIncrementalEnabled()
  const cache = incrementalEnabled ? loadCache() : {}

  if (incrementalEnabled) {
    console.log('→ Incremental build enabled')
  }

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

  const optimizeAndOutput = async (
    rawSVG: string,
    sourceDir: string,
    outDir: string,
    variant: TVariant,
  ): Promise<boolean> => {
    const baseName = path.basename(rawSVG, '.svg')
    const svgFilePath = path.join(sourceDir, variant, rawSVG)
    const outputPath = path.join(outDir, variant, rawSVG)

    // Skip if file hasn't changed AND output exists
    if (
      incrementalEnabled &&
      !hasFileChanged(svgFilePath, cache) &&
      fs.existsSync(outputPath)
    ) {
      return false
    }

    const svgContent = await fs.promises.readFile(svgFilePath, 'utf-8')
    const optimizedSVG = optimizeSvg(svgContent, baseName)
    const finalSVG = addWeb3IconsClass(optimizedSVG)
    await fs.promises.writeFile(outputPath, finalSVG)

    if (incrementalEnabled) {
      updateFileCache(svgFilePath, cache)
    }

    return true
  }

  const processSVGsBatch = async (
    sourceDir: string,
    outDir: string,
    variant: TVariant,
    rawSVGs: string[],
    batchSize: number = 100,
  ): Promise<void> => {
    const batches: string[][] = []
    for (let i = 0; i < rawSVGs.length; i += batchSize) {
      batches.push(rawSVGs.slice(i, i + batchSize))
    }

    let processedCount = 0
    for (const batch of batches) {
      const results = await Promise.all(
        batch.map((rawSVG) =>
          optimizeAndOutput(rawSVG, sourceDir, outDir, variant),
        ),
      )
      processedCount += results.filter(Boolean).length
    }

    if (incrementalEnabled) {
      console.log(
        `→ optimized ${variant} in ${path.basename(sourceDir)}: ${processedCount}/${rawSVGs.length} (${rawSVGs.length - processedCount} cached)`,
      )
    } else {
      console.log(
        `→ optimized ${variant} in ${path.basename(sourceDir)}:`,
        rawSVGs.length,
      )
    }
  }

  const types = [
    { srcDir: SVG_TOKENS_SRC_DIR, outDir: SVG_TOKENS_OUT_DIR },
    { srcDir: SVG_NETWORKS_SRC_DIR, outDir: SVG_NETWORKS_OUT_DIR },
    { srcDir: SVG_WALLETS_SRC_DIR, outDir: SVG_WALLETS_OUT_DIR },
    { srcDir: SVG_EXCHANGES_SRC_DIR, outDir: SVG_EXCHANGES_OUT_DIR },
  ]

  await Promise.all(
    types.flatMap(({ srcDir, outDir }) => {
      const svgVariants = readSVGsFromDir(srcDir)
      return Object.entries(svgVariants).map(([variant, svgList]) =>
        processSVGsBatch(srcDir, outDir, variant as TVariant, svgList),
      )
    }),
  )

  if (incrementalEnabled) {
    saveCache(cache)
  }

  const endTime = performance.now()
  console.log(
    `✓ SVG optimization completed in ${((endTime - startTime) / 1000).toFixed(2)}s`,
  )
}
