import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconEVER = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.446 6.857-4.732 4.715h7.715v7.714l4.714-4.715V6.858z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#EVER__a)"
            d="m9.445 6.857-4.731 4.715h7.714v7.714l4.714-4.715V6.858z"
          />
          <defs>
            <linearGradient
              id="EVER__a"
              x1="15.367"
              x2="4.714"
              y1="7.967"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F96829" />
              <stop offset=".93" stopColor="#6347F4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconEVER.displayName = 'EVER'
