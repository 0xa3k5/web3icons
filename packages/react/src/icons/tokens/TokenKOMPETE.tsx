import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenKOMPETE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 18V6h2.571v4.967L14.194 6H18l-5.13 5.207L18 18h-3.43l-3.574-4.89-1.569 1.59V18z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KOMPETE__a)"
            d="M6.857 18V6H9.43v4.967L14.195 6H18l-5.13 5.207L18 18h-3.428l-3.575-4.89L9.43 14.7V18z"
          />
          <defs>
            <linearGradient
              id="KOMPETE__a"
              x1="7.984"
              x2="16.956"
              y1="16.378"
              y2="9.28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#090909" />
              <stop offset="1" stopColor="#6C0C0D" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenKOMPETE.displayName = 'KOMPETE'
