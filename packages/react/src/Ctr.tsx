import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCTR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.806 12a4.35 4.35 0 0 1-4.033 5.914 4.336 4.336 0 0 1-4.329-4.341 4.333 4.333 0 0 1 4.993-4.294l1.132-3.403a6.844 6.844 0 0 0-8.855 6.553c0 3.788 3.06 6.857 6.832 6.857A6.844 6.844 0 0 0 18.36 12z"
          />
          <path
            fill="currentColor"
            d="M16.929 11.143a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CTR__a)"
            d="M15.805 12a4.35 4.35 0 0 1-4.033 5.914 4.336 4.336 0 0 1-4.328-4.341 4.333 4.333 0 0 1 4.993-4.294l1.131-3.403a6.845 6.845 0 0 0-8.854 6.553c0 3.788 3.06 6.857 6.831 6.857A6.844 6.844 0 0 0 18.36 12z"
          />
          <path
            fill="url(#CTR__b)"
            d="M16.928 11.143a2.357 2.357 0 1 0 0-4.714 2.357 2.357 0 0 0 0 4.714"
          />
          <defs>
            <linearGradient
              id="CTR__a"
              x1="17.345"
              x2="7.637"
              y1="9.227"
              y2="17.576"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6C7AF1" />
              <stop offset=".35" stopColor="#8958EB" />
              <stop offset="1" stopColor="#C746A6" />
            </linearGradient>
            <linearGradient
              id="CTR__b"
              x1="16.928"
              x2="16.928"
              y1="6.429"
              y2="11.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#32C5FF" />
              <stop offset="1" stopColor="#904EE8" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCTR.displayName = 'CTR'
