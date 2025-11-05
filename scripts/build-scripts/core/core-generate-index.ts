import * as fs from 'fs'
import * as path from 'path'
import { kebabToPascalCase } from '../../utils'
import { TType, TVariant, TMetadata, ITokenMetadata } from '@web3icons/common'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  ROOT_CORE,
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

export function generateIndex() {
  let svgsIndexContent = ''

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

      // Generate export name based on metadata type (where entry is defined)
      const baseName =
        metadataSourceType === 'token'
          ? (entry as ITokenMetadata).symbol.toUpperCase()
          : kebabToPascalCase(entry.id)

      // Process each available variant
      for (const variant of variants) {
        const variantPascal = variant.charAt(0).toUpperCase() + variant.slice(1) // Branded, Mono, Background
        const typePascal =
          metadataSourceType.charAt(0).toUpperCase() +
          metadataSourceType.slice(1) // Token, Network, Wallet, Exchange
        const exportName = `${typePascal}${variantPascal}${baseName}`

        // Export path points to SVG source location (from filePath)
        svgsIndexContent += `export * as ${exportName} from './${svgSourceType}s/${variant}/${svgFileName}.svg';\n`
      }
    }
  }

  // Process all metadata types
  processMetadata('token')
  processMetadata('network')
  processMetadata('wallet')
  processMetadata('exchange')

  fs.writeFileSync(path.join(ROOT_CORE, 'src/svgs/index.ts'), svgsIndexContent)

  console.log(
    `✓ Generated: svgs index at ${path.join(ROOT_CORE, 'src/svgs/index.ts')}`,
  )
}
