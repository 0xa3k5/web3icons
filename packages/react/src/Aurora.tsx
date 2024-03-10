import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAurora = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.346 6.84a1.5 1.5 0 0 0-2.692 0l-4.063 7.701a1.5 1.5 0 0 0 1.346 2.173h8.126a1.5 1.5 0 0 0 1.346-2.173zm-3.459-.386a2.357 2.357 0 0 1 4.226 0l4.067 7.702a2.356 2.356 0 0 1-2.117 3.415H7.937a2.366 2.366 0 0 1-2.117-3.415l4.067-7.697z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AURORA__a)">
            <path fill="url(#AURORA__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M13.346 6.84a1.5 1.5 0 0 0-2.692 0l-4.063 7.701a1.5 1.5 0 0 0 1.346 2.173h8.126a1.5 1.5 0 0 0 1.346-2.173zm-3.459-.386a2.357 2.357 0 0 1 4.226 0l4.067 7.702a2.356 2.356 0 0 1-2.117 3.415H7.937a2.366 2.366 0 0 1-2.117-3.415l4.067-7.697z"
            />
          </g>
          <defs>
            <linearGradient
              id="AURORA__b"
              x1="19.453"
              x2="4.62"
              y1="2.614"
              y2="21.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#95E141" />
              <stop offset=".59" stopColor="#63B836" />
              <stop offset="1" stopColor="#409C2D" />
            </linearGradient>
            <clipPath id="AURORA__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAurora.displayName = 'Aurora'

export default IconAurora
