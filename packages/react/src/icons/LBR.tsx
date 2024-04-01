import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconLBR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 15.429h4.573l-3.06-3.45L12 6.42l4.556 5.559-3.163 3.45H18v-1.286h-1.839L18 11.979l-6-7.265-6 7.265 1.903 2.164H6zm12 .857H6v1.285h12z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LBR__a)"
            d="M6 15.429h4.573l-3.06-3.45L12 6.42l4.556 5.559-3.163 3.45H18v-1.286h-1.839L18 11.979l-6-7.265-6 7.265 1.903 2.164H6zm12 .857H6v1.285h12z"
          />
          <defs>
            <linearGradient
              id="LBR__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="17.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FB9C96" />
              <stop offset="1" stopColor="#5C9DED" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLBR.displayName = 'LBR'
