import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMBL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.571 18V6l7.715 1.521-3.429.622-3-.622v8.936l3-.6 3.429.6z"
          />
          <path
            fill="currentColor"
            d="M19.286 7.286 9.856 9.09v5.897l9.43 1.727z"
          />
        </>
      ) : (
        <>
          <path
            fill="#5B449B"
            d="M5.571 18V6l7.715 1.521-3.429.622-3-.622v8.936l3-.6 3.429.6z"
          />
          <path
            fill="#5B449B"
            d="M19.286 7.286 9.857 9.09v5.897l9.429 1.727z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMBL.displayName = 'MBL'
