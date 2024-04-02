import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenORN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#ORN__a)"
        d="M11.724 6C9.97 6 7.884 7.189 7.111 8.253c1.464-.939 3.8-1.33 4.52-1.23 2.914.467 3.89 3.08 4.036 4.42 1.113.438 3.313.57 2.134-1.758C16.33 6.782 13.876 6 11.724 6"
      />
      <path
        fill="url(#ORN__b)"
        d="M10.642 16.845c2.8 0 5.07-2.238 5.07-4.998s-2.27-5-5.07-5-5.07 2.239-5.07 5c0 2.76 2.27 4.998 5.07 4.998"
      />
      <path
        fill="#25253B"
        d="M11.786 16.286a3.643 3.643 0 1 0 0-7.286 3.643 3.643 0 0 0 0 7.286"
      />
      <path
        fill="url(#ORN__c)"
        d="M20.038 11.485c.688-.483.45-1.457.204-1.787-.38-.51-.91-.572-1.123-.548-1.697.192-3.084 2.075-3.625 3l2.127 1.473c.1-.139.361-.557.785-1.043.513-.589 1.201-.793 1.632-1.095"
      />
      <path
        fill="url(#ORN__d)"
        d="M18.376 11.816c.365-.757-.277-1.43-.652-1.597-.58-.26-1.02-.075-1.152 0-1.387.996-1.774 3.386-1.795 4.457l2.826.357c.019-.17.06-.685.073-1.38s.526-1.474.7-1.837"
      />
      <path
        fill="url(#ORN__e)"
        d="M11.807 18.857c-3.877 0-6.416-3.503-6.235-6.857 1.251 4.188 4.302 5.068 6.235 4.617 1.547-.36 2.935-1.923 3.478-2.687.222-.311 1.047-.428 1.733-.054s.85 1.196.686 1.502c-1.638 3.06-4.419 3.48-5.897 3.48"
      />
      <path
        fill="url(#ORN__f)"
        d="M18 8.571A1.286 1.286 0 1 0 18 6a1.286 1.286 0 0 0 0 2.571"
      />
      <defs>
        <linearGradient
          id="ORN__a"
          x1="6.953"
          x2="21.245"
          y1="8.987"
          y2="12.091"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5D86BC" />
          <stop offset=".614" stopColor="#6CC3D7" />
        </linearGradient>
        <linearGradient
          id="ORN__b"
          x1="6.361"
          x2="19.252"
          y1="10.082"
          y2="15.402"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".226" stopColor="#94D0DA" />
          <stop offset="1" stopColor="#3F65AE" />
        </linearGradient>
        <linearGradient
          id="ORN__c"
          x1="17.113"
          x2="10.498"
          y1="5.793"
          y2="18.096"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F57240" />
          <stop offset="1" stopColor="#FBE18C" />
        </linearGradient>
        <linearGradient
          id="ORN__d"
          x1="6.884"
          x2="17.679"
          y1="13.722"
          y2="5.73"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".212" stopColor="#583D90" />
          <stop offset="1" stopColor="#DC719B" />
        </linearGradient>
        <linearGradient
          id="ORN__e"
          x1="5.458"
          x2="20.195"
          y1="6.665"
          y2="9.813"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FA2C5" />
          <stop offset="1" stopColor="#FD7813" />
        </linearGradient>
        <linearGradient
          id="ORN__f"
          x1="18.75"
          x2="17.23"
          y1="6.431"
          y2="8.204"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B1599B" />
          <stop offset="1" stopColor="#5B418B" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

TokenORN.displayName = 'ORN'
