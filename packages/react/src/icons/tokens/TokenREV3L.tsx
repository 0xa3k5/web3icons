import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenREV3L = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m15 5.571-1.286 2.143H9.142c-.665 0-1.856.506-1.856 2.143S8.546 11.901 9.214 12h2.143l-3.214 6.428H5.357l2.358-4.714c-.858-.291-2.572-1.05-2.572-3.857S7.715 5.571 9 5.571zM9 18.428l1.072-2.142h4.787c.664 0 1.856-.506 1.856-2.143s-1.26-2.045-1.93-2.143H12.43l3.428-6.429h2.786l-2.357 4.672c.857.3 2.571 1.093 2.571 3.9S16.715 18.428 15 18.428z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#REV3L__a)"
            d="m15 5.571-1.286 2.143H9.141c-.664 0-1.856.506-1.856 2.143S8.545 11.901 9.214 12h2.143l-3.214 6.428H5.357l2.357-4.714c-.857-.291-2.571-1.05-2.571-3.857S7.714 5.571 9 5.571zM9 18.428l1.071-2.142h4.787c.665 0 1.856-.506 1.856-2.143s-1.26-2.045-1.929-2.143h-2.357l3.429-6.429h2.786l-2.358 4.672c.858.3 2.572 1.093 2.572 3.9S16.714 18.428 15 18.428z"
          />
          <defs>
            <linearGradient
              id="REV3L__a"
              x1="9.183"
              x2="14.581"
              y1="6.26"
              y2="18.128"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#242A3F" />
              <stop offset=".38" stopColor="#321B65" />
              <stop offset=".73" stopColor="#622065" />
              <stop offset="1" stopColor="#C56058" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenREV3L.displayName = 'REV3L'
