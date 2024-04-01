import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconVSTA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M4.714 12a7.286 7.286 0 1 1 14.572 0 7.286 7.286 0 0 1-14.572 0M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M12.03 18 6.857 8.572H12l2.572 4.714z" />
      <path
        fill="currentColor"
        d="M17.143 8.572H12l2.572 4.714z"
        fillOpacity=".6"
      />
    </BaseIcon>
  ),
)

IconVSTA.displayName = 'VSTA'
