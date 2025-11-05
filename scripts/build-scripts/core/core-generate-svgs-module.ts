import fs from 'fs'
import path from 'path'
import {
  CORE_SVG_MODULE_PATH,
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
} from '../../constants'
import { kebabToPascalCase } from '../../utils'
import { TType, TVariant, TMetadata, ITokenMetadata } from '@web3icons/common'

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
  }
}

const getSvgOutDir = (type: TType): string => {
  switch (type) {
    case 'token':
      return SVG_TOKENS_OUT_DIR
    case 'network':
      return SVG_NETWORKS_OUT_DIR
    case 'wallet':
      return SVG_WALLETS_OUT_DIR
    case 'exchange':
      return SVG_EXCHANGES_OUT_DIR
  }
}

const getAvailableVariants = (
  svgOutDir: string,
  fileName: string,
): TVariant[] => {
  const variants: TVariant[] = []
  if (fs.existsSync(path.join(svgOutDir, 'branded', `${fileName}.svg`))) {
    variants.push('branded')
  }
  if (fs.existsSync(path.join(svgOutDir, 'mono', `${fileName}.svg`))) {
    variants.push('mono')
  }
  if (fs.existsSync(path.join(svgOutDir, 'background', `${fileName}.svg`))) {
    variants.push('background')
  }
  return variants
}

export function generateSvgModule() {
  let fileContent = '/* Generated */\n'

  // Store entries organized by metadata type and variant
  const entriesByType: Record<
    TType,
    Record<TVariant, Array<{ key: string; importName: string }>>
  > = {
    token: { branded: [], mono: [], background: [] },
    network: { branded: [], mono: [], background: [] },
    wallet: { branded: [], mono: [], background: [] },
    exchange: { branded: [], mono: [], background: [] },
  }

  const processMetadata = (metadataSourceType: TType) => {
    const metadataPath = getMetadataPath(metadataSourceType)
    const metadata: TMetadata[] = JSON.parse(
      fs.readFileSync(metadataPath, 'utf-8'),
    )

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
      const svgOutDir = getSvgOutDir(svgSourceType)
      const variants = getAvailableVariants(svgOutDir, svgFileName)

      // Get the name/symbol to use as the key in the svgs object
      const entryKey =
        metadataSourceType === 'token'
          ? (entry as ITokenMetadata).symbol.toLowerCase()
          : entry.id

      // Generate import name based on metadata type (where entry is defined)
      const typeAbbrev = metadataSourceType.slice(0, 1).toUpperCase() // T, N, W, E
      const baseName =
        metadataSourceType === 'token'
          ? (entry as ITokenMetadata).symbol.toUpperCase()
          : kebabToPascalCase(entry.id)

      // Process each available variant
      for (const variant of variants) {
        const variantPascal = variant.charAt(0).toUpperCase() + variant.slice(1) // Branded, Mono, Background
        const importName = `${typeAbbrev}${variantPascal}${baseName}`

        // Generate import statement (references SVG source location from filePath)
        fileContent += `import * as ${importName} from './svgs/${svgSourceType}s/${variant}/${svgFileName}.svg';\n`

        // Store for svgs object (organized by metadata source type)
        entriesByType[metadataSourceType][variant].push({
          key: entryKey,
          importName,
        })
      }
    }
  }

  // Process all metadata types
  processMetadata('token')
  processMetadata('network')
  processMetadata('wallet')
  processMetadata('exchange')

  // Generate svgs object
  let svgObjectContent = '\nexport const svgs = {\n'

  const types: TType[] = ['token', 'network', 'wallet', 'exchange']
  for (const type of types) {
    const variants: TVariant[] = ['branded', 'mono', 'background']
    svgObjectContent += `  ${type}s: {\n`

    for (const variant of variants) {
      svgObjectContent += `    ${variant}: {\n`
      for (const entry of entriesByType[type][variant]) {
        svgObjectContent += `      '${entry.key}': ${entry.importName},\n`
      }
      svgObjectContent += `    },\n`
    }

    svgObjectContent += `  },\n`
  }

  svgObjectContent += '};\n'

  fs.writeFileSync(CORE_SVG_MODULE_PATH, fileContent + svgObjectContent)

  console.log('✓ Generated: svgs module')
}
