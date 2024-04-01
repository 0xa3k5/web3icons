import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCRO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.572 5.572-.858 3.857h8.572l-.857-3.857zM9.429 12 7.54 10.718l-2.611 1.71 3.49 6h1.322l1.402-1.607v-.73l-1.714-1.558zm5.038-1.714h-4.77L10.714 12l-.468 2.143h3.678L13.286 12zM14.572 12l1.888-1.463 2.612 1.892-3.441 6h-1.272l-1.515-1.62v-.749l1.728-1.596z"
          />
        </>
      ) : (
        <>
          <path
            fill="#2E4B9F"
            d="m8.572 5.572-.858 3.857h8.572l-.857-3.857zM9.429 12 7.54 10.718l-2.611 1.71 3.49 6h1.322l1.402-1.607v-.73l-1.714-1.558zm5.038-1.714h-4.77L10.714 12l-.468 2.143h3.678L13.286 12zM14.572 12l1.888-1.463 2.612 1.892-3.441 6h-1.272l-1.515-1.62v-.749l1.728-1.596z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCRO.displayName = 'CRO'
