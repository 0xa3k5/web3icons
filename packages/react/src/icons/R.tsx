import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.286 17.143V8.035l3.804 2.12-2.947 1.551v2.865l6 4.286v-3.106l-3.493-2.496 3.064-1.61V8.774l-6.428-3.63L7.714 6.43v12.428z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#R__a)"
            d="M10.285 17.143V8.035l3.805 2.12-2.948 1.551v2.865l6 4.286v-3.106l-3.492-2.496 3.064-1.61V8.774l-6.429-3.63L7.714 6.43v12.428z"
          />
          <defs>
            <linearGradient
              id="R__a"
              x1="9.138"
              x2="17.936"
              y1="7.58"
              y2="14.434"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#771A4E" />
              <stop offset="1" stopColor="#3A0C4C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconR.displayName = 'R'
