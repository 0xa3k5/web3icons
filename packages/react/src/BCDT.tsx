import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBCDT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 7.269v6.771l3.429 1.997v3.96c0 .112.175.18.274.129L12 18.853l2.263 1.268a.15.15 0 0 0 .223-.128v-3.956L18 14.04V7.269l-6-3.412zm2.49 1.17L6.596 7.38 12 4.247l5.357 3.086-1.873 1.076S13.166 7.106 12 6.437zm-2.061 5.4V7.774l1.714.96v4.029s2.477 1.294 3.643 1.941v3.802l-1.929 1.063v-3.755l-3.428-1.98zM17.57 7.697v6.137l-3.467 1.98v3.755l-1.911-1.059v-3.801c1.161-.652 3.664-1.942 3.664-1.942V8.674zm-9 4.843V8.983l3.215 1.787v3.527zm6.858-3.604v3.6l-3.215 1.761V10.77zM12 10.414 8.871 8.657 11.98 6.88l3.107 1.761z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BCDT__a)"
            d="M6 7.269v6.771l3.429 1.997v3.96c0 .112.175.18.274.129L12 18.853l2.263 1.268a.15.15 0 0 0 .223-.128v-3.956L18 14.04V7.269l-6-3.412zm2.49 1.17L6.596 7.38 12 4.247l5.357 3.086-1.873 1.076S13.166 7.106 12 6.437zm-2.061 5.4V7.774l1.714.96v4.029s2.477 1.294 3.643 1.941v3.802l-1.929 1.063v-3.755l-3.428-1.98zM17.57 7.697v6.137l-3.467 1.98v3.755l-1.911-1.059v-3.801c1.161-.652 3.664-1.942 3.664-1.942V8.674zm-9 4.843V8.983l3.215 1.787v3.527zm6.858-3.604v3.6l-3.215 1.761V10.77zM12 10.414 8.871 8.657 11.98 6.88l3.107 1.761z"
          />
          <defs>
            <linearGradient
              id="BCDT__a"
              x1="12"
              x2="12"
              y1="3.857"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#07B5F3" />
              <stop offset="1" stopColor="#44E6DC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBCDT.displayName = 'BCDT'
