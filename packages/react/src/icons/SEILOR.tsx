import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSEILOR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M15.429 8.572c0-1.869-1.56-3.429-3.429-3.429s-3.428 1.56-3.428 3.429V5.143c-1.869 0-3.429 1.56-3.429 3.429h3.429c-1.869 0-3.429 1.56-3.429 3.428 0 1.869 1.56 3.429 3.429 3.429H5.143c0 1.868 1.56 3.428 3.429 3.428V15.43c0 1.868 1.56 3.428 3.428 3.428 1.869 0 3.429-1.56 3.429-3.428v3.428c1.868 0 3.428-1.56 3.428-3.428H15.43c1.868 0 3.428-1.56 3.428-3.429s-1.56-3.428-3.428-3.428m0 3.428v3.429H12A3.43 3.43 0 0 0 15.43 12m-6.857 0A3.43 3.43 0 0 1 12 8.572H8.572zm0 0A3.43 3.43 0 0 0 12 15.43H8.572zm6.857 0V5.143c1.868 0 3.428 1.56 3.428 3.429H12A3.43 3.43 0 0 1 15.43 12"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconSEILOR.displayName = 'SEILOR'
