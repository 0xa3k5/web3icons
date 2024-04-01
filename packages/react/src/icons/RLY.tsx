import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconRLY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.43 8.357 12 4.714 5.573 8.357v7.286L12 19.286l6.429-3.643zm-2.144.857L12 6.857 7.714 9.214v4.715l2.143 1.178v-4.54L12 9.43l2.14 1.137 2.146-1.336z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RLY__a)"
            d="M18.43 8.357 12 4.714 5.573 8.357v7.286l6.429 3.643 6.428-3.643zm-2.145.857L12 6.857 7.714 9.214v4.715l2.143 1.178v-4.54L12 9.43l2.139 1.137 2.146-1.336z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="RLY__a"
              x1="12.001"
              x2="12.001"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF4500" />
              <stop offset="1" stopColor="#FFC604" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRLY.displayName = 'RLY'
