import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGMX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m19.714 16.714-7.701-12-7.727 12H15.05l-3.043-4.581-1.5 2.439H8.902l3.112-4.843 4.496 6.985z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GMX__a)"
            d="m19.715 16.714-7.702-12-7.727 12h10.766l-3.043-4.581-1.5 2.439H8.902l3.111-4.843 4.496 6.985z"
          />
          <defs>
            <linearGradient
              id="GMX__a"
              x1="12.558"
              x2="7.179"
              y1="5.027"
              y2="17.854"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#03D1CF" stopOpacity=".99" />
              <stop offset="1" stopColor="#4E09F8" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenGMX.displayName = 'GMX'
