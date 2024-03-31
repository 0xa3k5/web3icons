import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.143 16.714 4.714-5.143L6.43 7.714h4.714L12.43 9l3-3h3.428L7.286 18.429zm7.5-2.571 1.071 1.286h4.93l-3.43-3.858z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#XY__a)"
            d="m5.143 16.714 4.714-5.143-3.429-3.857h4.715L12.428 9l3-3h3.429L7.285 18.429zm7.5-2.571 1.071 1.286h4.929l-3.429-3.858z"
          />
          <defs>
            <linearGradient
              id="XY__a"
              x1="15.551"
              x2="8.265"
              y1="6.888"
              y2="18.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#13C0E4" />
              <stop offset="1" stopColor="#1033B3" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconXY.displayName = 'XY'
