'use client'
import { useState, useEffect } from 'react'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/core'

type UseFetchSvgContentArgs = {
  metadata: INetworkMetadata | ITokenMetadata | IWalletMetadata
  variant: TVariant
  type: TType
}

export const useSvgContent = ({
  metadata,
  variant,
  type,
}: UseFetchSvgContentArgs) => {
  const [svgContent, setSvgContent] = useState<string>('')
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchSvg = async () => {
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
        const svgText = await response.text()
        setSvgContent(svgText)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchSvg()
  }, [metadata, variant, type])

  return { svgContent, error, loading }
}
