import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconRDN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.223 13.286c.031-4.903-4.612-7.757-6.937-8.572h6.533c3.097 2.275 3.79 6.663 3.75 8.572zm-4.795-2.572v9.429l4.286-2.387z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M14.223 13.286c.032-4.903-4.611-7.757-6.937-8.572h6.534c3.097 2.275 3.79 6.663 3.75 8.572zm-4.794-2.572v9.429l4.286-2.387z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconRDN.displayName = 'RDN'
