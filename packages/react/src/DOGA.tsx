import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDOGA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.357 8.571H6.43v9.858h4.928a4.929 4.929 0 0 0 0-9.858m0 1.286H7.714v7.286h3.643a3.643 3.643 0 0 0 0-7.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m16.063 14.97-1.611.459a4 4 0 0 1-.236.33l.844.99a4.9 4.9 0 0 0 1.003-1.779"
          />
          <path
            fill="currentColor"
            d="M13.929 6H9v9.857h4.929a4.928 4.928 0 1 0 0-9.857m0 1.286h-3.643v7.285h3.643a3.643 3.643 0 0 0 0-7.285"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M10.286 11.143 9 9.857h1.286z" />
        </>
      ) : (
        <>
          <path
            fill="url(#DOGA__a)"
            d="M11.357 8.571H6.43v9.858h4.928a4.929 4.929 0 0 0 0-9.858m0 1.286H7.714v7.286h3.643a3.643 3.643 0 0 0 0-7.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#DOGA__b)"
            d="m16.063 14.97-1.611.459a4 4 0 0 1-.236.33l.844.99a4.9 4.9 0 0 0 1.003-1.779"
          />
          <path
            fill="url(#DOGA__c)"
            d="M13.929 6H9v9.857h4.929a4.928 4.928 0 1 0 0-9.857m0 1.286h-3.643v7.285h3.643a3.643 3.643 0 0 0 0-7.285"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="url(#DOGA__d)" d="M10.286 11.143 9 9.857h1.286z" />
          <defs>
            <linearGradient
              id="DOGA__a"
              x1="8.315"
              x2="16.749"
              y1="8.219"
              y2="16.098"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#422C81" />
              <stop offset="1" stopColor="#7B368A" />
            </linearGradient>
            <linearGradient
              id="DOGA__b"
              x1="8.315"
              x2="16.749"
              y1="8.219"
              y2="16.098"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#422C81" />
              <stop offset="1" stopColor="#7B368A" />
            </linearGradient>
            <linearGradient
              id="DOGA__c"
              x1="8.315"
              x2="16.749"
              y1="8.219"
              y2="16.098"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#422C81" />
              <stop offset="1" stopColor="#7B368A" />
            </linearGradient>
            <linearGradient
              id="DOGA__d"
              x1="8.315"
              x2="16.749"
              y1="8.219"
              y2="16.098"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#422C81" />
              <stop offset="1" stopColor="#7B368A" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDOGA.displayName = 'DOGA'
