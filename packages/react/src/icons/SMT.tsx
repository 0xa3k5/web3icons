import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSMT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M12.056 5.143 6.532 9.39l-2.246 6.84 5.542-3.814 2.211 6.441 2.19-6.441 5.486 3.814-2.122-6.84zm-.395.99L6.977 9.75 5.34 14.846l4.346-3.026zm.75 0L17.1 9.75h-.004l1.637 5.096-4.346-3.026zm-.338.724-1.8 4.714h3.458zm0 10.286-1.8-4.715h3.458z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconSMT.displayName = 'SMT'
