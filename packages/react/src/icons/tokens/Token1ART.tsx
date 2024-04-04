import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const Token1ART = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.27 5.769c.785-.497 1.852.004 1.873.865V17.34c0 .6-.626 1.089-1.286 1.089-.651 0-1.272-.476-1.285-1.072V9.112s-1.745 1.084-2.585 1.517a.8.8 0 0 1-.33.09 1.3 1.3 0 0 1-.45-.082c-.493-.188-.943-.664-.921-1.208.013-.317.154-.617.467-.823l.017-.013 4.5-2.829z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#1ART__a)"
            d="M12.27 5.769c.785-.497 1.852.004 1.873.865V17.34c0 .6-.626 1.089-1.286 1.089-.651 0-1.272-.476-1.285-1.072V9.112s-1.745 1.084-2.585 1.517a.8.8 0 0 1-.33.09 1.3 1.3 0 0 1-.45-.082c-.493-.188-.943-.664-.921-1.208.013-.317.154-.617.467-.823l.017-.013 4.5-2.829z"
          />
          <defs>
            <linearGradient
              id="1ART__a"
              x1="13.347"
              x2="6.372"
              y1="8.442"
              y2="10.839"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#836DF7" />
              <stop offset=".28" stopColor="#2E8ACA" />
              <stop offset=".5" stopColor="#4978D6" />
              <stop offset="1" stopColor="#A672DC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

Token1ART.displayName = '1ART'
