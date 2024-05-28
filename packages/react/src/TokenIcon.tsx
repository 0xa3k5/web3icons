import { forwardRef, ReactElement, useEffect, useState } from 'react'
import { tokens } from '@token-icons/core/metadata'
import { TokenIconProps } from './types'
import { TOKEN_ICON_IMPORT_MAP } from './icon-import-map'
import { ITokenMetadata } from '@token-icons/core'

const findToken = (
  symbol?: string,
  address?: string,
  network?: string,
): ITokenMetadata | undefined => {
  if (symbol) {
    return tokens.find(
      (token) => token.symbol.toLowerCase() === symbol.toLowerCase(),
    )
  } else if (address && network) {
    return tokens.find(
      (token) =>
        token.addresses[network]?.toLowerCase() === address.toLowerCase(),
    )
  }
  return undefined
}

const DynamicIconLoader = forwardRef<SVGSVGElement, TokenIconProps>(
  (
    {
      symbol,
      size,
      className,
      variant,
      color,
      address,
      network,
    }: TokenIconProps,
    ref,
  ): ReactElement | null => {
    const [IconComponent, setIconComponent] = useState<ReactElement | null>(
      null,
    )

    useEffect(() => {
      const loadIcon = async () => {
        const tokenData = findToken(symbol, address, network)

        if (!tokenData) {
          setIconComponent(null)
          return
        }

        const iconName = `Token${tokenData.symbol.toUpperCase()}`
        const importFunction = TOKEN_ICON_IMPORT_MAP[iconName]

        if (importFunction) {
          try {
            const { default: ImportedIcon } = await importFunction()
            setIconComponent(
              <ImportedIcon
                ref={ref}
                symbol={tokenData.symbol}
                size={size}
                color={color}
                className={className}
                variant={variant}
              />,
            )
          } catch (error) {
            console.error(`Error loading icon: ${iconName}`, error)
            setIconComponent(null)
          }
        } else {
          setIconComponent(null)
        }
      }
      loadIcon()
    }, [symbol, address, network, ref, size, className, variant, color])

    return IconComponent
  },
)

export const TokenIcon = forwardRef<SVGSVGElement, TokenIconProps>(
  (
    { symbol, size, className, variant = 'mono', color, address, network },
    ref,
  ) => {
    const props = {
      color,
      size,
      variant,
      className,
      ref,
    }

    if (symbol) {
      return <DynamicIconLoader symbol={symbol} {...props} />
    }

    if (address && network) {
      return (
        <DynamicIconLoader address={address} network={network} {...props} />
      )
    }
  },
)

TokenIcon.displayName = 'TokenIcon'
