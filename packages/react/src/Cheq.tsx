import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCHEQ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#CHEQ__a)"
        d="m6.523 7.119 4.016-2.04a3.33 3.33 0 0 1 1.765-.356c.746.06 2.739 3.437 2.739 3.437a.94.94 0 0 0-.806-.446H6.111c-.441 0-.857.429-1.015.613.313-.596.805-.891 1.427-1.208"
      />
      <path
        fill="url(#CHEQ__b)"
        d="m15.043 8.357.952 1.534a1.83 1.83 0 0 0 1.577.823c.861 0 1.684-.655 1.714-1.44a1.2 1.2 0 0 0-.06-.42c-.248-.758-.806-1.307-1.65-1.735l-4.016-2.04a3.3 3.3 0 0 0-1.255-.356c.745.06 2.734 3.63 2.738 3.638z"
      />
      <path
        fill="url(#CHEQ__c)"
        d="M4.714 9.862c0-.545.137-1.072.382-1.535.154-.184.574-.613 1.015-.613h4.003a.94.94 0 0 0-.78.412l-2.048 3.201q-.093.138-.146.296v.009s-1.697 2.717-1.826 2.94c-.257.458-.244.857-.244.857a3.3 3.3 0 0 1-.36-1.496V9.86z"
      />
      <path
        fill="url(#CHEQ__d)"
        d="M5.315 14.571c.128-.223 1.821-2.94 1.821-2.94v-.008a1.24 1.24 0 0 0 .154 1.106l2.045 2.952s1.015 1.749 1.778 2.889c.197.325.495.577.849.716a3.3 3.3 0 0 1-1.423-.36L6.523 16.88a3.3 3.3 0 0 1-1.453-1.453l.005.01s-.018-.404.244-.862z"
      />
      <path
        fill="url(#CHEQ__e)"
        d="M11.113 18.57c-.763-1.14-1.673-2.69-1.673-2.69a.95.95 0 0 0 .78.407h8.465c-.32.33-.698.598-1.115.793l-4.015 1.843a3.3 3.3 0 0 1-1.599.364 1.73 1.73 0 0 1-.849-.716z"
      />
      <path
        fill="url(#CHEQ__f)"
        d="M18.686 16.286c.3-.335.6-.858.6-1.286 0-.857-.6-1.714-1.714-1.714-.857 0-1.307.428-1.65.973l-.879 1.585a.94.94 0 0 1-.797.442z"
      />
      <defs>
        <linearGradient
          id="CHEQ__a"
          x1="14.417"
          x2="5.649"
          y1="7.504"
          y2="7.504"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A53523" />
          <stop offset="1" stopColor="#DD9D1A" />
        </linearGradient>
        <linearGradient
          id="CHEQ__b"
          x1="13.26"
          x2="18.63"
          y1="4.727"
          y2="9.823"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DB991A" />
          <stop offset=".27" stopColor="#D48D1C" />
          <stop offset="1" stopColor="#9C2425" />
        </linearGradient>
        <linearGradient
          id="CHEQ__c"
          x1="7.414"
          x2="7.414"
          y1="7.912"
          y2="15.437"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A12E24" />
          <stop offset="1" stopColor="#E4AB19" />
        </linearGradient>
        <linearGradient
          id="CHEQ__d"
          x1="5.079"
          x2="10.86"
          y1="15.437"
          y2="18.947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#971C26" />
          <stop offset="1" stopColor="#DEA01A" />
        </linearGradient>
        <linearGradient
          id="CHEQ__e"
          x1="18.369"
          x2="8.91"
          y1="16.487"
          y2="16.487"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E3A919" />
          <stop offset="1" stopColor="#9B2225" />
        </linearGradient>
        <linearGradient
          id="CHEQ__f"
          x1="16.736"
          x2="16.736"
          y1="13.384"
          y2="16.088"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1A419" />
          <stop offset="1" stopColor="#971C26" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconCHEQ.displayName = 'CHEQ'
