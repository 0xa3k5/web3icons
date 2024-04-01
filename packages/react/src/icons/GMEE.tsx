import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconGMEE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.714 4.286h2.572v.973c2.794.454 4.08 2.24 4.525 4.598h-3.154c-.424-1.046-1.286-1.714-2.871-1.714-2.113 0-3.215 1.671-3.215 3.861 0 2.194 1.175 3.755 3.215 3.849 1.808.085 2.678-.814 3.025-2.139h-2.383v-2.143h5.563l.009.532c0 3.411-1.072 6.244-4.714 6.694v.917h-2.572v-.981c-3.283-.579-5.143-3.15-5.143-6.63 0-3.493 1.757-6.386 5.143-6.883z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GMEE__a)"
            d="M10.714 4.286h2.572v.973c2.794.454 4.08 2.24 4.525 4.598h-3.154c-.424-1.046-1.286-1.714-2.871-1.714-2.113 0-3.215 1.671-3.215 3.861 0 2.194 1.175 3.755 3.215 3.849 1.808.085 2.678-.814 3.025-2.139h-2.383v-2.143h5.563l.009.532c0 3.411-1.072 6.244-4.714 6.694v.917h-2.572v-.981c-3.283-.579-5.143-3.15-5.143-6.63 0-3.493 1.757-6.386 5.143-6.883z"
          />
          <defs>
            <linearGradient
              id="GMEE__a"
              x1="6.81"
              x2="16.917"
              y1="17.207"
              y2="8.388"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5945FC" />
              <stop offset="1" stopColor="#3D9EEF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGMEE.displayName = 'GMEE'
