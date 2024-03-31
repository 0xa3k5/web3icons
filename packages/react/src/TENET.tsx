import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTENET = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.907 18.188a2.202 2.202 0 0 1-3.814 0l-4.659-8.07a2.177 2.177 0 0 1 1.907-3.261h9.318c1.684 0 2.742 1.809 1.907 3.257l-4.659 8.079zm-1.071-9.514a.921.921 0 0 0-1.672 0L9.1 12.656a.94.94 0 0 0 0 .831l2.065 3.977a.921.921 0 0 0 1.672 0l2.065-3.977a.94.94 0 0 0 0-.831l-2.065-3.978z"
          />
        </>
      ) : (
        <>
          <path
            fill="#261C37"
            d="M13.908 18.188a2.202 2.202 0 0 1-3.815 0l-4.658-8.07a2.177 2.177 0 0 1 1.907-3.261h9.317c1.684 0 2.743 1.809 1.907 3.257l-4.658 8.079zm-1.072-9.514a.922.922 0 0 0-1.671 0l-2.066 3.982a.94.94 0 0 0 0 .831l2.066 3.977a.92.92 0 0 0 1.671 0l2.066-3.977a.94.94 0 0 0 0-.831l-2.066-3.978z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTENET.displayName = 'TENET'
