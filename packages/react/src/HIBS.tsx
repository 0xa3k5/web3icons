import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconHIBS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.5 6A1.5 1.5 0 0 0 6 7.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 7.5 6M12 7.723a1.5 1.5 0 0 0-1.5 1.504v5.559a1.5 1.5 0 1 0 3 0V9.227A1.5 1.5 0 0 0 12 7.723m3 4.037c0-.814.673-1.474 1.5-1.474s1.5.66 1.5 1.474v4.766C18 17.34 17.327 18 16.5 18a1.487 1.487 0 0 1-1.5-1.474zM16.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#HIBS__a)"
            d="M7.5 6A1.5 1.5 0 0 0 6 7.5v9a1.5 1.5 0 0 0 3 0v-9A1.5 1.5 0 0 0 7.5 6M12 7.723a1.5 1.5 0 0 0-1.5 1.504v5.559a1.5 1.5 0 1 0 3 0V9.227A1.5 1.5 0 0 0 12 7.723m3 4.037c0-.814.673-1.474 1.5-1.474s1.5.66 1.5 1.474v4.766C18 17.34 17.327 18 16.5 18a1.487 1.487 0 0 1-1.5-1.474zM16.5 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
          />
          <defs>
            <linearGradient
              id="HIBS__a"
              x1="11.786"
              x2="11.786"
              y1="6"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#25A9E0" />
              <stop offset="1" stopColor="#1A75BB" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconHIBS.displayName = 'HIBS'
