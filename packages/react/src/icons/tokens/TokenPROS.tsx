import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPROS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <g clipPath="url(#PROS__a)">
        <path fill="#333" d="M0 0h24v24H0z" />
        <path fill="#5901F6" d="M24 0 0 24V0z" />
        <path
          fill="url(#PROS__b)"
          d="m8.412 15.618-.047-.046c-3.2-3.202-4.183-7.41-2.193-9.4s6.197-1.007 9.397 2.194l.029.029-1.157 1.163-.031-.032c-2.547-2.548-5.706-3.519-7.055-2.17s-.378 4.509 2.17 7.056l.044.044z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          fill="url(#PROS__c)"
          d="m15.588 8.382.046.046c3.201 3.202 4.183 7.41 2.194 9.4-1.99 1.99-6.197 1.007-9.398-2.194l-.028-.029 1.156-1.162.032.031c2.547 2.548 5.706 3.52 7.054 2.17 1.35-1.349.378-4.508-2.17-7.056l-.043-.044z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <linearGradient
          id="PROS__b"
          x1="17.566"
          x2="9.867"
          y1="9.479"
          y2="17.135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBFCFA" />
          <stop offset=".817" stopColor="#9359FD" stopOpacity=".07" />
        </linearGradient>
        <linearGradient
          id="PROS__c"
          x1="9.12"
          x2="15.074"
          y1="15.533"
          y2="10.598"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#01FDFE" />
          <stop offset="1" stopColor="#01FDFE" stopOpacity=".06" />
        </linearGradient>
        <clipPath id="PROS__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </BaseIcon>
  ),
)

TokenPROS.displayName = 'PROS'
