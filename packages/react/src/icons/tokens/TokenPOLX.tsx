import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPOLX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.6 12-1.314 5.572 4.01-2.64h8.418a3 3 0 0 0 3-2.932zm.303-1.286h13.811v-.428a2.57 2.57 0 0 0-2.571-2.572H6.623v.05l-.012-.05z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m5.608 12-1.322 5.572L8.216 15h8.498a3 3 0 0 0 3-3z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#86E7F7"
            d="m5.6 12-1.314 5.572 4.01-2.64h8.419A3 3 0 0 0 19.714 12zm.304-1.286h13.81v-.428a2.57 2.57 0 0 0-2.57-2.572H6.623v.05l-.012-.05z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#457CD6"
            d="m5.609 12-1.323 5.572L8.217 15h8.498a3 3 0 0 0 2.999-3z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenPOLX.displayName = 'POLX'
