import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDYDX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.764 6 6.43 18h2.558l8.379-12zM9.257 6l2.452 3.536-1.282 1.928L6.643 6zm5.756 12-2.721-3.913 1.281-1.873L17.572 18z"
          />
        </>
      ) : (
        <>
          <path fill="#fff" d="M14.764 6 6.43 18h2.558l8.379-12z" />
          <path
            fill="url(#DYDX__a)"
            d="m9.257 6 2.452 3.536-1.282 1.928L6.643 6z"
          />
          <path
            fill="url(#DYDX__b)"
            d="m15.013 18-2.721-3.913 1.281-1.873L17.572 18z"
          />
          <defs>
            <linearGradient
              id="DYDX__a"
              x1="10.878"
              x2="18.631"
              y1="7.647"
              y2="16.977"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity=".55" />
            </linearGradient>
            <linearGradient
              id="DYDX__b"
              x1="15.6"
              x2="11.259"
              y1="17.091"
              y2="11.267"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6966FF" />
              <stop offset="1" stopColor="#6966FF" stopOpacity=".36" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDYDX.displayName = 'DYDX'
