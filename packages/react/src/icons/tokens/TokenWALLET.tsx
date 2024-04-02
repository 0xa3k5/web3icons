import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenWALLET = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.572 14.572 15 11.786 11.143 15v5.572zm-7.286-3.858L9 8.786l-2.357 2.143.857 1.5 2.357-.857zm1.286-2.571V3.429l2.571 6z"
          />
          <path
            fill="currentColor"
            d="m14.143 9.429-2.571-1.286-5.143 7.071 3.428 3.643zM15 11.786V9.857l2.572 4.715zm-6-3 .857-3.214-3.214 5.357z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#WALLET__a)"
            d="M17.572 14.572 15 11.786 11.143 15v5.572z"
          />
          <path
            fill="url(#WALLET__b)"
            d="M10.286 10.714 9 8.786l-2.357 2.143.857 1.5 2.357-.857z"
          />
          <path fill="url(#WALLET__c)" d="M11.572 8.143V3.429l2.571 6z" />
          <path
            fill="url(#WALLET__d)"
            d="m14.143 9.429-2.571-1.286-5.143 7.071 3.428 3.643z"
          />
          <path fill="url(#WALLET__e)" d="M15 11.786V9.857l2.572 4.715z" />
          <path fill="url(#WALLET__f)" d="m9 8.786.857-3.214-3.214 5.357z" />
          <defs>
            <linearGradient
              id="WALLET__a"
              x1="18.092"
              x2="7.082"
              y1="9.224"
              y2="10.595"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5C02FF" />
              <stop offset=".79" stopColor="#5402DB" />
              <stop offset="1" stopColor="#35077D" />
            </linearGradient>
            <linearGradient
              id="WALLET__b"
              x1="15.907"
              x2="6.489"
              y1="11.355"
              y2="12.556"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#35028B" />
              <stop offset=".31" stopColor="#5704E7" />
              <stop offset="1" stopColor="#4101BA" />
            </linearGradient>
            <linearGradient
              id="WALLET__c"
              x1="6.67"
              x2="10.741"
              y1="3.429"
              y2="22.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7412FD" />
              <stop offset="1" stopColor="#9A39FC" />
            </linearGradient>
            <linearGradient
              id="WALLET__d"
              x1="15.126"
              x2="9.211"
              y1="3.724"
              y2="19.965"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6001FF" />
              <stop offset="1" stopColor="#7E1FFF" />
            </linearGradient>
            <linearGradient
              id="WALLET__e"
              x1="7.134"
              x2="14.207"
              y1="5.657"
              y2="21.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7D2BD8" />
              <stop offset="1" stopColor="#A35CEA" />
            </linearGradient>
            <linearGradient
              id="WALLET__f"
              x1="10.041"
              x2="6.655"
              y1="5.876"
              y2="10.723"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7416F0" />
              <stop offset="1" stopColor="#9A43FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenWALLET.displayName = 'WALLET'
