import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRARE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.572 3h1.285v2.143H16.3v4.286h-.395c-.321-1.762-2.288-3.892-4.148-3.892-1.393 0-2.932.677-2.932 1.933 0 1.53 1.625 2.344 2.748 2.859v3.235a11 11 0 0 1-.969-.373C8.79 12.334 6.81 11.22 6.857 9 6.904 6.579 9 5.143 11.572 5.143z"
          />
          <path
            fill="currentColor"
            d="M11.572 18.857h.634l-4.564-.008h-.356v-4.706h.356c.454 2.1 2.237 4.286 4.705 4.286 1.787 0 2.572-1.072 2.49-2.623-.051-.943-.985-1.367-1.98-1.787v-3.305q.228.102.446.223c1.671.759 3.411 1.672 3.411 3.862 0 2.772-2.412 4.058-4.285 4.058l.428-.021V21h-1.285z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RARE__a)"
            d="M11.572 3h1.285v2.143H16.3v4.286h-.395c-.321-1.762-2.288-3.892-4.148-3.892-1.393 0-2.932.677-2.932 1.933 0 1.53 1.625 2.344 2.748 2.859v3.235a11 11 0 0 1-.969-.373C8.79 12.334 6.81 11.22 6.857 9 6.904 6.579 9 5.143 11.572 5.143z"
          />
          <path
            fill="url(#RARE__b)"
            d="M11.572 18.857h.634l-4.564-.008h-.356v-4.706h.356c.454 2.1 2.237 4.286 4.705 4.286 1.787 0 2.572-1.072 2.49-2.623-.051-.943-.985-1.367-1.98-1.787v-3.305q.228.102.446.223c1.671.759 3.411 1.672 3.411 3.862 0 2.772-2.412 4.058-4.285 4.058l.428-.021V21h-1.285z"
          />
          <defs>
            <linearGradient
              id="RARE__a"
              x1="8.691"
              x2="19.377"
              y1="6.121"
              y2="13.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E7F88F" />
              <stop offset="1" stopColor="#50F0F8" />
            </linearGradient>
            <linearGradient
              id="RARE__b"
              x1="8.691"
              x2="19.377"
              y1="6.121"
              y2="13.16"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E7F88F" />
              <stop offset="1" stopColor="#50F0F8" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenRARE.displayName = 'RARE'
