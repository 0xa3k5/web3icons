import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconXIDO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6 5.143 6 4.714 6-4.714V8.98l-3.531 3L18 14.992v3.857L6 8.777zm.429.87v2.572l11.142 9.35v-2.763l-3.754-3.193 3.754-3.193V6.009L12 10.389zM9.42 12.13l2.151 1.92L6 18.857v-3.87zm.017.536L6.43 15.172v2.742l4.478-3.844-1.47-1.414z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="m6 5.143 6 4.714 6-4.714V8.98l-3.531 3L18 14.992v3.857L6 8.777zm.429.87v2.572l11.142 9.35v-2.763l-3.754-3.193 3.754-3.193V6.009L12 10.389zM9.42 12.13l2.151 1.92L6 18.857v-3.87zm.017.536L6.43 15.172v2.742l4.478-3.844-1.47-1.414z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXIDO.displayName = 'XIDO'
