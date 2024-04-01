import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSWAP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.714 9.944v.984l3-2.142-3-1.93v.877a4.715 4.715 0 0 0 .429 9.41c1.08 0 2.571-.38 3.429-1.286 1.071-1.237 2.348-4.352 2.348-4.352l-3.826 2.48a2.465 2.465 0 1 1-2.38-4.041"
          />
          <path
            fill="currentColor"
            d="M16.286 14.484V13.5l-3 2.143 3 1.928v-.876a4.715 4.715 0 0 0-.429-9.41c-1.08 0-2.571.38-3.428 1.286-1.072 1.237-2.349 4.352-2.349 4.352l3.826-2.48a2.464 2.464 0 1 1 2.38 4.041"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SWAP__a)"
            d="M7.714 9.944v.984l3-2.142-3-1.93v.877a4.715 4.715 0 0 0 .429 9.41c1.08 0 2.571-.38 3.429-1.286 1.071-1.237 2.348-4.352 2.348-4.352l-3.826 2.48a2.465 2.465 0 1 1-2.38-4.041"
          />
          <path
            fill="url(#SWAP__b)"
            d="M16.286 14.484V13.5l-3 2.143 3 1.928v-.876a4.715 4.715 0 0 0-.429-9.41c-1.08 0-2.571.38-3.428 1.286-1.072 1.237-2.349 4.352-2.349 4.352l3.826-2.48a2.464 2.464 0 1 1 2.38 4.041"
          />
          <defs>
            <linearGradient
              id="SWAP__a"
              x1="5.53"
              x2="10.48"
              y1="8.643"
              y2="19.737"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0076EF" />
              <stop offset=".13" stopColor="#007FF6" />
              <stop offset=".258" stopColor="#0084F6" />
              <stop offset=".376" stopColor="#008BF9" />
              <stop offset=".492" stopColor="#009DF9" />
              <stop offset=".612" stopColor="#00AEF9" />
              <stop offset=".731" stopColor="#00B9FA" />
              <stop offset=".829" stopColor="#00C5FB" />
              <stop offset="1" stopColor="#00CCFC" />
            </linearGradient>
            <linearGradient
              id="SWAP__b"
              x1="19.492"
              x2="13.492"
              y1="15.857"
              y2="7.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0076EF" />
              <stop offset=".13" stopColor="#007FF6" />
              <stop offset=".258" stopColor="#0084F6" />
              <stop offset=".376" stopColor="#008BF9" />
              <stop offset=".492" stopColor="#009DF9" />
              <stop offset=".612" stopColor="#00AEF9" />
              <stop offset=".731" stopColor="#00B9FA" />
              <stop offset=".829" stopColor="#00C5FB" />
              <stop offset="1" stopColor="#00CCFC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSWAP.displayName = 'SWAP'
