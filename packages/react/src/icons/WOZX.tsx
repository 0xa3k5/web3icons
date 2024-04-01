import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWOZX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m14.296 10.634 2.296-.91L12 6.99 7.714 9.724v4.553L12 16.554l4.592-2.277-2.45-.91-2.136 1.059-.006.003-2.14-1.213-.003-.001L12 12l-2.143-1.214.005-.003L12 9.57l.01.006zM12 4.714l6.428 3.643v7.286l-6.427 3.643-6.43-3.643V8.357l.008-.004z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconWOZX.displayName = 'WOZX'
