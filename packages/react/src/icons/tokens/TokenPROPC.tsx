import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPROPC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 6.429h7.929a4.071 4.071 0 1 1 0 8.143h-4.072v-4.286H6.857zm3.857 8.143v3.857H6.857v-3.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FEBE05"
            d="M6.857 6.429h7.929a4.071 4.071 0 1 1 0 8.143h-4.071v-4.286H6.857zm3.858 8.143v3.857H6.857v-3.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenPROPC.displayName = 'PROPC'
