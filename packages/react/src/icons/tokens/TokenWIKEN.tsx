import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenWIKEN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M3 9h18l-6.6 8.143-2.4-2.91-2.4 2.91zm11.417 6 4.226-4.714H5.357L9.583 15 12 12.429z"
          />
        </>
      ) : (
        <>
          <path
            fill="#474747"
            d="M3 9h18l-6.6 8.143-2.4-2.91-2.4 2.91zm11.417 6 4.226-4.714H5.357L9.583 15 12 12.429z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenWIKEN.displayName = 'WIKEN'
