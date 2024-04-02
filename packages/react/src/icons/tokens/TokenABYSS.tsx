import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenABYSS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.01 9.429c-1.222 0-2.153.188-2.153.188v1.954h4.286V9.618c.02 0-.911-.19-2.133-.19"
          />
          <path
            fill="currentColor"
            d="M12 4.286c-3.13 0-6.857 1.609-6.857 1.609v9.79L12 20.572l6.857-4.866V5.874c.02 0-3.708-1.588-6.857-1.588m3.857 10.347-1.714 1.251v-2.598H9.857v2.597l-1.714-1.25V8.14s2.263-.517 3.877-.517 3.837.517 3.837.517z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ABYSS__a)"
            d="M12.01 9.429c-1.222 0-2.153.188-2.153.188v1.954h4.286V9.618c.02 0-.912-.19-2.134-.19"
          />
          <path
            fill="url(#ABYSS__b)"
            d="M12 4.286c-3.13 0-6.857 1.609-6.857 1.609v9.79L12 20.572l6.857-4.866V5.874c.02 0-3.709-1.588-6.857-1.588m3.857 10.347-1.714 1.251v-2.598H9.857v2.597l-1.714-1.25V8.14s2.262-.517 3.876-.517 3.838.517 3.838.517z"
          />
          <defs>
            <linearGradient
              id="ABYSS__a"
              x1="7.02"
              x2="18.09"
              y1="7.095"
              y2="16.485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A025F3" />
              <stop offset="1" stopColor="#4212A0" />
            </linearGradient>
            <linearGradient
              id="ABYSS__b"
              x1="7.02"
              x2="18.09"
              y1="7.095"
              y2="16.485"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A025F3" />
              <stop offset="1" stopColor="#4212A0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenABYSS.displayName = 'ABYSS'
