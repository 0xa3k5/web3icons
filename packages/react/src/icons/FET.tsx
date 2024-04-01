import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconFET = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 5.143h1.714v1.714H5.143zm4.286 0h1.714v1.714H9.43zm0 4.286h1.714v1.714H9.43zm4.285-4.286h1.715v1.714h-1.715zM18 5.57h.857v.858H18zm0 4.286h.857v.857H18zm-3.857 0H15v.857h-.857zm0 4.286H15V15h-.857zm-4.286 0h.857V15h-.857zM5.572 18h.857v.857h-.857zm4.285 0h.857v.857h-.857zm4.286 0H15v.857h-.857zM18 18h.857v.857H18zm0-3.857h.857V15H18zM5.143 9.429h1.714v1.714H5.143zm0 4.285h1.714v1.714H5.143z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#FET__a)"
            d="M5.143 5.143h1.714v1.714H5.143zm4.285 0h1.715v1.714H9.428zm0 4.286h1.715v1.714H9.428zm4.286-4.286h1.714v1.714h-1.714zM18 5.57h.857v.858H18zm0 4.286h.857v.857H18zm-3.857 0H15v.857h-.857zm0 4.286H15V15h-.857zm-4.286 0h.857V15h-.857zM5.57 18h.857v.857H5.57zm4.286 0h.857v.857h-.857zm4.286 0H15v.857h-.857zM18 18h.857v.857H18zm0-3.857h.857V15H18zM5.143 9.429h1.714v1.714H5.143zm0 4.285h1.714v1.714H5.143z"
          />
          <defs>
            <linearGradient
              id="FET__a"
              x1="7.694"
              x2="21.832"
              y1="7.521"
              y2="23.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconFET.displayName = 'FET'
