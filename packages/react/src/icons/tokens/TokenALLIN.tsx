import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenALLIN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M4.286 18h3.39l.497-1.714h4.226L12.896 18h3.39L12.193 6H8.379zm7.285-4.286L10.286 9.39 9 13.714z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M15 6h3v12h-3z" />
        </>
      ) : (
        <>
          <path
            fill="url(#ALLIN__a)"
            d="M4.286 18h3.39l.497-1.714H12.4L12.896 18h3.39L12.193 6H8.38zm7.286-4.286L10.286 9.39 9 13.714z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#77EBEF" d="M15 6h3v12h-3z" />
          <defs>
            <linearGradient
              id="ALLIN__a"
              x1="5.844"
              x2="16.751"
              y1="15"
              y2="15"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FDFEFF" />
              <stop offset=".69" stopColor="#E2FAFC" />
              <stop offset="1" stopColor="#7AEBEF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenALLIN.displayName = 'ALLIN'
