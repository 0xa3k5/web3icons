import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCast = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.286 12a2.571 2.571 0 1 0 5.143 0 2.571 2.571 0 0 0-5.143 0"
          />
          <path
            fill="currentColor"
            d="M17.486 7.766a7.09 7.09 0 0 0-5.434-2.623A6.887 6.887 0 0 0 5.143 12c0 3.789 3.099 6.857 6.909 6.857 2.138 0 4.063-1.007 5.434-2.623l-1.59-1.577A4.71 4.71 0 0 1 7.286 12a4.714 4.714 0 0 1 8.61-2.657z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CAST__a)"
            d="M13.285 12a2.572 2.572 0 1 0 5.144 0 2.572 2.572 0 0 0-5.144 0"
          />
          <path
            fill="url(#CAST__b)"
            d="M17.485 7.766a7.09 7.09 0 0 0-5.434-2.623A6.887 6.887 0 0 0 5.143 12c0 3.789 3.098 6.857 6.908 6.857 2.139 0 4.063-1.007 5.434-2.623l-1.59-1.577A4.71 4.71 0 0 1 7.285 12a4.714 4.714 0 0 1 8.61-2.657z"
          />
          <defs>
            <linearGradient
              id="CAST__a"
              x1="5.143"
              x2="18.428"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".01" stopColor="#CBBBA0" />
              <stop offset="1" stopColor="#7A6037" />
            </linearGradient>
            <linearGradient
              id="CAST__b"
              x1="5.143"
              x2="17.485"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".01" stopColor="#CBBBA0" />
              <stop offset="1" stopColor="#7A6037" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCast.displayName = 'Cast'

export default IconCast
