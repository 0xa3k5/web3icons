import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNOIA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 12s2.143-3.53 2.143-4.714a2.143 2.143 0 0 0-4.286 0C9.857 8.469 12 12 12 12m0 0s-3.53 2.143-4.714 2.143a2.143 2.143 0 0 1 0-4.286C8.469 9.857 12 12 12 12m0 0s3.531-2.143 4.715-2.143a2.143 2.143 0 1 1 0 4.286C15.53 14.143 12 12 12 12m0 0s2.143 3.531 2.143 4.715a2.143 2.143 0 0 1-4.286 0C9.857 15.53 12 12 12 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M12 12s2.143-3.53 2.143-4.714a2.143 2.143 0 0 0-4.286 0C9.857 8.469 12 12 12 12m0 0s-3.531 2.143-4.715 2.143a2.143 2.143 0 0 1 0-4.286C8.47 9.857 12 12 12 12m0 0s3.53-2.143 4.714-2.143a2.143 2.143 0 1 1 0 4.286C15.531 14.143 12 12 12 12m0 0s2.143 3.531 2.143 4.715a2.143 2.143 0 0 1-4.286 0C9.857 15.53 12 12 12 12"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNOIA.displayName = 'NOIA'
