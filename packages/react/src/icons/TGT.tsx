import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTGT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.416 11.752 9.052 8.683l9.377-3.54zm3.368 3.073-10.64 4.032 7.272-7.105z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TGT__a)"
            d="M12.415 11.752 9.051 8.683l9.377-3.54zm3.369 3.073L5.143 18.857l7.272-7.105z"
          />
          <defs>
            <linearGradient
              id="TGT__a"
              x1="5.143"
              x2="18.428"
              y1="18.857"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0CF" />
              <stop offset="1" stopColor="#3F9" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTGT.displayName = 'TGT'
