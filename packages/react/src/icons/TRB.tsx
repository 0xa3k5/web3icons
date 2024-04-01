import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTRB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.695 9.413c.523 2.076-9.771 7.206-14.437 8.426-4.667 1.219 9.023-4.793 8.489-6.869S2.3 10.596 6.967 9.377c4.666-1.22 12.205-2.04 12.728.036"
          />
        </>
      ) : (
        <>
          <path
            fill="#20FE9C"
            d="M19.695 9.413c.523 2.076-9.771 7.206-14.437 8.426-4.667 1.219 9.023-4.793 8.489-6.869S2.3 10.596 6.967 9.377c4.666-1.22 12.205-2.04 12.728.036"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTRB.displayName = 'TRB'
