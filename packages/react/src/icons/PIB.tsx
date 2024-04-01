import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPIB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.429 10.913V8.18l3.063-1.74 2.362 1.356zm5.785-6.199L9.857 6.155l5.572 3.163V6.542zm3.643 8.418V6.77l2.572 1.406v3.567zm2.57 1.771v-2.738l-5.4 3.12 2.344 1.42zm-8.998 1.62v-2.759l5.572 3.18-2.358 1.485zm-3 2.218v-5.75L9 11.571v8.572zm4.285-8.303 1.715-1.01 1.714 1.01v2.19l-1.714 1.086-1.715-1.085z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PIB__a)"
            d="M6.429 10.913V8.18l3.063-1.74 2.362 1.356zm5.785-6.199L9.857 6.155l5.572 3.163V6.542zm3.643 8.418V6.77l2.572 1.406v3.567zm2.57 1.771v-2.738l-5.4 3.12 2.344 1.42zm-8.998 1.62v-2.759l5.572 3.18-2.358 1.485zm-3 2.218v-5.75L9 11.571v8.572zm4.285-8.303 1.715-1.01 1.714 1.01v2.19l-1.714 1.086-1.715-1.085z"
          />
          <defs>
            <linearGradient
              id="PIB__a"
              x1="12.429"
              x2="12.429"
              y1="4.714"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8CB69D" />
              <stop offset=".191" stopColor="#A2C98A" />
              <stop offset=".386" stopColor="#C1A879" />
              <stop offset=".579" stopColor="#DF6B83" />
              <stop offset=".8" stopColor="#6E7CB4" />
              <stop offset="1" stopColor="#7270AF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPIB.displayName = 'PIB'
