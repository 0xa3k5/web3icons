import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconQSR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15.412 18.857-3.84-7.071-6.429-3.112v-.53a3 3 0 0 1 3-3h.446l3.84 7.07 6.428 3.013v.63a3 3 0 0 1-3 3z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#QSR__a)"
            d="m15.411 18.857-3.84-7.071-6.428-3.112v-.53a3 3 0 0 1 3-3h.445l3.84 7.07 6.429 3.013v.63a3 3 0 0 1-3 3z"
          />
          <defs>
            <linearGradient
              id="QSR__a"
              x1="6.428"
              x2="17.571"
              y1="6.857"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A745F5" />
              <stop offset=".18" stopColor="#54BCF0" />
              <stop offset=".38" stopColor="#99E5C5" />
              <stop offset=".5" stopColor="#FFFCD8" />
              <stop offset=".65" stopColor="#91E1C8" />
              <stop offset=".82" stopColor="#51BCF4" />
              <stop offset="1" stopColor="#A745F4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconQSR.displayName = 'QSR'
