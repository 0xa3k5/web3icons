import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconARV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m14.473 14.927-1.264-2.07h2.434l1.903 3.176a6.856 6.856 0 1 0-11.091 0L12 6.428 15.214 12H12.78L12 10.59l-1.298 2.267h1.813L13.779 15H9.467L7.96 17.54A6.83 6.83 0 0 0 12 18.857a6.83 6.83 0 0 0 4-1.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="#739574"
            d="m14.473 14.927-1.265-2.07h2.435l1.902 3.176a6.856 6.856 0 1 0-11.091 0L12 6.428 15.214 12H12.78L12 10.59l-1.3 2.267h1.813L13.778 15H9.467l-1.509 2.54A6.83 6.83 0 0 0 12 18.857a6.83 6.83 0 0 0 3.998-1.286z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconARV.displayName = 'ARV'
