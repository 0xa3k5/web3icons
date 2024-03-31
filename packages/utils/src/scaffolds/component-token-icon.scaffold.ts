export const componentTokenIconScaffold = `import React from 'react'
import { tokens } from '@token-icons/core'
import * as IconComponents from './'
import { TokenIconProps } from './'
import { forwardRef } from 'react'

type IconComponentNames = keyof typeof IconComponents

type IconComponentType = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IconComponents.IconComponentProps> &
    React.RefAttributes<SVGSVGElement>
>

export const TokenIcon = forwardRef<SVGSVGElement, TokenIconProps>(
  ({ symbol, address, chain, size, className, variant = 'mono' }, ref) => {
    const iconName = resolveIconName(symbol, address, chain)

    const IconComponent =
      (IconComponents[iconName] as IconComponentType) || null

    if (!IconComponent) {
      return null
    }

    return (
      <IconComponent
        size={size}
        className={className}
        variant={variant}
        ref={ref}
      />
    )
  },
)

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
      resolvedName =
        \`Icon\${normalizeIconName(tokenData.symbol)}\` as IconComponentNames
    }
  }

  if (address) {
    const tokenData = tokens.find((token) =>
      Object.values(token.addresses).includes(address),
    )
    if (tokenData) {
      resolvedName =
        \`Icon\${normalizeIconName(tokenData.symbol)}\` as IconComponentNames
    }
  }

  if (chain) {
    const tokenData = tokens.find((token) => token.addresses[chain])
    if (tokenData) {
      resolvedName =
        \`Icon\${normalizeIconName(tokenData.symbol)}\` as IconComponentNames
    }
  }

  return resolvedName
}
`
