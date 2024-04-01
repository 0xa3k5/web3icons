import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconHFT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M8.572 6.857H6.429v3H4.714v1.714H6.43v1.286H4.714v1.714H6.43v2.572h2.143V14.57h6.857v2.572h2.143V14.57h1.714v-1.714H17.57V11.57h1.715V9.857H17.57v-3h-2.14v3H8.572zm6.857 6V11.57H8.572v1.286z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconHFT.displayName = 'HFT'
