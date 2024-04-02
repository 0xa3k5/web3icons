import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRDNT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.036 9.591 6.214 6.214l3.377 4.822L4.286 12l5.305.964-3.377 4.342 4.822-2.898.964 5.306.964-5.305 5.062 2.897-4.097-4.342L19.714 12l-5.785-.964 3.857-4.822-4.822 3.377L12 4.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RDNT__a)"
            d="M11.036 9.591 6.215 6.214l3.377 4.822L4.286 12l5.306.964-3.377 4.342 4.821-2.898.964 5.306.965-5.305 5.061 2.897-4.097-4.342L19.715 12l-5.786-.964 3.857-4.822-4.821 3.377L12 4.286z"
          />
          <defs>
            <linearGradient
              id="RDNT__a"
              x1="12"
              x2="12"
              y1="4.286"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0FA" />
              <stop offset="1" stopColor="#5A10F5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenRDNT.displayName = 'RDNT'
