import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSTRX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.017 10.971-6.39-5.4 10.779 2.057zm-1.277 9.172L5.143 6.128l6.6 5.443zM17.923 7.8 12.815 12h4.007l-5.357 7.933 7.392-8.79H15.3z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#STRX__a)"
            d="m12.017 10.971-6.39-5.4 10.778 2.057zm-1.277 9.172L5.143 6.128l6.6 5.443zM17.923 7.8 12.814 12h4.007l-5.357 7.933 7.393-8.79H15.3z"
          />
          <defs>
            <linearGradient
              id="STRX__a"
              x1="6.815"
              x2="17.153"
              y1="7.367"
              y2="17.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#73D8E2" />
              <stop offset=".69" stopColor="#4950D4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSTRX.displayName = 'STRX'
