import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 1 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M16.286 8.572v6.857h-.429V9.857l-1.714 2.102v3.47h-3.456l3.027-3.706v-1.8l-2.697 3.34-2.874-3.34v5.506h-.429V8.572l3.305 3.89 3.124-3.89v2.638zm-2.572 3.91L11.65 15h2.065z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.429a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 1 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#000"
            d="M16.285 8.572v6.857h-.428V9.857l-1.715 2.102v3.47h-3.456l3.028-3.706v-1.8l-2.698 3.34-2.874-3.34v5.506h-.428V8.572l3.304 3.89 3.124-3.89v2.638zm-2.571 3.91L11.648 15h2.066z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMM.displayName = 'MM'
