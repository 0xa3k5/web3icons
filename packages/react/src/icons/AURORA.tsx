import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAURORA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.346 6.84a1.5 1.5 0 0 0-2.692 0l-4.063 7.701a1.5 1.5 0 0 0 1.346 2.173h8.126a1.5 1.5 0 0 0 1.346-2.173zm-3.459-.386a2.357 2.357 0 0 1 4.226 0l4.067 7.702a2.356 2.356 0 0 1-2.117 3.415H7.937a2.366 2.366 0 0 1-2.117-3.415l4.067-7.697z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AURORA__a)"
            d="M13.346 6.84a1.5 1.5 0 0 0-2.692 0l-4.063 7.701a1.5 1.5 0 0 0 1.346 2.173h8.126a1.5 1.5 0 0 0 1.346-2.173zm-3.459-.386a2.357 2.357 0 0 1 4.226 0l4.067 7.702a2.356 2.356 0 0 1-2.117 3.415H7.937a2.366 2.366 0 0 1-2.117-3.415l4.067-7.697z"
          />
          <defs>
            <linearGradient
              id="AURORA__a"
              x1="15.995"
              x2="8.381"
              y1="6.496"
              y2="16.609"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#95E141" />
              <stop offset=".59" stopColor="#63B836" />
              <stop offset="1" stopColor="#409C2D" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAURORA.displayName = 'AURORA'
