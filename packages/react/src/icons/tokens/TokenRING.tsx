import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRING = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M4.714 9.836a1.071 1.071 0 1 0-.428 0V15h.428zm8.018 1.106c.424-.679.923-1.162 1.411-1.476v3.841a1.071 1.071 0 1 0 .429 0V9.23a2.3 2.3 0 0 1 .94-.23h1.202v5.164a1.072 1.072 0 1 0 .429 0V9h2.143v5.164a1.071 1.071 0 1 0 .428 0V9h.858v-.43h-5.06c-.958 0-2.25.69-3.17 2.189a1.286 1.286 0 0 0-1.12 2.264 4.7 4.7 0 0 1-1.365 1.37v-3.701a1.072 1.072 0 1 0-.428 0v3.946c-.5.248-.983.36-1.366.36H3.43v.43h4.634c1.023 0 2.543-.662 3.54-2.206a1.286 1.286 0 0 0 1.129-2.28M6.857 9.836a1.071 1.071 0 1 1 .429 0V15h-.429z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RING__a)"
            d="M4.714 9.836a1.071 1.071 0 1 0-.428 0V15h.428zm8.018 1.106c.424-.679.923-1.162 1.411-1.476v3.841a1.071 1.071 0 1 0 .429 0V9.23a2.3 2.3 0 0 1 .94-.23h1.202v5.164a1.072 1.072 0 1 0 .429 0V9h2.143v5.164a1.071 1.071 0 1 0 .428 0V9h.858v-.43h-5.06c-.958 0-2.25.69-3.17 2.189a1.286 1.286 0 0 0-1.12 2.264 4.7 4.7 0 0 1-1.365 1.37v-3.701a1.072 1.072 0 1 0-.428 0v3.946c-.5.248-.983.36-1.366.36H3.43v.43h4.634c1.023 0 2.543-.662 3.54-2.206a1.286 1.286 0 0 0 1.129-2.28M6.857 9.836a1.071 1.071 0 1 1 .429 0V15h-.429z"
          />
          <defs>
            <linearGradient
              id="RING__a"
              x1="6.059"
              x2="10.052"
              y1="9.037"
              y2="18.409"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4530DD" />
              <stop offset="1" stopColor="#FB3777" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenRING.displayName = 'RING'
