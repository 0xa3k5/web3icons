import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconEURS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.904 16.793A6.84 6.84 0 0 0 18.857 12c0-2.19-1.026-4.14-2.625-5.396l-1.227.047c-1.81.207-3.408 1.255-4.203 2.776h6.77l-.857 1.715H10.29l-.004.038a5.7 5.7 0 0 0 0 1.633l.005.044h5.566L15 14.571h-4.058c.705 1.017 1.89 1.697 3.24 1.929 1.162.198 2.119.269 2.722.293m-1.982 1.412A6.857 6.857 0 1 1 13.556 5.32 6.46 6.46 0 0 0 8.93 9.427H7.714l-.857 1.715h1.715a10 10 0 0 0 0 1.715h-.858l-.857 1.714h2.195c.993 1.998 3.282 3.336 5.13 3.556q.393.047.74.078"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#EURS__a)"
            d="M16.904 16.793A6.84 6.84 0 0 0 18.857 12c0-2.19-1.027-4.14-2.625-5.396l-1.228.047c-1.81.207-3.407 1.255-4.203 2.776h6.77l-.857 1.715h-6.425l-.004.038a5.7 5.7 0 0 0 0 1.633l.006.044h5.566L15 14.571h-4.06c.705 1.017 1.891 1.697 3.241 1.929 1.162.198 2.118.269 2.722.293m-1.983 1.412A6.857 6.857 0 1 1 13.555 5.32 6.46 6.46 0 0 0 8.93 9.427H7.714l-.857 1.715H8.57a10 10 0 0 0 0 1.715h-.857l-.857 1.714H9.05c.993 1.998 3.282 3.336 5.131 3.556q.393.047.74.078"
          />
          <defs>
            <linearGradient
              id="EURS__a"
              x1="18.395"
              x2="5.858"
              y1="5.999"
              y2="17.344"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B030EC" />
              <stop offset=".464" stopColor="#2B7FEF" />
              <stop offset="1" stopColor="#15BCFF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconEURS.displayName = 'EURS'
