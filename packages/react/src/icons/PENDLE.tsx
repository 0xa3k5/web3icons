import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPENDLE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.917 15.224a4.4 4.4 0 0 0-2.576 1.211A7.96 7.96 0 0 1 4 12a8 8 0 0 1 3.917-6.881zm.981.001a4.4 4.4 0 0 1 3.89 4.737 8 8 0 1 0-3.89-15.338z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M18.4 10.4a6.4 6.4 0 1 1-12.8 0 6.4 6.4 0 0 1 12.8 0"
          />
          <path
            fill="#152E51"
            d="M9.121 20a3.521 3.521 0 1 0 0-7.042 3.521 3.521 0 0 0 0 7.042"
          />
          <path
            fill="#152E51"
            d="M8.733 4.895V13.8h.785V4.5a6 6 0 0 0-.785.396"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPENDLE.displayName = 'PENDLE'
