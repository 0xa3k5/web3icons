import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBLOX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.572 11.541 5.143 8.8v6.857l6.429 3.201zM12 5.143 5.602 7.886 12 10.629l6.4-2.743zm6.857 3.428-6.428 2.97v7.316l6.428-3.201z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BLOX__a)"
            d="M11.571 11.541 5.143 8.8v6.857l6.428 3.201z"
          />
          <path
            fill="url(#BLOX__b)"
            d="M12 5.143 5.6 7.886l6.4 2.743 6.398-2.743z"
          />
          <path
            fill="url(#BLOX__c)"
            d="m18.857 8.571-6.429 2.97v7.316l6.429-3.201z"
          />
          <defs>
            <linearGradient
              id="BLOX__a"
              x1="19.771"
              x2="19.771"
              y1=".158"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#84F9C8" />
              <stop offset="1" stopColor="#7FB7F6" />
            </linearGradient>
            <linearGradient
              id="BLOX__b"
              x1="12"
              x2="12"
              y1="5.143"
              y2="39.428"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#84F9C8" />
              <stop offset="1" stopColor="#7FB7F6" />
            </linearGradient>
            <linearGradient
              id="BLOX__c"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#84F9C8" />
              <stop offset="1" stopColor="#7FB7F6" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBLOX.displayName = 'BLOX'
