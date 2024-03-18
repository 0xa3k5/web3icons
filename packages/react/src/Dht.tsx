import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconDht = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m13.286 4.067-2.572 1.024v11.872l2.572-1.029V4.063zM8.57 11.31 6 12.347v6.51l2.571-1.033zM18 9.587l-2.571-1.016v7.843L18 17.451z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00A0D0"
            d="m13.286 4.067-2.572 1.024v11.872l2.572-1.029V4.063zM8.57 11.31 6 12.347v6.51l2.571-1.033zM18 9.587l-2.571-1.016v7.843L18 17.451z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDht.displayName = 'Dht'

export default IconDht
