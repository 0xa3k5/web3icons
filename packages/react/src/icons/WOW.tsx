import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWOW = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#F3BA2F"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path
        fill="#000"
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 .857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#000"
        d="M10.285 10.715c.474 0 .858-.48.858-1.072s-.384-1.071-.858-1.071c-.473 0-.857.48-.857 1.071 0 .592.384 1.071.857 1.071m3.429.001c.473 0 .857-.48.857-1.072s-.384-1.071-.857-1.071-.857.48-.857 1.071c0 .592.384 1.071.857 1.071M12 16.715c1.183 0 2.143-1.152 2.143-2.572s-.96-2.571-2.143-2.571c-1.184 0-2.143 1.15-2.143 2.571 0 1.42.96 2.572 2.143 2.572"
      />
    </BaseIcon>
  ),
)

IconWOW.displayName = 'WOW'
