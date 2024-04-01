import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKDA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.306 18.857h-4.245l-4.354-6.204 1.742-3.591zM5.571 5.143H9v13.714H5.57z"
          />
          <path fill="currentColor" d="M17.544 5.143h-3.918L9 9.857v4.284z" />
        </>
      ) : (
        <>
          <path
            fill="url(#KDA__a)"
            d="M18.306 18.857h-4.245l-4.354-6.204 1.742-3.591z"
          />
          <path fill="#6A0097" d="M5.571 5.143H9v13.714H5.57z" />
          <path fill="url(#KDA__b)" d="M17.544 5.143h-3.918L9 9.857v4.284z" />
          <defs>
            <linearGradient
              id="KDA__a"
              x1="15.314"
              x2="8.236"
              y1="18.857"
              y2="8.875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6A0097" />
              <stop offset="1" stopColor="#E40790" />
            </linearGradient>
            <linearGradient
              id="KDA__b"
              x1="16.286"
              x2="8.571"
              y1="5.143"
              y2="12.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#730196" />
              <stop offset="1" stopColor="#ED098F" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconKDA.displayName = 'KDA'
