import fs from 'fs'
import path from 'path'
import { ensureDirectoryExists, generateReactComponent } from '../../utils'
import { TType } from '@web3icons/common'
import {
  JSX_TOKENS_OUT_DIR,
  JSX_NETWORKS_OUT_DIR,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  ROOT_REACT,
  JSX_WALLETS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  JSX_EXCHANGES_OUT_DIR,
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
} from '../../constants'
import { getSVGDirectories } from '../../utils/get-svg-directories'

interface MetadataEntry {
  id: string
  fileName: string
  variants: string[]
}

const getMetadataPath = (type: TType): string => {
  switch (type) {
    case 'token':
      return TOKENS_METADATA_PATH
    case 'network':
      return NETWORKS_METADATA_PATH
    case 'wallet':
      return WALLETS_METADATA_PATH
    case 'exchange':
      return EXCHANGES_METADATA_PATH
    default:
      throw new Error(`Unknown type: ${type}`)
  }
}

const processSVGs = async (type: TType): Promise<void> => {
  const variants = ['branded', 'mono', 'background']
  const componentTasks: Array<{
    baseName: string
    type: TType
    fileName: string
  }> = []

  const metadataPath = getMetadataPath(type)
  const metadata: MetadataEntry[] = JSON.parse(
    fs.readFileSync(metadataPath, 'utf-8'),
  )

  // Process each metadata entry
  for (const entry of metadata) {
    if (
      !entry.fileName.includes(':') ||
      entry.fileName.split(':').length !== 2
    ) {
      throw new Error(
        `Invalid fileName format: "${entry.fileName}". Expected format: "type:name" (e.g., "network:ethereum")`,
      )
    }
    const [type, name] = entry.fileName.split(':') as [TType, string]

    const { svgOutDir } = getSVGDirectories(type)

    const hasAnyVariant = variants.some((variant) =>
      fs.existsSync(path.join(svgOutDir, variant, `${name}.svg`)),
    )

    if (hasAnyVariant) {
      componentTasks.push({
        baseName: entry.id,
        type,
        fileName: entry.fileName,
      })
    }
  }

  // Process components in parallel batches
  const batchSize = 100
  const batches: (typeof componentTasks)[] = []
  for (let i = 0; i < componentTasks.length; i += batchSize) {
    batches.push(componentTasks.slice(i, i + batchSize))
  }

  for (const batch of batches) {
    await Promise.all(
      batch.map(({ baseName, fileName }) =>
        generateReactComponent(baseName, fileName),
      ),
    )
  }

  console.log(`→ generated ${componentTasks.length} ${type} components`)
}

export async function generateComponents() {
  console.log('Generating React components...')
  const startTime = performance.now()

  const dirsToEnsure = [
    path.join(ROOT_REACT, 'src'),
    path.join(ROOT_REACT, 'src', 'icons'),
    SVG_TOKENS_OUT_DIR,
    SVG_NETWORKS_OUT_DIR,
    SVG_WALLETS_OUT_DIR,
    SVG_EXCHANGES_OUT_DIR,
    JSX_TOKENS_OUT_DIR,
    JSX_NETWORKS_OUT_DIR,
    JSX_WALLETS_OUT_DIR,
    JSX_EXCHANGES_OUT_DIR,
  ]
  dirsToEnsure.forEach(ensureDirectoryExists)

  const svgDirs: { dir: string; type: TType }[] = [
    { dir: SVG_TOKENS_OUT_DIR, type: 'token' },
    { dir: SVG_NETWORKS_OUT_DIR, type: 'network' },
    { dir: SVG_WALLETS_OUT_DIR, type: 'wallet' },
    { dir: SVG_EXCHANGES_OUT_DIR, type: 'exchange' },
  ]

  // Process all types in parallel
  await Promise.all(svgDirs.map(({ type }) => processSVGs(type)))

  const endTime = performance.now()
  console.log(
    `✓ Component generation completed in ${((endTime - startTime) / 1000).toFixed(2)}s`,
  )
}
