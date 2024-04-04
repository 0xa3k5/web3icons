import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRAE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.774 12.429 3.857 9.956 10.714 6zm8.452 0 3.917-2.473L13.286 6zM9 12.857 12 6l3 6.857-3 6.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#383F51"
            d="M7.775 12.429 3.857 9.956 10.715 6zm8.451 0 3.917-2.473L13.286 6zM9 12.857 12 6l3 6.857-3 6.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenRAE.displayName = 'RAE'
