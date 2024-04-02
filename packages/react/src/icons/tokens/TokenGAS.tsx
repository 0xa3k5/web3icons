import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenGAS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.429 16.794-5.143-2.375v-5.26l5.143-1.807zm-7.286 2.492L6 16.969v-9.37l5.143 2.317zm0-9.734-4.946-2.28 7.231-2.558 4.92 2.288z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GAS__a)"
            d="m18.429 16.794-5.143-2.375v-5.26l5.143-1.807zm-7.286 2.492L6 16.969v-9.37l5.143 2.317zm0-9.734-4.946-2.28 7.231-2.558 4.92 2.288z"
          />
          <defs>
            <linearGradient
              id="GAS__a"
              x1="6.276"
              x2="15.232"
              y1="17.189"
              y2="9.468"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BEEA2E" />
              <stop offset="1" stopColor="#52BA00" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenGAS.displayName = 'GAS'
