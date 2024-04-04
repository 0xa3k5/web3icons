import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenBASE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.986 20C16.412 20 20 16.418 20 12s-3.588-8-8.014-8A8.01 8.01 0 0 0 4 11.328h10.593v1.345H4C4.342 16.776 7.787 20 11.986 20"
          />
        </>
      ) : (
        <>
          <path
            fill="#0052FF"
            d="M11.986 20C16.412 20 20 16.418 20 12s-3.588-8-8.014-8A8.01 8.01 0 0 0 4 11.328h10.593v1.345H4C4.342 16.776 7.787 20 11.986 20"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenBASE.displayName = 'BASE'
