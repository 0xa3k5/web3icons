import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRUNE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6 18.857 9.61-4.032-3.04-3.072zM9.53 8.684l3.04 3.069L18 5.142z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RUNE__a)"
            d="m6 18.857 9.61-4.032-3.04-3.072zM9.53 8.684l3.04 3.069L18 5.142z"
          />
          <defs>
            <linearGradient
              id="RUNE__a"
              x1="18"
              x2="6"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F9" />
              <stop offset="1" stopColor="#0CF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRUNE.displayName = 'RUNE'
