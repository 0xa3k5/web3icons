import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenEL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.2 12.114-4.486-1.89v1.507l4.487 1.839 6.227-2.857V12.7l-6.227 2.834-4.487-1.89v1.434l4.487 1.857 6.227-2.8v1.856l-6.227 2.866-6.63-2.704V7.391L12 5.143l6.428 2.248V9.28z"
          />
        </>
      ) : (
        <>
          <path
            fill="#2C6190"
            d="m12.2 12.114-4.486-1.89v1.507l4.487 1.839 6.227-2.857V12.7l-6.227 2.834-4.487-1.89v1.434l4.487 1.857 6.227-2.8v1.856l-6.227 2.866-6.63-2.704V7.391L12 5.143l6.428 2.248V9.28z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenEL.displayName = 'EL'
