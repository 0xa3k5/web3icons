import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconKLV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M18 17.143h-5.778L18 11.57z" />
          <path fill="currentColor" d="M18 17.143H6V5.57z" />
          <path
            fill="currentColor"
            d="m18 17.143-2.889-2.786.667-.643z"
            opacity=".14"
          />
        </>
      ) : (
        <>
          <path fill="url(#KLV__a)" d="M18 17.143h-5.778L18 11.57z" />
          <path fill="url(#KLV__b)" d="M18 17.143H6V5.57z" />
          <path
            fill="#000"
            d="m18 17.143-2.889-2.786.667-.643z"
            opacity=".14"
          />
          <defs>
            <linearGradient
              id="KLV__a"
              x1="12"
              x2="12"
              y1="5.518"
              y2="17.166"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF4681" />
              <stop offset="1" stopColor="#9B44F6" />
            </linearGradient>
            <linearGradient
              id="KLV__b"
              x1="3.141"
              x2="14.723"
              y1="8.6"
              y2="20.611"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF4681" />
              <stop offset=".739" stopColor="#9B44F6" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconKLV.displayName = 'KLV'
