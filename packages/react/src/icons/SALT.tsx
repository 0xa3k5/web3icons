import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSALT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12 8.1 3.429 6.9H8.573zm0-3.814L6 16.714h12z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SALT__a)"
            d="m12 8.1 3.429 6.9H8.573zm0-3.814L6 16.714h12z"
          />
          <defs>
            <linearGradient
              id="SALT__a"
              x1="9.529"
              x2="18"
              y1="10.5"
              y2="16.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17BABC" />
              <stop offset="1" stopColor="#687883" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSALT.displayName = 'SALT'
