import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXRUNE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.571 12.857 6.442-8.143-2.589 6.429h3.004l-6.381 8.143 2.567-6.429z"
          />
        </>
      ) : (
        <>
          <path
            fill="#28DBD1"
            d="m8.571 12.857 6.442-8.143-2.589 6.429h3.004l-6.381 8.143 2.567-6.429z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXRUNE.displayName = 'XRUNE'
