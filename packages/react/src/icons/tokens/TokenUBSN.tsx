import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenUBSN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m14.143 15-6.857-4.286V9l6.857 4.286z" />
          <path
            fill="currentColor"
            d="M7.286 9h15v1.714h-15zm6.857 6H1.714v-1.714h12.43z"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="m14.143 15-6.857-4.286V9l6.857 4.286z"
            opacity=".8"
          />
          <path fill="url(#UBSN__a)" d="M7.286 9h15v1.714h-15z" />
          <path fill="url(#UBSN__b)" d="M14.143 15H1.714v-1.714h12.429z" />
          <defs>
            <linearGradient
              id="UBSN__a"
              x1="8.418"
              x2="21.738"
              y1="10.269"
              y2="10.269"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="UBSN__b"
              x1="13.204"
              x2="2.168"
              y1="13.731"
              y2="13.731"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenUBSN.displayName = 'UBSN'
