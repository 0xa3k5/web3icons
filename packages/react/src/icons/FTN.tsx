import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconFTN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.562 19.26a1.12 1.12 0 0 0 .968-.257l7.063-6.253a1.23 1.23 0 0 0 .343-1.294 1.23 1.23 0 0 0-1.063-.836l-4.539-.428 2.773-3.763a1.09 1.09 0 0 0-.111-1.397 1.14 1.14 0 0 0-.776-.318c-.274 0-.54.099-.741.283l-7.072 6.24a1.217 1.217 0 0 0 .065 1.877c.188.15.42.236.66.257l4.538.438-2.773 3.763a1.072 1.072 0 0 0 .665 1.688"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF008C"
            d="M9.562 19.26a1.12 1.12 0 0 0 .968-.257l7.063-6.253a1.23 1.23 0 0 0 .343-1.294 1.23 1.23 0 0 0-1.063-.836l-4.539-.428 2.773-3.763a1.09 1.09 0 0 0-.111-1.397 1.14 1.14 0 0 0-.776-.318c-.274 0-.54.099-.741.283l-7.072 6.24a1.217 1.217 0 0 0 .065 1.877c.188.15.42.236.66.257l4.538.438-2.773 3.763a1.072 1.072 0 0 0 .665 1.688"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFTN.displayName = 'FTN'
