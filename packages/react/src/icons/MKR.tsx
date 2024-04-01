import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconMKR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M3.642 6.916a.43.43 0 0 1 .427-.002l6.856 3.9a.43.43 0 0 1 .217.372v5.529a.429.429 0 1 1-.857 0v-5.28l-6-3.412v8.692a.429.429 0 1 1-.856 0V7.286a.43.43 0 0 1 .213-.37m16.717 0a.43.43 0 0 0-.428-.002l-6.856 3.9a.43.43 0 0 0-.216.372v5.529a.429.429 0 1 0 .857 0v-5.28l5.998-3.412v8.692a.429.429 0 0 0 .858 0V7.286a.43.43 0 0 0-.213-.37"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MKR__a)"
            d="M3.642 6.916a.43.43 0 0 1 .427-.002l6.856 3.9a.43.43 0 0 1 .217.372v5.529a.429.429 0 1 1-.857 0v-5.28l-6-3.412v8.692a.429.429 0 1 1-.856 0V7.286a.43.43 0 0 1 .213-.37m16.717 0a.43.43 0 0 0-.428-.002l-6.856 3.9a.43.43 0 0 0-.216.372v5.529a.429.429 0 1 0 .857 0v-5.28l5.998-3.412v8.692a.429.429 0 0 0 .858 0V7.286a.43.43 0 0 0-.213-.37"
          />
          <defs>
            <linearGradient
              id="MKR__a"
              x1="3.429"
              x2="20.572"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1BC4A3" />
              <stop offset="1" stopColor="#586979" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMKR.displayName = 'MKR'
