import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconODIN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.513 17.164a6.857 6.857 0 0 1-9.677-9.677l2.593 2.593v4.491h4.491zm.651-.651a6.857 6.857 0 0 0-9.677-9.677l2.593 2.593h4.491v4.491z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0C0C0C"
            d="M16.513 17.164a6.857 6.857 0 0 1-9.677-9.677l2.593 2.593v4.491h4.491zm.651-.651a6.857 6.857 0 0 0-9.677-9.677l2.593 2.593h4.491v4.491z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconODIN.displayName = 'ODIN'
