import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRARI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 7.286h9.593c1.33 0 2.407 1.07 2.407 2.39a2.39 2.39 0 0 1-1.335 2.141 2.35 2.35 0 0 1 1.325 2.326H18v2.143h-3.429v-2.283c0-.396-.363-.717-.81-.717H9.428v3H6zm7.929 2.143h-4.5v1.285h4.5c.276 0 .642-.288.642-.643 0-.354-.366-.643-.642-.643"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RARI__a)"
            d="M6 7.286h9.593c1.33 0 2.407 1.07 2.407 2.39a2.39 2.39 0 0 1-1.335 2.141 2.35 2.35 0 0 1 1.325 2.326H18v2.143h-3.429v-2.283c0-.396-.363-.717-.81-.717H9.428v3H6zm7.929 2.143h-4.5v1.285h4.5c.276 0 .642-.288.642-.643 0-.354-.366-.643-.642-.643"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="RARI__a"
              x1="7.191"
              x2="16.661"
              y1="9.068"
              y2="16.041"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".058" stopColor="#2568FF" />
              <stop offset=".306" stopColor="#5E9AFE" />
              <stop offset=".819" stopColor="#FF74F2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRARI.displayName = 'RARI'
