import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAvinoc = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.254 5.572h5.829L11.79 6.857H9.086L6.17 12l2.915 5.143h5.828L17.62 12l-1.247-2.143.21-2.571L19.286 12l-3.54 6.429H8.254L4.714 12z"
          />
          <path
            fill="currentColor"
            d="m8.254 10.714 7.702-5.142-1.042 9-2.082-3.858z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AVINOC__a)">
            <path fill="url(#AVINOC__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M8.254 5.572h5.829L11.79 6.857H9.086L6.17 12l2.915 5.143h5.828L17.62 12l-1.247-2.143.21-2.571L19.286 12l-3.54 6.429H8.254L4.714 12z"
            />
            <path
              fill="#fff"
              d="m8.254 10.714 7.702-5.142-1.042 9-2.082-3.858z"
            />
          </g>
          <defs>
            <linearGradient
              id="AVINOC__b"
              x1="4.466"
              x2="29.207"
              y1="4.161"
              y2="32.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
            <clipPath id="AVINOC__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAvinoc.displayName = 'Avinoc'

export default IconAvinoc
