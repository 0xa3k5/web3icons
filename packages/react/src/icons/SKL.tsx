import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSKL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="currentColor" d="M6 6h1.714v12H6z" />
      <path
        fill="currentColor"
        d="M16.714 5.571v1.715H6V5.57zm.429 11.143v1.714H6v-1.714zm-.429-8.571c1.715 0 2.786 1.285 2.786 2.143H18c0-.215-.484-.858-1.286-.858-.964 0-1.285.429-1.285.858 0 .428.214.642 1.285.857.99.197 3 .643 3 2.357 0 1.371-1.5 2.357-3 2.357-1.2 0-3-.643-3-2.571H15c0 .642.857 1.285 1.714 1.285.515 0 1.5-.214 1.5-1.071s-.985-.986-1.5-1.072c-1.285-.214-2.785-.642-2.785-2.142 0-1.072 1.071-2.143 2.785-2.143"
      />
    </BaseIcon>
  ),
)

IconSKL.displayName = 'SKL'
