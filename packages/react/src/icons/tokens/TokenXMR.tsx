import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenXMR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 5.143a6.85 6.85 0 0 1 6.509 9h-2.223V8.41l-4.292 4.472-4.28-4.466v5.727H5.492a6.8 6.8 0 0 1-.348-2.136A6.857 6.857 0 0 1 12 5.143m.02 9.769L15 11.93v3.499h2.856c-1.268 2.092-3.377 3.43-5.856 3.428-2.471 0-4.645-1.456-5.856-3.428H9V11.93z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F60"
            d="M12 5.143a6.85 6.85 0 0 1 6.508 9h-2.223V8.41l-4.292 4.472-4.279-4.466v5.727H5.491a6.8 6.8 0 0 1-.348-2.136A6.857 6.857 0 0 1 12 5.143m.019 9.769 2.98-2.982v3.499h2.857c-1.268 2.092-3.377 3.43-5.856 3.428-2.472 0-4.646-1.456-5.856-3.428H9V11.93z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenXMR.displayName = 'XMR'
