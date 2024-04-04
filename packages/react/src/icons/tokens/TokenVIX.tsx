import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenVIX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 18.857 5.143 6.454c2.43-.291 4.106 1.826 5.002 4.016l3.57 8.387z"
          />
          <path
            fill="currentColor"
            d="m13.715 18.857 5.142-12.403c-2.43-.291-4.105 1.826-5.001 4.016l-3.57 8.387z"
          />
        </>
      ) : (
        <>
          <path
            fill="#BDE6F3"
            d="M9.857 18.857 5.143 6.454c2.43-.291 4.105 1.826 5.001 4.016l3.57 8.387z"
          />
          <path
            fill="#32B5E1"
            d="m13.714 18.857 5.143-12.403c-2.43-.291-4.106 1.826-5.002 4.016l-3.57 8.387z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenVIX.displayName = 'VIX'
