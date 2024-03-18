import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconNrg = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.115 9.244 12 13.462 10.51 12l2.588-2.648L12 8.194l-4.028 3.93L12 16.037l5.486-5.408L18.857 12 12 18.857 5.143 12 12 5.143z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0BC98D"
            d="M16.114 9.244 12 13.462 10.508 12l2.589-2.648L12 8.194l-4.029 3.93L12 16.037l5.485-5.408L18.857 12 12 18.857 5.143 12 12 5.143z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNrg.displayName = 'Nrg'

export default IconNrg
