import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDEL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.143 5.572H6.857v2.571h7.286v7.714H6.857v2.572h10.286zm-5.572 5.142H6.857v2.572h4.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DEL__a)"
            d="M17.143 5.572H6.857v2.571h7.286v7.714H6.857v2.572h10.286zm-5.571 5.142H6.857v2.572h4.715z"
          />
          <defs>
            <linearGradient
              id="DEL__a"
              x1="8.97"
              x2="17.578"
              y1="7.408"
              y2="14.658"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02FDAD" />
              <stop offset=".45" stopColor="#457DF4" />
              <stop offset="1" stopColor="#9845F5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDEL.displayName = 'DEL'
