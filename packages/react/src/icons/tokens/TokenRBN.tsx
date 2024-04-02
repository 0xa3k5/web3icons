import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenRBN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0-6.412-4.418l6.515-6.296 4.182 4.041-4.242 4.102-.613-.592 3.63-3.51-2.957-2.858-6.137 5.931a6.86 6.86 0 0 0 6.034 3.6"
          />
        </>
      ) : (
        <>
          <path
            fill="#E73558"
            d="M12 18.857a6.858 6.858 0 1 0-6.41-4.417l6.514-6.296 4.183 4.041-4.243 4.102-.613-.592 3.63-3.51-2.957-2.858-6.137 5.931a6.86 6.86 0 0 0 6.034 3.6"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenRBN.displayName = 'RBN'
