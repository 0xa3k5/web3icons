import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXDG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 5.143h6.503c1.644.022 4.958 1.378 5.066 6.623s-3.333 6.913-5.066 7.091H7.286v-6H6v-2.142h1.286zm2.143 2.143h3.5c1.253.014 3.766.934 3.785 4.5.023 4.218-2.524 4.929-3.786 4.929h-3.5v-3.858h3.858v-2.142H9.429z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#BA9F33"
            d="M7.286 5.143h6.503c1.644.022 4.958 1.378 5.066 6.623s-3.333 6.913-5.066 7.091H7.286v-6H6v-2.142h1.286zm2.143 2.143h3.5c1.253.014 3.766.934 3.785 4.5.023 4.218-2.524 4.929-3.786 4.929h-3.5v-3.858h3.858v-2.142H9.429z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXDG.displayName = 'XDG'
