import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconXOR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.736 18.03a6.8 6.8 0 0 0 3.264.827c1.18 0 2.292-.297 3.265-.827L12 13.168z"
          />
          <path
            fill="currentColor"
            d="M7.714 12v-1.286h3.858v-.857H7.714V8.572h8.572v1.285h-3.857v.857h3.857V12h-3.72l3.641 5.416A6.85 6.85 0 0 0 18.857 12a6.857 6.857 0 1 0-11.064 5.416L11.435 12z"
          />
        </>
      ) : (
        <>
          <path
            fill="#E3232C"
            d="M8.735 18.03a6.8 6.8 0 0 0 3.265.827c1.18 0 2.291-.297 3.264-.827L12 13.168z"
          />
          <path
            fill="#E3232C"
            d="M7.714 12v-1.286h3.857v-.857H7.714V8.572h8.571v1.285h-3.857v.857h3.857V12h-3.72l3.642 5.416A6.85 6.85 0 0 0 18.857 12a6.857 6.857 0 1 0-11.064 5.416L11.434 12z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXOR.displayName = 'XOR'
