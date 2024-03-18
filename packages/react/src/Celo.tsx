import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCelo = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 6h12v4.286h-2.074a4.286 4.286 0 1 0 0 3.428H18V18H6z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FCFE52"
            d="M6 6h12v4.286h-2.074a4.286 4.286 0 1 0 0 3.428H18V18H6z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCelo.displayName = 'Celo'

export default IconCelo
