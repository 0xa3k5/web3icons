import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSWISE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.571 16.028 6.433 3.258v-6.39l-6.433 3.128zm6.433 3.258 6.424-3.245-6.424-3.145z"
          />
          <path
            fill="currentColor"
            d="m12.004 12.896 6.424 3.145-2.622-4.988L12 12.9zm-6.433 3.132 6.433-3.132-3.793-1.852z"
          />
          <path
            fill="currentColor"
            d="M8.211 11.044 12 12.895V3.858l-3.793 7.187zm3.793 1.852 3.802-1.843L12 3.857V12.9z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SWISE__a)"
            d="m5.571 16.028 6.433 3.258v-6.39l-6.433 3.128z"
          />
          <path
            fill="url(#SWISE__b)"
            d="m12.004 19.286 6.424-3.245-6.424-3.145z"
          />
          <path
            fill="url(#SWISE__c)"
            d="m12.004 12.896 6.424 3.145-2.622-4.988L12 12.9z"
          />
          <path
            fill="url(#SWISE__d)"
            d="m5.571 16.028 6.433-3.132-3.793-1.852z"
          />
          <path
            fill="url(#SWISE__e)"
            d="M8.211 11.044 12 12.895V3.858l-3.793 7.187z"
          />
          <path
            fill="url(#SWISE__f)"
            d="m12.004 12.896 3.802-1.843L12 3.857V12.9z"
          />
          <defs>
            <linearGradient
              id="SWISE__a"
              x1="8.287"
              x2="22.286"
              y1="5.44"
              y2="11.322"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8277A6" />
              <stop offset="1" stopColor="#655880" />
            </linearGradient>
            <linearGradient
              id="SWISE__b"
              x1="4.568"
              x2="16.623"
              y1="20.713"
              y2="5.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#665A82" />
              <stop offset=".24" stopColor="#73638D" />
              <stop offset="1" stopColor="#B4A6D1" />
            </linearGradient>
            <linearGradient
              id="SWISE__c"
              x1="11.7"
              x2="26.378"
              y1="14.938"
              y2="4.393"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B0A0CE" />
              <stop offset="1" stopColor="#CEC6E2" />
            </linearGradient>
            <linearGradient
              id="SWISE__d"
              x1="12.193"
              x2="15.136"
              y1="13.541"
              y2="7.793"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#887CAE" />
              <stop offset="1" stopColor="#7A6E9B" />
            </linearGradient>
            <linearGradient
              id="SWISE__e"
              x1="21.392"
              x2="10.089"
              y1="11.575"
              y2="11.575"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B0A0CE" />
              <stop offset="1" stopColor="#887CAE" />
            </linearGradient>
            <linearGradient
              id="SWISE__f"
              x1="13.14"
              x2="15.48"
              y1="9.445"
              y2="11.678"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B0A0CE" />
              <stop offset="1" stopColor="#CEC6E2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSWISE.displayName = 'SWISE'
