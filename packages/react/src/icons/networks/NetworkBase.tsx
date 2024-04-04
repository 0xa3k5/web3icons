import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkBase = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.986 20.592c4.426 0 8.014-3.581 8.014-8 0-4.418-3.588-8-8.014-8A8.01 8.01 0 0 0 4 11.92h10.593v1.345H4c.342 4.103 3.787 7.327 7.986 7.327"
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

NetworkBase.displayName = 'base'
