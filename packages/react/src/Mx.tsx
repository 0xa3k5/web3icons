import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.658 7.414a1.911 1.911 0 0 1 3.348 0l5.258 9.3H5.85c-1.53 0-2.486-1.693-1.723-3.047z"
          />
          <path
            fill="currentColor"
            d="M16.341 7.414a1.91 1.91 0 0 0-3.347 0l-3.728 6.6c-.682 1.2.167 2.7 1.521 2.7h7.363c1.53 0 2.486-1.693 1.723-3.047z"
          />
          <path
            fill="currentColor"
            d="M10.787 16.714h5.477L12 9.171l-2.74 4.843c-.677 1.2.172 2.7 1.526 2.7"
          />
        </>
      ) : (
        <>
          <path
            fill="#1977F3"
            d="M7.659 7.414a1.911 1.911 0 0 1 3.347 0l5.259 9.3H5.85c-1.53 0-2.485-1.693-1.723-3.047z"
          />
          <path
            fill="#002F81"
            d="M16.342 7.414a1.912 1.912 0 0 0-3.347 0l-3.729 6.6c-.681 1.2.167 2.7 1.521 2.7h7.363c1.53 0 2.486-1.693 1.723-3.047z"
          />
          <path
            fill="url(#MX__a)"
            d="M10.788 16.714h5.477L12 9.171l-2.738 4.843c-.677 1.2.171 2.7 1.525 2.7"
          />
          <defs>
            <linearGradient
              id="MX__a"
              x1="9.313"
              x2="17.597"
              y1="15.171"
              y2="15.171"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".12" stopColor="#1C6AD9" />
              <stop offset=".76" stopColor="#1C6AD9" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMX.displayName = 'MX'
