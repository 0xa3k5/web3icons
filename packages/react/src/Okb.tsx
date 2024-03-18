import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconOkb = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M5.571 5.571h4.286v4.286H5.571zm8.572 4.286H9.857v4.286H5.571v4.285h4.286v-4.285h4.286v4.285h4.285v-4.285h-4.285zm0 0V5.571h4.285v4.286z"
      />
    </BaseIcon>
  ),
)

IconOkb.displayName = 'Okb'

export default IconOkb
