import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconEquad = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15.463 17.919.822.938h2.143l-4.714-5.143h-1.928L14.31 16.6a5.143 5.143 0 1 1 1.521-1.162l1.14 1.286a6.858 6.858 0 1 0-1.504 1.196z"
          />
        </>
      ) : (
        <>
          <path
            fill="#191A4C"
            d="m15.463 17.919.823.938h2.143l-4.714-5.143h-1.929L14.31 16.6a5.143 5.143 0 1 1 1.522-1.162l1.14 1.286a6.858 6.858 0 1 0-1.505 1.196z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconEquad.displayName = 'Equad'

export default IconEquad
