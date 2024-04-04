import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenACH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.143 7.637 12 3.857l-2.143 3.78v5.066a3.82 3.82 0 0 1 2.7-1.131c.562 0 1.102.128 1.586.355zm1.286 2.272v6.805h3.857zm-1.286 6.805H10.07a2.786 2.786 0 0 1 4.071-3.42zm-5.571 0H4.714L8.572 9.91z"
          />
        </>
      ) : (
        <>
          <path
            fill="#020041"
            d="M14.142 7.637 12 3.857l-2.143 3.78v5.066a3.82 3.82 0 0 1 2.7-1.131c.561 0 1.101.128 1.585.355zm1.286 2.272v6.805h3.857zm-1.286 6.805h-4.071a2.786 2.786 0 0 1 4.071-3.42zm-5.571 0H4.714L8.57 9.91z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenACH.displayName = 'ACH'
