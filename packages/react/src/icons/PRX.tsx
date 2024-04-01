import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPRX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M19.714 9.377 6.943 5.224l5.593 7.86z" />
          <path
            fill="currentColor"
            d="m9.514 15.022-2.657 5.121 7.457-4.954L6.857 5.143z"
          />
        </>
      ) : (
        <>
          <path fill="url(#PRX__a)" d="M19.714 9.377 6.942 5.224l5.593 7.86z" />
          <path
            fill="url(#PRX__b)"
            d="m9.515 15.022-2.658 5.121 7.458-4.954L6.857 5.143z"
          />
          <defs>
            <linearGradient
              id="PRX__a"
              x1="8.288"
              x2="12.802"
              y1="6.347"
              y2="14.584"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F504CB" />
              <stop offset="1" stopColor="#3F2EA0" />
            </linearGradient>
            <linearGradient
              id="PRX__b"
              x1="7.643"
              x2="16.343"
              y1="7.286"
              y2="12.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F504CB" />
              <stop offset="1" stopColor="#3F2EA0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPRX.displayName = 'PRX'
