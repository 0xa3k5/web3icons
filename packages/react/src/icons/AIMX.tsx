import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconAIMX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.092 5.97-.056.043c-.814.848-.304 2.747-.75 4.243-.42 1.414-2.576 2.22-3.489 3.085a2.139 2.139 0 1 0 2.936 3.095h.008c.163-.159.288-.356.369-.57l.022-.06v-.022q.052-.13.085-.266c.412-1.508.154-4.071.506-4.988.441-1.153 1.238-1.736 1.903-2.374.458-.438.75-.9.681-1.406v-.03a1.287 1.287 0 0 0-2.216-.75m4.337 9.887a1.286 1.286 0 1 0 2.571 0 1.286 1.286 0 0 0-2.571 0"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AIMX__a)"
            d="m11.091 5.97-.056.043c-.814.848-.304 2.747-.75 4.243-.42 1.414-2.575 2.22-3.488 3.085a2.139 2.139 0 1 0 2.935 3.095h.009c.163-.159.287-.356.369-.57l.021-.06v-.022q.052-.13.086-.266c.411-1.508.154-4.071.505-4.988.442-1.153 1.239-1.736 1.903-2.374.459-.438.75-.9.682-1.406v-.03a1.285 1.285 0 0 0-1.59-1.114c-.24.06-.459.188-.626.364m4.337 9.887a1.286 1.286 0 1 0 2.572 0 1.286 1.286 0 0 0-2.572 0"
          />
          <defs>
            <linearGradient
              id="AIMX__a"
              x1="7.771"
              x2="16.049"
              y1="7.457"
              y2="15.881"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#135554" />
              <stop offset="1" stopColor="#00A790" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAIMX.displayName = 'AIMX'
