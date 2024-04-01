import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSTSOL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#STSOL__a)"
        d="m12 13.371-4.393-2.58-.124.189a5.434 5.434 0 0 0 .728 6.724 5.34 5.34 0 0 0 7.577 0 5.42 5.42 0 0 0 .729-6.724l-.124-.189z"
      />
      <path
        fill="url(#STSOL__b)"
        d="M16.393 10.8 12 13.38l-4.397-2.585 4.41-2.305z"
      />
      <path fill="url(#STSOL__c)" d="m12 3.857 3.793 5.914L12 12z" />
      <path fill="url(#STSOL__d)" d="M12 3.857V12L8.215 9.77z" />
      <defs>
        <linearGradient
          id="STSOL__a"
          x1="12"
          x2="12"
          y1="3.857"
          y2="19.288"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#498BE9" />
          <stop offset="1" stopColor="#56F2FF" />
        </linearGradient>
        <linearGradient
          id="STSOL__b"
          x1="11.999"
          x2="11.999"
          y1="3.857"
          y2="19.229"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4A8CEA" />
          <stop offset=".7" stopColor="#5ABEF4" />
        </linearGradient>
        <linearGradient
          id="STSOL__c"
          x1="13.147"
          x2="11.023"
          y1="12.382"
          y2="19.907"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FB8174" />
          <stop offset=".56" stopColor="#568FDD" />
        </linearGradient>
        <linearGradient
          id="STSOL__d"
          x1="9.017"
          x2="9.703"
          y1="7.898"
          y2="11.211"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE235" />
          <stop offset=".61" stopColor="#5DCBA2" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSTSOL.displayName = 'STSOL'
