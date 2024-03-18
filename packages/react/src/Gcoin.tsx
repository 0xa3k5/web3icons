import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGcoin = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M17.143 8.97v4.573l-4.286 4.209v1.555l-.857.836-.879-.857V17.73l-4.264-4.187V6.857h4.286V5.143h1.714v1.714h3.454L14.25 9H9v3.707l2.143 2.186v-4.179h1.714v4.175L15 12.703V10.99z"
      />
    </BaseIcon>
  ),
)

IconGcoin.displayName = 'Gcoin'

export default IconGcoin
