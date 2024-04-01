import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRISE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.877 18.857a6.97 6.97 0 0 0 4.98-6.724c0-3.857-3.068-6.99-6.857-6.99-3.788 0-6.857 3.129-6.857 6.99 0 3.197 2.104 5.893 4.98 6.729l1.449-8.576-3.643 2.721-.215-.218L12 6.857l4.286 5.932-.214.214-3.643-2.717z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RISE__a)"
            d="M13.877 18.857a6.97 6.97 0 0 0 4.98-6.724c0-3.857-3.069-6.99-6.857-6.99s-6.857 3.129-6.857 6.99c0 3.197 2.104 5.893 4.98 6.729l1.448-8.576-3.643 2.721-.214-.218L12 6.857l4.285 5.932-.214.214-3.643-2.717z"
          />
          <defs>
            <linearGradient
              id="RISE__a"
              x1="5.143"
              x2="18.861"
              y1="10.822"
              y2="12.086"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CC1A3C" />
              <stop offset="1" stopColor="#FF9A2E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRISE.displayName = 'RISE'
