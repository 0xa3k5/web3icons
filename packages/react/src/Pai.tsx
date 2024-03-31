import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 8.143a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-4.286 3a4.286 4.286 0 1 1 8.572 0 4.286 4.286 0 0 1-8.572 0"
          />
          <path
            fill="currentColor"
            d="M8.357 10.5a.643.643 0 0 1 .643.643v7.928a.643.643 0 0 1-1.286 0v-7.928a.643.643 0 0 1 .643-.643m7.286 0a.643.643 0 0 1 .643.643v4.071a.642.642 0 1 1-1.286 0v-4.071a.643.643 0 0 1 .643-.643m0-4.5a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="#10C7CA"
            d="M12 8.143a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-4.286 3a4.286 4.286 0 1 1 8.571 0 4.286 4.286 0 0 1-8.571 0"
          />
          <path
            fill="#10C7CA"
            d="M8.357 10.5a.643.643 0 0 1 .643.643v7.928a.643.643 0 0 1-1.286 0v-7.928a.643.643 0 0 1 .643-.643m7.285 0a.643.643 0 0 1 .643.643v4.071a.642.642 0 1 1-1.285 0v-4.071a.643.643 0 0 1 .642-.643m0-4.5a1.071 1.071 0 1 0 0-2.143 1.071 1.071 0 0 0 0 2.143"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPAI.displayName = 'PAI'
