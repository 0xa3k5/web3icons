import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconATRI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.429 5.572h1.285v2.571c0 3.428-.81 8.061-6.428 9v-1.714c1.285-.215 5.13-1.715 5.13-7.286zm1.714 0h1.714v11.571h-1.714zm3.428 0h-1.285v2.571c0 3.428.81 8.061 6.428 9v-1.714c-1.285-.215-5.13-1.715-5.13-7.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="#E01920"
            d="M9.429 5.572h1.286v2.571c0 3.428-.81 8.061-6.429 9v-1.714c1.286-.215 5.13-1.715 5.13-7.286zm1.714 0h1.715v11.571h-1.715zm3.429 0h-1.286v2.571c0 3.428.81 8.061 6.429 9v-1.714c-1.286-.215-5.13-1.715-5.13-7.286z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconATRI.displayName = 'ATRI'
