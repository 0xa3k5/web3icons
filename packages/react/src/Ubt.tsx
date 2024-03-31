import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconUBT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.857 6.857-1.714-1.714h-6.857v11.143H7.715V6.857H5.143v10.286l1.714 1.714h4.286l1.714-1.714h4.286l1.714-1.714V12L18 11.143l.857-.857zm-6 .857h3.429v2.572h-3.429zm3.429 6.858h-3.429V12h3.429z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#UBT__a)"
            d="m18.857 6.857-1.714-1.714h-6.858v11.143H7.714V6.857H5.143v10.286l1.714 1.714h4.286l1.714-1.714h4.286l1.714-1.714V12L18 11.143l.857-.857zm-6 .857h3.428v2.572h-3.428zm3.428 6.858h-3.428V12h3.428z"
          />
          <defs>
            <linearGradient
              id="UBT__a"
              x1="16.944"
              x2="7.254"
              y1="7.075"
              y2="16.827"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F5E710" />
              <stop offset=".22" stopColor="#4DB15A" />
              <stop offset=".45" stopColor="#00A09A" />
              <stop offset=".71" stopColor="#1E548A" />
              <stop offset="1" stopColor="#DA1E74" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconUBT.displayName = 'UBT'
