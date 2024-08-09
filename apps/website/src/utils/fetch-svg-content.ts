import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/core'

/**
 *
 * @param metadata pass icon to fetch
 * @param variant mono or branded
 * @param type tokens or networks
 * @returns svg content
 */
export async function fetchSvgContent(
  metadata: INetworkMetadata | ITokenMetadata | IWalletMetadata,
  variant: TVariant,
  type: TType,
): Promise<string> {
  console.log('metadata', metadata)
  console.log('variant', variant)
  console.log('type', type)

  try {
    let svgModule
    if (type === 'token') {
      if (variant === 'mono') {
        svgModule = await import(
          `@web3icons/core/svgs/tokens/mono/${(metadata as ITokenMetadata).symbol.toUpperCase()}.svg`
        )
      } else if (variant === 'branded') {
        svgModule = await import(
          `@web3icons/core/svgs/tokens/branded/${(metadata as ITokenMetadata).symbol.toUpperCase()}.svg`
        )
      }
    } else if (type === 'network') {
      if (variant === 'mono') {
        svgModule = await import(
          `@web3icons/core/svgs/networks/mono/${metadata.id.toLowerCase()}.svg`
        )
      } else if (variant === 'branded') {
        svgModule = await import(
          `@web3icons/core/svgs/networks/branded/${metadata.id.toLowerCase()}.svg`
        )
      }
    } else if (type === 'wallet') {
      if (variant === 'mono') {
        svgModule = await import(
          `@web3icons/core/svgs/wallets/mono/${metadata.id.toLowerCase()}.svg`
        )
      } else if (variant === 'branded') {
        svgModule = await import(
          `@web3icons/core/svgs/wallets/branded/${metadata.id.toLowerCase()}.svg`
        )
      }
    }

    if (!svgModule) {
      throw new Error('SVG module not found')
    }

    const response = await fetch(svgModule.default.src)
    return await response.text()
  } catch (err) {
    console.error(`Error fetching SVG ${name}:`, err)
    throw err
  }
}
