import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconUQC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.571 14.143V6l2.143 4.286v8.427c-.643.144-2.143.144-2.143.144zl-1.285 2.571h-2.143l-1.286-2.571v4.714s-1.318.022-2.143-.144v-8.427L9.857 6v8.143zm-6.857 4.57c-.892-.208-2.143-1.09-2.143-1.986V6l2.143 4.286zm9 0c.892-.208 2.143-1.09 2.143-1.986V6l-2.143 4.286z"
          />
          <path
            fill="currentColor"
            d="M7.714 10.286 5.571 6h4.286zm9 0L18.857 6h-4.286zm-2.143 8.571H9.857l1.286-2.143h2.143z"
          />
          <path
            fill="currentColor"
            d="m11.143 16.714-1.286 2.143v-4.714zm3.428 2.143-1.285-2.143 1.285-2.571z"
          />
        </>
      ) : (
        <>
          <path
            fill="#E85C50"
            d="M14.571 14.143V6l2.143 4.286v8.427c-.643.144-2.143.144-2.143.144zl-1.285 2.571h-2.143l-1.286-2.571v4.714s-1.318.022-2.143-.144v-8.427L9.857 6v8.143z"
          />
          <path
            fill="#CF3339"
            d="M7.714 18.713c-.892-.208-2.143-1.09-2.143-1.986V6l2.143 4.286zm9 0c.892-.208 2.143-1.09 2.143-1.986V6l-2.143 4.286z"
          />
          <path
            fill="#E33936"
            d="M7.714 10.286 5.571 6h4.286zm9 0L18.857 6h-4.286z"
          />
          <path fill="#CF3339" d="M14.571 18.857H9.857l1.286-2.143h2.143z" />
          <path
            fill="#E33937"
            d="m11.143 16.714-1.286 2.143v-4.714zm3.428 2.143-1.285-2.143 1.285-2.571z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconUQC.displayName = 'UQC'
