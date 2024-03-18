import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconKag = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m12.857 10.286-2.571 2.571 3.48 5.271a1.84 1.84 0 0 0 1.491.729h4.029a8.2 8.2 0 0 1-1.715-1.714zM6 5.57h3.857v7.453L6 16.714zm7.714 0h3.429L13.714 9z"
      />
    </BaseIcon>
  ),
)

IconKag.displayName = 'Kag'

export default IconKag
