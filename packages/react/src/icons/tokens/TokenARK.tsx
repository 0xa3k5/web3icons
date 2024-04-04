import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenARK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.966 9.741 4.5 17.711 12 5.356l7.5 12.429zm1.077 3.116h-2.331l1.2-1.285 1.138 1.285zM8.543 15l1.33-1.286h4.036L15.273 15z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F70000"
            d="M11.966 9.741 4.5 17.711 12 5.356l7.5 12.429zm-1.254 3.116 1.2-1.285 1.138 1.285zM8.543 15l1.33-1.286h4.036L15.273 15z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenARK.displayName = 'ARK'
