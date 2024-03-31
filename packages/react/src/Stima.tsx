import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSTIMA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#STIMA__a)"
        d="M11.631 4.385a.75.75 0 0 1 .737 0l6.12 3.492a.72.72 0 0 1 .369.63v6.986a.73.73 0 0 1-.369.63l-6.12 3.493a.75.75 0 0 1-.737 0l-6.12-3.493a.73.73 0 0 1-.368-.63V8.507a.73.73 0 0 1 .368-.63z"
      />
      <path
        fill="url(#STIMA__b)"
        d="M12.017 12 6 8.572l6.017-3.429L18 8.572z"
      />
      <path
        fill="url(#STIMA__c)"
        d="m12 11.979-.005 6.878-5.987-3.45L6 8.572z"
      />
      <path
        fill="url(#STIMA__d)"
        d="m12 11.979.004 6.878 5.987-3.45L18 8.572z"
      />
      <path
        fill="url(#STIMA__e)"
        d="m5.794 10.77 6.343 3.545a.457.457 0 0 1 .171.634.473.473 0 0 1-.643.171l-6.342-3.544z"
      />
      <path
        fill="url(#STIMA__f)"
        d="m18.107 13.316-6.364-3.647a.46.46 0 0 1-.172-.639.47.47 0 0 1 .639-.171l6.373 3.656-.472.8z"
      />
      <defs>
        <linearGradient
          id="STIMA__a"
          x1="5.143"
          x2="19.624"
          y1="15.339"
          y2="8.572"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EBECF3" />
          <stop offset="1" stopColor="#ACB2C6" />
        </linearGradient>
        <linearGradient
          id="STIMA__b"
          x1="4.795"
          x2="18.421"
          y1="11.827"
          y2="11.807"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD79B2" />
          <stop offset=".5" stopColor="#D4399B" />
          <stop offset="1" stopColor="#B94299" />
        </linearGradient>
        <linearGradient
          id="STIMA__c"
          x1="5.828"
          x2="16.435"
          y1="14.745"
          y2="5.757"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD79B2" />
          <stop offset=".5" stopColor="#D4399B" />
          <stop offset="1" stopColor="#B94299" />
        </linearGradient>
        <linearGradient
          id="STIMA__d"
          x1="5.583"
          x2="16.256"
          y1="8.549"
          y2="18.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7036C" />
          <stop offset="1" stopColor="#8C136D" />
        </linearGradient>
        <linearGradient
          id="STIMA__e"
          x1="5.143"
          x2="20.755"
          y1="4.288"
          y2="9.548"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E7EF" />
          <stop offset="1" stopColor="#ACB2C6" />
        </linearGradient>
        <linearGradient
          id="STIMA__f"
          x1="18.442"
          x2="11.658"
          y1="10.929"
          y2="10.149"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B7BDCE" />
          <stop offset="1" stopColor="#D0D3E1" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSTIMA.displayName = 'STIMA'
