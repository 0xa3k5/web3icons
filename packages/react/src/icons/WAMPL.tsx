import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconWAMPL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 17.143h-4.714v-.429c1.072-.192.964-.771.699-1.491L11.57 7.072c-1.071 2.318-3.428 7.61-3.428 8.57s1.285 1.072 1.714 1.072v.429H5.571v-.429c.857 0 1.607-1.011 1.877-1.491L12 4.714c.986 2.242 3.107 7.629 3.75 9.549s2.057 2.451 2.678 2.451z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M18.428 17.143h-4.714v-.429c1.072-.192.964-.771.699-1.491L11.57 7.072c-1.071 2.318-3.428 7.61-3.428 8.57s1.285 1.072 1.714 1.072v.429H5.571v-.429c.857 0 1.607-1.011 1.877-1.491L12 4.714c.986 2.242 3.107 7.629 3.75 9.549s2.057 2.451 2.678 2.451z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWAMPL.displayName = 'WAMPL'
