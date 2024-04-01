import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVIA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M11.276 13.286h1.448L12 15zm-4.42-6.43 1.287 3H6.857v1.287H8.69l.37.857H6.857v1.286h2.751L12 18.856l2.391-5.57h2.752V12H14.94l.368-.857h1.835V9.857h-1.286l1.286-3h-1.715L13.286 12h-2.572L8.571 6.857z"
      />
    </BaseIcon>
  ),
)

IconVIA.displayName = 'VIA'
