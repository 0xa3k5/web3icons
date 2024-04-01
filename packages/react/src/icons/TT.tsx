import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.13 18.172 3.746-5.936c.056-.09-.009-.236-.116-.236H8.482c-.266 0-.429-.261-.288-.489l4.033-6.792L12 4.714a7.286 7.286 0 0 0-3.87 13.458m3.656 1.114H12a7.286 7.286 0 0 0 3.88-13.457l-3.596 5.961a.137.137 0 0 0 .116.21h3.523c.265 0 .462.326.321.553l-4.461 6.729z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TT__a)"
            d="m8.13 18.172 3.746-5.936c.056-.09-.009-.236-.116-.236H8.482c-.266 0-.429-.261-.288-.489l4.033-6.792L12 4.714a7.286 7.286 0 0 0-3.87 13.458m3.656 1.114H12a7.286 7.286 0 0 0 3.88-13.457l-3.596 5.961a.137.137 0 0 0 .116.21h3.523c.265 0 .462.326.321.553l-4.461 6.729z"
          />
          <defs>
            <linearGradient
              id="TT__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06FCD7" />
              <stop offset="1" stopColor="#0502DA" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTT.displayName = 'TT'
