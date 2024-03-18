import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCuminu = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.572 12-3.429 2.143V9.857zm.994-1.286 2.648-1.963 2.65 1.963L18 8.464l-5.786-4.178L6.43 8.464zm0 2.572 2.648 1.963 2.65-1.963L18 15.536l-5.786 4.178-5.785-4.178z"
          />
        </>
      ) : (
        <>
          <path fill="#FFD9E6" d="m8.571 12-3.428 2.143V9.857z" />
          <path
            fill="#FF1381"
            d="m9.565 10.714 2.649-1.963 2.649 1.963L18 8.464l-5.786-4.178-5.786 4.178zm0 2.572 2.649 1.963 2.649-1.963L18 15.536l-5.786 4.178-5.786-4.178z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCuminu.displayName = 'Cuminu'

export default IconCuminu
