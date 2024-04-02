import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenUNO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 7.286H5.143v6a3.43 3.43 0 0 0 3.429 3.428H9a3.43 3.43 0 0 0 3.429-3.428v-6h-1.715v5.785a1.929 1.929 0 0 1-3.857 0zm6.429 2.571H15v6.429h-1.714z"
          />
          <path
            fill="currentColor"
            d="M16.928 9.643A2.357 2.357 0 0 0 14.571 12v4.286H15v-3.857a1.286 1.286 0 1 1 2.571 0v3.857h1.715V12a2.357 2.357 0 0 0-2.358-2.357"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#UNO__a)"
            d="M6.857 7.286H5.143v6a3.43 3.43 0 0 0 3.428 3.428H9a3.43 3.43 0 0 0 3.428-3.428v-6h-1.714v5.785a1.929 1.929 0 0 1-3.857 0zm6.428 2.571H15v6.429h-1.715z"
          />
          <path
            fill="url(#UNO__b)"
            d="M16.928 9.643A2.357 2.357 0 0 0 14.571 12v4.286H15v-3.857a1.286 1.286 0 1 1 2.571 0v3.857h1.715V12a2.357 2.357 0 0 0-2.358-2.357"
          />
          <defs>
            <linearGradient
              id="UNO__a"
              x1="10.071"
              x2="10.071"
              y1="7.286"
              y2="16.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5079DD" />
              <stop offset="1" stopColor="#3E3BAC" />
            </linearGradient>
            <linearGradient
              id="UNO__b"
              x1="16.928"
              x2="16.928"
              y1="9.643"
              y2="16.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5079DD" />
              <stop offset="1" stopColor="#3E3BAC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenUNO.displayName = 'UNO'
