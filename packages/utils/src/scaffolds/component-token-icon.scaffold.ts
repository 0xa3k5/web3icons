export const componentTokenIconScaffold = `import React from 'react'
import { tokens } from '@token-icons/core'
import * as IconComponents from './'

type IconComponentNames = keyof typeof IconComponents

export const TokenIcon: React.FC<IconComponents.TokenIconProps> = ({
  symbol,
  address,
  chain,
  size,
  className,
  variant = 'mono',
}) => {
  const iconName = resolveIconName(symbol, address, chain)

  const IconComponent =
    iconName in IconComponents
      ? IconComponents[iconName as IconComponentNames]
      : null

  if (!IconComponent) {
    return null
  }

  return <IconComponent size={size} className={className} variant={variant} />
}

function normalizeIconName(iconName: string) {
  return iconName.replace(/[- ]+/g, '_').toLocaleUpperCase()
}

function resolveIconName(
  symbol?: string,
  address?: string,
  chain?: string,
): keyof typeof IconComponents {
  let resolvedName: IconComponentNames = 'IconETH'

  if (symbol) {
    const tokenData = tokens.find((token) => token.symbol === symbol)
    if (tokenData) {
      resolvedName = \`Icon\${normalizeIconName(tokenData.symbol)}\` as IconComponentNames
    }
  }

  if (address) {
    const tokenData = tokens.find((token) =>
      Object.values(token.addresses).includes(address),
    )
    if (tokenData) {
      resolvedName = \`Icon\${normalizeIconName(tokenData.symbol)}\` as IconComponentNames
    }
  }

  if (chain) {
    const tokenData = tokens.find((token) => token.addresses[chain])
    if (tokenData) {
      resolvedName = \`Icon\${normalizeIconName(tokenData.symbol)}\` as IconComponentNames
    }
  }

  return resolvedName
}`
