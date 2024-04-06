import { forwardRef } from 'react'
import { tokens } from '@token-icons/core/metadata'
import * as TokenComponents from './icons/tokens'
import { TokenIconProps } from './types'

type TokenComponentNames = keyof typeof TokenComponents

export const TokenIcon = forwardRef<SVGSVGElement, TokenIconProps>(
  ({ symbol, size, className, variant = 'mono', color, address }, ref) => {
    const iconName = resolveIconName(symbol, address)
    const IconComponent = iconName ? TokenComponents[iconName] : null

    if (!IconComponent) {
      console.warn(`Icon not found: ${iconName}`)
      return null
    }

    return (
      <IconComponent
        size={size}
        color={color}
        className={className}
        variant={variant}
        ref={ref}
      />
    )
  },
)

function normalizeTokenName(iconName: string) {
  return iconName.replace(/[- ]+/g, '_').toLocaleUpperCase()
}

function resolveIconName(
  symbol?: string,
  address?: string,
): TokenComponentNames | null {
  if (symbol) {
    const tokenData = tokens.find((token) => token.symbol === symbol)
    if (tokenData) {
      return `Token${normalizeTokenName(tokenData.symbol)}` as TokenComponentNames
    }
  } else if (address) {
    const tokenData = tokens.find((token) =>
      Object.values(token.addresses).includes(address.toLocaleLowerCase()),
    )
    if (tokenData) {
      return `Token${normalizeTokenName(tokenData.symbol)}` as TokenComponentNames
    }
  }

  return null
}
