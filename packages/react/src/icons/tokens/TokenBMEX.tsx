import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenBMEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.143 6.428-3 11.143h2.572l1.714-6.857h2.773l1.084-4.286zm8.002 11.143 2.712-11.143h-2.571l-1.714 6.858H12l-1.286 4.285z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BMEX__a)"
            d="m8.143 6.428-3 11.143h2.571l1.714-6.857h2.773l1.084-4.286z"
          />
          <path
            fill="url(#BMEX__b)"
            d="m16.144 17.571 2.713-11.143h-2.572l-1.714 6.858H12l-1.286 4.285z"
          />
          <defs>
            <linearGradient
              id="BMEX__a"
              x1="14.288"
              x2="14.288"
              y1="6.428"
              y2="17.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FB2F03" />
              <stop offset="1" stopColor="#B42600" />
            </linearGradient>
            <linearGradient
              id="BMEX__b"
              x1="14.785"
              x2="14.785"
              y1="6.428"
              y2="17.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2560E2" />
              <stop offset="1" stopColor="#2253D3" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenBMEX.displayName = 'BMEX'
