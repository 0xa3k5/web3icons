import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenCKP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.854 4.714 18 8.28l-2.803 3.673 2.661 3.849-6.004 3.484-6.283-3.643V8.357zm.574 12c1.119 0 2.148-.39 2.958-1.041l-.793-1.286a3.35 3.35 0 0 1-1.95.613c-1.775 0-3.215-1.341-3.215-3 0-1.658 1.44-3 3.215-3 .685 0 1.32.201 1.843.54l.771-1.311a4.714 4.714 0 1 0-2.829 8.485"
          />
        </>
      ) : (
        <>
          <path
            fill="#1FA4FF"
            d="M11.854 4.714 18 8.28l-2.803 3.673 2.661 3.849-6.004 3.484-6.283-3.643V8.357zm.574 12c1.119 0 2.148-.39 2.958-1.041l-.793-1.286a3.35 3.35 0 0 1-1.95.613c-1.775 0-3.215-1.341-3.215-3 0-1.658 1.44-3 3.215-3 .685 0 1.32.201 1.843.54l.771-1.311a4.714 4.714 0 1 0-2.829 8.485"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenCKP.displayName = 'CKP'
