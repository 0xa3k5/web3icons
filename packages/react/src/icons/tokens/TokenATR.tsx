import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenATR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.2 12.058v-.059a5.6 5.6 0 1 0-5.6 5.6h5.6z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M18 10.4a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M15.2 12.058v-.059a5.6 5.6 0 1 0-5.6 5.6h5.6z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#000" d="M18 10.4a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
        </>
      )}
    </BaseIcon>
  ),
)

TokenATR.displayName = 'ATR'
