import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconRAM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m14.829 16.097 5.743-5.726-3.065-3.085-1.234 1.234 1.599 1.594-3.15 3.142-2.752-2.743-1.367 1.363 4.23 4.221zm-5.657 0-5.743-5.726 2.828-2.854 1.235 1.234-1.62 1.62 3.15 3.142 1.14-1.136 1.371 1.363-2.366 2.357zm2.777-1.869-2.323 2.315 2.323 2.314 2.318-2.314z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="m14.829 16.097 5.743-5.726-3.065-3.085-1.234 1.234 1.599 1.594-3.15 3.142-2.752-2.743-1.367 1.363 4.23 4.221zm-5.657 0-5.743-5.726 2.828-2.854 1.235 1.234-1.62 1.62 3.15 3.142 1.14-1.136 1.371 1.363-2.366 2.357zm2.777-1.869-2.323 2.315 2.323 2.314 2.318-2.314z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRAM.displayName = 'RAM'
