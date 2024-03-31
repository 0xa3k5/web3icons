import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconDCB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.714 7.286c0-1.83 1.038-2.143 2.143-2.143v8.601c0 .96.043 1.8-.428 2.542.857 0 1.714.985 1.714 2.142h-6.214c-2.473 0-4.5-2.1-4.5-4.684C6.429 11.156 8.614 9 11.087 9c.917 0 1.92.364 2.627.857zm-2.627 9c1.372 0 2.627-1.115 2.627-2.542a2.653 2.653 0 0 0-2.601-2.601 2.57 2.57 0 0 0-2.541 2.571c0 1.432 1.148 2.572 2.515 2.572"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DCB__a)"
            d="M13.714 7.286c0-1.83 1.038-2.143 2.143-2.143v8.601c0 .96.043 1.8-.428 2.542.857 0 1.714.985 1.714 2.142h-6.214c-2.473 0-4.5-2.1-4.5-4.684C6.429 11.156 8.614 9 11.087 9c.917 0 1.92.364 2.627.857zm-2.627 9c1.372 0 2.627-1.115 2.627-2.542a2.653 2.653 0 0 0-2.601-2.601 2.57 2.57 0 0 0-2.541 2.571c0 1.432 1.148 2.572 2.515 2.572"
          />
          <defs>
            <linearGradient
              id="DCB__a"
              x1="7.768"
              x2="17.648"
              y1="15.819"
              y2="10.449"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C41859" />
              <stop offset="1" stopColor="#4D0E75" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDCB.displayName = 'DCB'
