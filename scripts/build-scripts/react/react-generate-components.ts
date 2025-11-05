import fs from 'fs'
import path from 'path'
import {
  ensureDirectoryExists,
  generateReactComponent,
  validateAllFilePaths,
} from '../../utils'
import { ITokenMetadata, TMetadata, TType } from '@web3icons/common'
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

const processSVGs = async (metadataSourceType: TType): Promise<void> => {
  const componentTasks: Array<{
    baseName: string
    metadataSourceType: TType
    svgSourceType: TType
    svgFileName: string
  }> = []

  const metadataPath = getMetadataPath(metadataSourceType)
  const metadata: TMetadata[] = JSON.parse(
    fs.readFileSync(metadataPath, 'utf-8'),
  )

  // Validate all filePaths before processing
  const validationErrors = validateAllFilePaths(metadata, metadataSourceType)
  if (validationErrors.length > 0) {
    console.error(
      `\n❌ Found ${validationErrors.length} invalid filePath reference(s) in ${metadataSourceType}s metadata:\n`,
    )
    validationErrors.forEach(({ id, filePath, error }) => {
      console.error(`  - ${id} (filePath: "${filePath}"): ${error}`)
    })
    throw new Error(
      `Invalid filePath references found in ${metadataSourceType}s metadata. Please fix the errors above.`,
    )
  }

  // Process each metadata entry
  for (const entry of metadata) {
    if (
      !entry.filePath.includes(':') ||
      entry.filePath.split(':').length !== 2
    ) {
      throw new Error(
        `Invalid filePath format: "${entry.filePath}". Expected format: "type:name" (e.g., "network:ethereum")`,
      )
    }
    const [svgSourceType, svgFileName] = entry.filePath.split(':') as [
      TType,
      string,
    ]

    componentTasks.push({
      baseName:
        metadataSourceType === 'token'
          ? (entry as ITokenMetadata).symbol
          : entry.id,
      metadataSourceType,
      svgSourceType,
      svgFileName,
    })
  }

  // Process components in parallel batches
  const batchSize = 100
  const batches: (typeof componentTasks)[] = []
  for (let i = 0; i < componentTasks.length; i += batchSize) {
    batches.push(componentTasks.slice(i, i + batchSize))
  }

  for (const batch of batches) {
    await Promise.all(
      batch.map(
        ({ baseName, metadataSourceType, svgSourceType, svgFileName }) =>
          generateReactComponent(
            baseName,
            metadataSourceType,
            svgSourceType,
            svgFileName,
          ),
      ),
    )
  }

  console.log(
    `→ generated ${componentTasks.length} ${metadataSourceType} components`,
  )
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
