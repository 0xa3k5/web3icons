import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSLIM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#SLIM__a)"
        d="m11.992 9.883 1.332-1.32-1.341-1.32-1.346 1.328 6.935 6.857-4.843 4.715h-1.535L6.43 15.428l3.424-3.398 2.066 2.048-1.419 1.35 1.5 1.286 1.286-1.286-1.367-1.35-2.062-2.048L6.43 8.57l4.765-4.714h1.535l4.843 4.714-3.429 3.454z"
      />
      <path
        fill="url(#SLIM__b)"
        d="M11.194 3.857 16.03 8.57h1.543L12.73 3.856z"
      />
      <path
        fill="url(#SLIM__c)"
        d="M17.572 8.571h-1.539l-2.713 2.636.823.818z"
      />
      <path
        fill="url(#SLIM__d)"
        d="m13.089 17.636 2.34-2.208h2.143l-4.843 4.715-4.655-4.715h2.64z"
      />
      <path
        fill="url(#SLIM__e)"
        d="m8.074 15.428 2.606-2.571 1.239 1.221-1.205 1.35z"
      />
      <path
        fill="url(#SLIM__f)"
        d="m8.683 8.571 6.746 6.857h2.143l-5.58-5.545a61 61 0 0 1-1.235-1.312z"
      />
      <path
        fill="url(#SLIM__g)"
        d="m14.143 12.026 1.526-1.526-2.413-1.886-1.264 1.269z"
      />
      <path
        fill="url(#SLIM__h)"
        d="m9.853 12.03-2.447 2.443 3.308.955 1.205-1.35z"
      />
      <path fill="url(#SLIM__i)" d="m11.04 6.338.943.905-1.23 1.328H8.687z" />
      <defs>
        <linearGradient
          id="SLIM__a"
          x1="10.522"
          x2="16.063"
          y1="18.163"
          y2="8.987"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C20FF6" />
          <stop offset=".49" stopColor="#749CCE" />
          <stop offset="1" stopColor="#47C1C1" />
        </linearGradient>
        <linearGradient
          id="SLIM__b"
          x1="8.533"
          x2="21.879"
          y1="5.411"
          y2="13.282"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4AF3FF" />
          <stop offset="1" stopColor="#087792" />
        </linearGradient>
        <linearGradient
          id="SLIM__c"
          x1="19.021"
          x2="6.7"
          y1="6.767"
          y2="12.861"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#004957" />
          <stop offset="1" stopColor="#7A97D0" />
        </linearGradient>
        <linearGradient
          id="SLIM__d"
          x1="7.711"
          x2="14.591"
          y1="9.216"
          y2="11.011"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D29BFF" />
          <stop offset="1" stopColor="#B661E2" />
        </linearGradient>
        <linearGradient
          id="SLIM__e"
          x1="12.031"
          x2="12.031"
          y1="3.721"
          y2="19.735"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7599CE" />
          <stop offset="1" stopColor="#69039C" />
        </linearGradient>
        <linearGradient
          id="SLIM__f"
          x1="8.594"
          x2="20.151"
          y1="7.277"
          y2="12.715"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1EB8F1" />
          <stop offset="1" stopColor="#9F76DB" />
        </linearGradient>
        <linearGradient
          id="SLIM__g"
          x1="12.52"
          x2="4.239"
          y1="10.363"
          y2="16.914"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#313131" stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="SLIM__h"
          x1="11.752"
          x2="19.073"
          y1="12.77"
          y2="8.91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#313131" stopOpacity="0" />
          <stop offset="1" />
        </linearGradient>
        <linearGradient
          id="SLIM__i"
          x1="11.679"
          x2="10.86"
          y1="6.93"
          y2="8.34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4ADAE8" />
          <stop offset="1" stopColor="#5E92C9" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSLIM.displayName = 'SLIM'
