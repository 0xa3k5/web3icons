import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconUW3S = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.972 9H9v4.972A4.634 4.634 0 1 1 13.972 9"
          />
          <path
            fill="currentColor"
            d="M9.163 13.894A4.73 4.73 0 0 0 13.89 9h4.539v9.429H9v-4.543z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#UW3S__a)"
            d="M13.971 9H9v4.972A4.634 4.634 0 1 1 13.97 9"
          />
          <path
            fill="url(#UW3S__b)"
            d="M9.163 13.894A4.73 4.73 0 0 0 13.89 9h4.538v9.429H9v-4.543z"
          />
          <defs>
            <linearGradient
              id="UW3S__a"
              x1="17.476"
              x2="4.712"
              y1="10.999"
              y2="14.111"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C3F5E9" />
              <stop offset=".17" stopColor="#C7C6E8" />
              <stop offset=".45" stopColor="#D196E5" />
              <stop offset=".69" stopColor="#7698EC" />
              <stop offset=".95" stopColor="#5693F0" />
            </linearGradient>
            <linearGradient
              id="UW3S__b"
              x1="17.974"
              x2="9.283"
              y1="9.244"
              y2="18.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9CFEB" />
              <stop offset=".2" stopColor="#AC90F4" />
              <stop offset=".49" stopColor="#7567F8" />
              <stop offset="1" stopColor="#3095F4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconUW3S.displayName = 'UW3S'
