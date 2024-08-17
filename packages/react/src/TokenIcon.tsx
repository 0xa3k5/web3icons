import { forwardRef, ReactElement, useEffect, useState } from 'react'
import { ITokenMetadata, tokens } from '@web3icons/core'
import { TokenIconProps } from './types'
import { TOKEN_ICON_IMPORT_MAP } from './utils'

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
      defaultImg,
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
          setIconComponent(
            <img
              ref={ref as React.RefObject<HTMLImageElement>}
              src={defaultImg}
              alt="default icon"
              className={className}
              style={{ width: size, height: size }}
            />,
          )
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
            setIconComponent(
              <img
                ref={ref as React.RefObject<HTMLImageElement>}
                src={defaultImg}
                alt="default icon"
                className={className}
                style={{ width: size, height: size }}
              />,
            )
          }
        } else {
          setIconComponent(
            <img
              ref={ref as React.RefObject<HTMLImageElement>}
              src={defaultImg}
              alt="defult icon"
              className={className}
              style={{ width: size, height: size }}
            />,
          )
        }
      }
      loadIcon()
    }, [
      symbol,
      address,
      network,
      ref,
      size,
      className,
      variant,
      color,
      defaultImg,
    ])

    return IconComponent
  },
)

export const TokenIcon = forwardRef<SVGSVGElement, TokenIconProps>(
  (
    {
      symbol,
      size,
      className,
      variant = 'mono',
      color,
      address,
      network,
      defaultImg,
    },
    ref,
  ) => {
    const props = {
      color,
      size,
      variant,
      className,
      ref,
      defaultImg,
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
