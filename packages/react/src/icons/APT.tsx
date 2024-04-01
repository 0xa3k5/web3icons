import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAPT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15.93 9.763-7.87 2.794a.584.584 0 0 1-.776-.651l.73-3.96a.57.57 0 0 1 .205-.347l3.411-2.752a.59.59 0 0 1 .742 0L15.8 7.611a.6.6 0 0 1 .202.309l.3 1.144a.586.586 0 0 1-.373.699m-9.095 4.753-.394 2.005a.575.575 0 0 0 .304.63 11.6 11.6 0 0 0 5.26 1.277c1.006 0 3-.132 5.206-1.25a.65.65 0 0 0 .347-.708l-.942-5.014a.587.587 0 0 0-.78-.442L7.22 14.08a.59.59 0 0 0-.386.437"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#APT__a)"
            d="m15.93 9.763-7.87 2.794a.584.584 0 0 1-.776-.651l.73-3.96a.57.57 0 0 1 .205-.347l3.411-2.752a.59.59 0 0 1 .742 0L15.8 7.611a.6.6 0 0 1 .202.309l.3 1.144a.586.586 0 0 1-.373.699m-9.095 4.753-.394 2.005a.575.575 0 0 0 .304.63 11.6 11.6 0 0 0 5.26 1.277c1.006 0 3-.132 5.206-1.25a.65.65 0 0 0 .347-.708l-.942-5.014a.587.587 0 0 0-.78-.442L7.22 14.08a.59.59 0 0 0-.386.437"
          />
          <defs>
            <linearGradient
              id="APT__a"
              x1="17.503"
              x2="10.354"
              y1="18.351"
              y2="5.717"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".11" stopColor="#C65CFF" />
              <stop offset=".18" stopColor="#BA6BFF" />
              <stop offset=".33" stopColor="#9991FF" />
              <stop offset=".53" stopColor="#6CF" />
              <stop offset=".81" stopColor="#42F0DB" />
              <stop offset=".97" stopColor="#3FC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAPT.displayName = 'APT'
