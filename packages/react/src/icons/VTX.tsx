import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVTX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M4.714 7.286 12 19.714l7.286-12.428zm12.446 0L12 16.127 7.86 9h4.037l-.99 1.744 1.08 1.809 3.086-5.267z"
          />
        </>
      ) : (
        <>
          <path
            fill="#6869E6"
            d="M4.714 7.286 12 19.714l7.285-12.428zm12.446 0L12 16.127 7.86 9h4.037l-.99 1.744 1.08 1.809 3.085-5.267z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVTX.displayName = 'VTX'
