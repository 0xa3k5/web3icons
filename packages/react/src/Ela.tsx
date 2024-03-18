import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconEla = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m8.589 6.428 3.423 1.977 3.491-1.977 3.354 1.977-6.845 4.024-6.869-4.024zm0 6 3.423 1.977 3.491-1.976 3.354 1.976-6.845 4.024-6.869-4.023z"
      />
    </BaseIcon>
  ),
)

IconEla.displayName = 'Ela'

export default IconEla
