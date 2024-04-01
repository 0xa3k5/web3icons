import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDVI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M6.861 5.254a.15.15 0 0 1 .15-.111h3.892L18.78 9.72c.06.034.085.107.073.171h.004l-.009.013a.2.2 0 0 1-.034.052l-5.944 9.33H8.794L6.87 5.357a.15.15 0 0 1-.009-.086l-.004-.017zm2.263.193.116.844 1.718 1.012-.257-1.856zm1.5 11.04L9.291 6.673l1.723 1.011.943 6.729-1.329 2.074zm.064.463.257 1.877 1.338-2.1-.262-1.851-1.328 2.074zm1.586-2.468.257 1.847 3.986-6.275h-1.401zm2.85-4.732-.021-.013-3.815-2.241-.27-1.933 7.209 4.187zm-.291.18-2.627 4.093-.858-6.142z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconDVI.displayName = 'DVI'
