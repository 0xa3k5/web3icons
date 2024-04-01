import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMBOX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 10.286 9 8.588l3-1.731 3 1.731zm-7.714 1.393 3.857-2.25v3.75l-3.857 2.25zm7.714 0 3.857-2.25v3.75L12 15.429z"
          />
          <path
            fill="currentColor"
            d="m19.714 11.679-3.857-2.25v3.75l3.857 2.25zm-7.714 0-3.857-2.25v3.75L12 15.429z"
          />
        </>
      ) : (
        <>
          <path fill="#FAB508" d="M12 10.286 9 8.588l3-1.731 3 1.731z" />
          <path
            fill="#B5C7FF"
            d="m4.286 11.679 3.857-2.25v3.75l-3.857 2.25zm7.714 0 3.858-2.25v3.75L12 15.429z"
          />
          <path
            fill="url(#MBOX__a)"
            d="m19.715 11.679-3.857-2.25v3.75l3.857 2.25zm-7.715 0-3.857-2.25v3.75L12 15.429z"
          />
          <defs>
            <linearGradient
              id="MBOX__a"
              x1="8.143"
              x2="19.714"
              y1="12.429"
              y2="12.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1B6CF5" />
              <stop offset="1" stopColor="#1B48F5" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMBOX.displayName = 'MBOX'
