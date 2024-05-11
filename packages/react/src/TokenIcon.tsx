import { forwardRef, Suspense, lazy } from 'react'
import { tokens } from '@token-icons/core/metadata'
import { TokenIconProps } from './types'
import TokenIconLogo from './Logo'
import { TOKEN_ICON_IMPORT_MAP } from './icon-import-map'

// Normalizes token names to match import paths
const normalizeTokenName = (iconName: string) => {
  return iconName.replace(/[- ]+/g, '_').toUpperCase()
}

export const TokenIcon = forwardRef<SVGSVGElement, TokenIconProps>(
  (
    { symbol, size, className, variant = 'mono', color, address, network },
    ref,
  ) => {
    let tokenData

    if (symbol) {
      tokenData = tokens.find(
        (token) => token.symbol.toLowerCase() === symbol.toLowerCase(),
      )
    } else if (address && network) {
      tokenData = tokens.find(
        (token) =>
          token.addresses[network]?.toLowerCase() === address.toLowerCase(),
      )
    }

    if (tokenData) {
      const iconName = `Token${normalizeTokenName(tokenData.symbol)}`
      const importFunction = TOKEN_ICON_IMPORT_MAP[iconName]

      if (!importFunction) {
        return (
          <TokenIconLogo variant="branded" size={size} className={className} />
        )
      }

      const IconComponent = lazy(importFunction)

      return (
        <Suspense
          fallback={
            <TokenIconLogo
              variant="branded"
              size={size}
              className={className}
            />
          }
        >
          <IconComponent
            symbol={symbol!}
            size={size}
            color={color}
            className={className}
            variant={variant}
            ref={ref}
          />
        </Suspense>
      )
    }
  },
)

TokenIcon.displayName = 'TokenIcon'
