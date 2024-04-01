import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconWLITI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 12.664v4.372L6 14.914zm2.473-1.457-1.187.707v2.829l3.647-2.121z"
          />
          <path
            fill="currentColor"
            d="m14.79 12.622-3.647 2.121v-2.829l-1.286.772v4.346l2.473-1.582 3.69-2.121z"
          />
          <path
            fill="currentColor"
            d="M9.857 8.55v4.153L6 14.914V6.43zm1.286.536v2.828l1.187-.707 2.456 1.415V6.964zm4.877 4.243-3.69 2.121 3.69 2.122 3.694-2.122z"
          />
          <path
            fill="currentColor"
            d="m11.1 9.086 4.924 2.828 3.69-2.121-4.924-2.829z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#WLITI__a)"
            d="M9.857 12.664v4.372L6 14.914zm2.473-1.457-1.187.707v2.829l3.647-2.121z"
          />
          <path
            fill="url(#WLITI__b)"
            d="m14.79 12.622-3.647 2.121v-2.829l-1.286.772v4.346l2.473-1.582 3.69-2.121z"
          />
          <path
            fill="url(#WLITI__c)"
            d="M9.857 8.55v4.153L6 14.914V6.43zm1.286.536v2.828l1.187-.707 2.456 1.415V6.964zm4.877 4.243-3.69 2.121 3.69 2.122 3.694-2.122z"
          />
          <path
            fill="url(#WLITI__d)"
            d="m11.1 9.086 4.924 2.828 3.69-2.121-4.924-2.829z"
          />
          <defs>
            <linearGradient
              id="WLITI__a"
              x1="7.558"
              x2="20.193"
              y1="16.547"
              y2="10.069"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#08A5B1" />
              <stop offset=".67" stopColor="#6FC6A6" />
              <stop offset="1" stopColor="#CAE5C2" />
            </linearGradient>
            <linearGradient
              id="WLITI__b"
              x1="3.616"
              x2="17.254"
              y1="14.436"
              y2="5.677"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#222C5F" />
              <stop offset=".45" stopColor="#50489D" />
              <stop offset="1" stopColor="#2D7DC1" />
            </linearGradient>
            <linearGradient
              id="WLITI__c"
              x1="5.644"
              x2="17.567"
              y1="13.942"
              y2="9.583"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4BA5DC" />
              <stop offset=".7" stopColor="#79CFE3" />
              <stop offset="1" stopColor="#90D7EE" />
            </linearGradient>
            <linearGradient
              id="WLITI__d"
              x1="12.15"
              x2="18.647"
              y1="7.414"
              y2="11.494"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#50489D" />
              <stop offset=".7" stopColor="#2D7DC1" />
              <stop offset="1" stopColor="#44BAEB" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconWLITI.displayName = 'WLITI'
