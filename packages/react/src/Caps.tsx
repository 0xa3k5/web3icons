import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCAPS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M14.344 18.429A6.852 6.852 0 0 0 12 5.143a6.853 6.853 0 0 0-2.344 13.285h.343a1.15 1.15 0 0 0 1.144-1.174v-3.968h-1.35c-.437 0-.793-.386-.793-.857 0-.472.356-.858.793-.858h4.414c.437 0 .793.386.793.857 0 .472-.356.858-.793.858h-1.35v3.968a1.196 1.196 0 0 0 1.2 1.174zM12 10.285a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429m-4.714 3a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714m10.286-.857a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.713 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconCAPS.displayName = 'CAPS'
