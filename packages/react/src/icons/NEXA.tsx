import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconNEXA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="#FFFD9D" d="m12 15.857 7.285-7.714-7.285 12z" />
      <path fill="#B6761C" d="M12 15.857 4.714 8.143l7.286 12z" />
      <path fill="#FFE144" d="M19.285 8.143H4.714L12 15.857z" />
      <path fill="#B6761C" d="M15 9.857H9l3 3z" />
      <path fill="#FFFD9D" d="M12 9.249 15.428 6 12 11.571z" />
      <path fill="#B6761C" d="M12 9.249 8.57 6 12 11.571z" />
      <path fill="#FFE144" d="M15.428 6H8.571L12 9.249z" />
    </BaseIcon>
  ),
)

IconNEXA.displayName = 'NEXA'
