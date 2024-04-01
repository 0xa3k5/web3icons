import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconQUIDD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.286 17.893a7.285 7.285 0 1 0-2.143 1.071v-3.253A4.286 4.286 0 1 1 16.286 12zM12 14.143a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286"
          />
        </>
      ) : (
        <>
          <path
            fill="#6B10D7"
            d="M16.286 17.893a7.285 7.285 0 1 0-2.143 1.071v-3.253A4.286 4.286 0 1 1 16.286 12zM12 14.143a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconQUIDD.displayName = 'QUIDD'
