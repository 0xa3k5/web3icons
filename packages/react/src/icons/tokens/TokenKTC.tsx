import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenKTC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.429 6v1.714h1.714V6zm0 12V8.571h1.714v4.92L15.6 6H18zm5.357-3.814A515 515 0 0 1 15.6 18H18l-4.954-5.143z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KTC__a)"
            d="M6.429 6v1.714h1.714V6zm0 12V8.571h1.714v4.92L15.6 6H18zm5.357-3.814A515 515 0 0 1 15.6 18H18l-4.954-5.143z"
          />
          <defs>
            <linearGradient
              id="KTC__a"
              x1="12.214"
              x2="12.214"
              y1="6"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#53F3FF" />
              <stop offset="1" stopColor="#38CDEE" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenKTC.displayName = 'KTC'
