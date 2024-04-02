import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSTJUNO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-.472 0a6.814 6.814 0 1 1-13.628 0 6.814 6.814 0 0 1 13.628 0m-7.242 3.857v.857h.857v-.857h1.285V15H12.43v-3.214l1.5 1.5.643-.643-1.5-1.5H15v-.857h-1.928l1.5-1.5-.643-.643-1.5 1.5V7.714h-.857v1.929l-1.5-1.5-.643.643 1.5 1.5H9v.857h1.929l-1.5 1.5.643.643 1.5-1.5V15h-1.286v.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#E40570"
            d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-.471 0a6.814 6.814 0 1 1-13.629 0 6.814 6.814 0 0 1 13.629 0m-7.243 3.857v.857h.857v-.857h1.286V15h-1.286v-3.214l1.5 1.5.643-.643-1.5-1.5H15v-.857h-1.93l1.5-1.5-.643-.643-1.5 1.5V7.714h-.857v1.929l-1.5-1.5-.643.643 1.5 1.5H9v.857h1.928l-1.5 1.5.643.643 1.5-1.5V15h-1.286v.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSTJUNO.displayName = 'STJUNO'
