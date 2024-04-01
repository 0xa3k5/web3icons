import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconROUTE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.645 5.036a.26.26 0 0 1-.009-.356 2.374 2.374 0 0 1 3.484-.116l1.8 1.787a3.767 3.767 0 0 1 .043 5.237l-2.297 2.388 2.391 2.472a2.63 2.63 0 0 1 .009 3.622.235.235 0 0 1-.343 0L10.3 16.607a3.767 3.767 0 0 1 .008-5.254l2.28-2.293-3.943-4.03z"
          />
          <path
            fill="currentColor"
            d="m11.057 10.594 1.526-1.534a2.786 2.786 0 0 1 .381 3.566l-1.298 1.345c-.489-.493-1.389-1.671-.634-3.317z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ROUTE__a)"
            d="M8.645 5.036a.26.26 0 0 1-.009-.356 2.374 2.374 0 0 1 3.484-.116l1.8 1.787a3.767 3.767 0 0 1 .043 5.237l-2.297 2.388 2.391 2.472a2.63 2.63 0 0 1 .009 3.622.235.235 0 0 1-.343 0L10.3 16.607a3.767 3.767 0 0 1 .008-5.254l2.28-2.293-3.943-4.03z"
          />
          <path
            fill="url(#ROUTE__b)"
            d="m11.057 10.594 1.526-1.534a2.786 2.786 0 0 1 .381 3.566l-1.298 1.345c-.489-.493-1.389-1.671-.634-3.317z"
          />
          <defs>
            <linearGradient
              id="ROUTE__a"
              x1="15.369"
              x2="10.453"
              y1="10.448"
              y2="10.448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FE8664" />
              <stop offset="1" stopColor="#FF3B56" />
            </linearGradient>
            <linearGradient
              id="ROUTE__b"
              x1="13.255"
              x2="11.035"
              y1="10.093"
              y2="13.312"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AB3E55" />
              <stop offset=".51" stopColor="#BD4551" />
              <stop offset="1" stopColor="#AB3E55" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconROUTE.displayName = 'ROUTE'
