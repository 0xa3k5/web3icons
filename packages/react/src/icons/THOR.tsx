import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconTHOR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
          />
          <path
            fill="currentColor"
            d="m10.612 9.433 1.577 1.526L15.69 7.23l-5.078 2.2zm5.854-3.004.248.334-4.512 4.809L9.856 9.3zm-2.623 7.311-1.616-1.547-4.196 4.354zm-6.557 3.617-.24-.343 5.168-5.442 2.358 2.305z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#THOR__a)"
            d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0M12 18.857a6.857 6.857 0 1 0 0-13.713 6.857 6.857 0 0 0 0 13.713"
          />
          <path
            fill="url(#THOR__b)"
            d="m10.611 9.433 1.577 1.526L15.69 7.23l-5.08 2.2zm5.854-3.004.249.334-4.513 4.809L9.857 9.3z"
          />
          <path
            fill="url(#THOR__c)"
            d="m13.842 13.74-1.615-1.547-4.196 4.354zm-6.557 3.617-.24-.343 5.169-5.442 2.357 2.305z"
          />
          <defs>
            <linearGradient
              id="THOR__a"
              x1="16.928"
              x2="7.714"
              y1="6.429"
              y2="17.357"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#37FAF9" />
              <stop offset="1" stopColor="#08ACFC" />
            </linearGradient>
            <linearGradient
              id="THOR__b"
              x1="18.484"
              x2="5.338"
              y1="5.261"
              y2="13.307"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3EFFFA" />
              <stop offset="1" stopColor="#29E0EE" />
            </linearGradient>
            <linearGradient
              id="THOR__c"
              x1="8.203"
              x2="13.325"
              y1="16.718"
              y2="12.737"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14AAFE" />
              <stop offset="1" stopColor="#1CD2F1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTHOR.displayName = 'THOR'
