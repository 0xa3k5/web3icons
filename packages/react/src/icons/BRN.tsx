import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconBRN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.143 13.436-.617-1.008-2.383 4.063 5.571 2.366-.857-1.286-3.27-1.423zm7.714 0 .617-1.008 2.383 4.063-5.571 2.366.857-1.286 3.27-1.423zm-5.142-2.293L12 9l1.286 2.143-.476 1.058.476 1.085L12 15.429l-1.286-2.143.476-1.085zM12 14.57l.759-1.285-.215-.583-.115.154v-.934l.274-.78L12 9.857l-.703 1.286.275.78v.934l-.116-.154-.214.583z"
          />
          <path
            fill="currentColor"
            d="m9 10.144 3-5.001 3 5.001-.566.999L12 7.063l-2.434 4.08z"
          />
          <path
            fill="currentColor"
            d="M5.143 7.286 12 18.857l6.857-11.571-5.434-2.143.72 1.286 3.261 1.195L12 16.86 6.596 7.629l3.261-1.2.72-1.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0EEBFF"
            d="m8.143 13.436-.618-1.008-2.382 4.063 5.571 2.366-.857-1.286-3.27-1.423zm7.714 0 .617-1.008 2.383 4.063-5.572 2.366.858-1.286 3.27-1.423z"
          />
          <path
            fill="url(#BRN__a)"
            d="M10.714 11.143 12 9l1.285 2.143-.475 1.058.475 1.085L12 15.429l-1.286-2.143.476-1.085zM12 14.57l.758-1.285-.214-.583-.116.154v-.934l.275-.78L12 9.857l-.703 1.286.274.78v.934l-.116-.154-.214.583z"
          />
          <path
            fill="url(#BRN__b)"
            d="m9 10.144 3-5.001 3 5.001-.566.999L12 7.063l-2.435 4.08z"
          />
          <path
            fill="url(#BRN__c)"
            d="M5.143 7.286 12 18.857l6.857-11.571-5.434-2.143.72 1.286 3.261 1.195L12 16.86 6.595 7.629l3.262-1.2.72-1.286z"
          />
          <defs>
            <linearGradient
              id="BRN__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#19F1FE" />
              <stop offset=".5" stopColor="#7F6EFB" />
              <stop offset="1" stopColor="#8450FD" />
            </linearGradient>
            <linearGradient
              id="BRN__b"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".18" stopColor="#3636E5" />
              <stop offset="1" stopColor="#1CA4FD" />
            </linearGradient>
            <linearGradient
              id="BRN__c"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C63FFF" />
              <stop offset=".49" stopColor="#6D5FFE" />
              <stop offset="1" stopColor="#268EF5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBRN.displayName = 'BRN'
