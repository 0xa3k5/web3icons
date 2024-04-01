import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconBMC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M12 5.143a6.857 6.857 0 1 1 0 13.714 6.857 6.857 0 0 1 0-13.714m-.39 12.428c3.03 0 5.533-2.541 5.533-5.571S14.64 6.429 11.61 6.429A5.666 5.666 0 0 0 6 12c0 3.03 2.58 5.571 5.61 5.571"
      />
    </BaseIcon>
  ),
)

IconBMC.displayName = 'BMC'
