import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKAP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.55 8.572 5.57 18l4.8-2.614.262.146-.87-2.915-.429 1.316-.488-.214.647-1.993zm6.831 0L18.428 18l-4.915-2.614-.266.146.891-2.915.438 1.316.501-.214-.664-1.993.973-3.154zM12 3.429l-2.143 6.634L12 17.143l2.143-7.08zm-1.504 6.647L12 5.404l1.504 4.672L12 15.026z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KAP__a)"
            d="M8.55 8.572 5.57 18l4.8-2.614.262.146-.87-2.915-.429 1.316-.488-.214.647-1.993zm6.831 0L18.428 18l-4.915-2.614-.266.146.891-2.915.438 1.316.501-.214-.664-1.993.973-3.154z"
          />
          <path
            fill="url(#KAP__b)"
            d="m12 3.429-2.143 6.634L12 17.143l2.143-7.08zm-1.504 6.647L12 5.404l1.504 4.672L12 15.026z"
          />
          <defs>
            <linearGradient
              id="KAP__a"
              x1="12"
              x2="12"
              y1="3.429"
              y2="18"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DBA646" />
              <stop offset="1" stopColor="#D38B3E" />
            </linearGradient>
            <linearGradient
              id="KAP__b"
              x1="12"
              x2="12"
              y1="3.429"
              y2="17.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DCAC4A" />
              <stop offset="1" stopColor="#CC7229" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconKAP.displayName = 'KAP'
