import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenKYVE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 18 9.394 6h2.297l-1.054 4.967h.416L14.876 6h2.695v.231l-4.594 5.658v.265l2.944 5.675V18h-2.563l-2.507-4.967h-.656L9.138 18z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KYVE__a)"
            d="M6.857 18 9.395 6h2.297l-1.055 4.967h.416L14.876 6h2.696v.231l-4.595 5.658v.265l2.945 5.675V18h-2.563l-2.507-4.967h-.656L9.137 18z"
          />
          <defs>
            <linearGradient
              id="KYVE__a"
              x1="12.215"
              x2="12.215"
              y1="6"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#151E1D" />
              <stop offset="1" stopColor="#23584E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenKYVE.displayName = 'KYVE'
