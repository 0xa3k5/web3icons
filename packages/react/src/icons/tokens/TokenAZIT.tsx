import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenAZIT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.259 6.201 11.147 6 4.286 17.143H6.29L11.156 9.3l5.288 7.843h1.985z"
          />
          <path
            fill="currentColor"
            d="M12.484 15.429 18.43 6h-5.555l.977 1.714h1.543l-5.966 9.429h8.705l-.977-1.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AZIT__a)"
            d="M11.259 6.201 11.148 6 4.286 17.143h2.006L11.156 9.3l5.289 7.843h1.984z"
          />
          <path
            fill="#5550D2"
            d="M12.485 15.429 18.429 6h-5.554l.977 1.714h1.543l-5.966 9.429h8.704l-.977-1.714z"
          />
          <defs>
            <linearGradient
              id="AZIT__a"
              x1="10.509"
              x2="16.012"
              y1="8.169"
              y2="17.366"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3938B8" />
              <stop offset=".52" stopColor="#3937BD" />
              <stop offset="1" stopColor="#5955D9" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenAZIT.displayName = 'AZIT'
