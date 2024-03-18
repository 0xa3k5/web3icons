import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCream = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.973 12.514 3.814 3.793a.724.724 0 0 1-.077 1.084 6.9 6.9 0 0 1-10.097-1.765A6.836 6.836 0 0 1 9.47 5.828a6.91 6.91 0 0 1 7.265.806.717.717 0 0 1 .047 1.063l-3.815 3.797a.72.72 0 0 0-.214.523q.002.15.06.287c.039.086.09.172.159.236z"
          />
        </>
      ) : (
        <>
          <path
            fill="#69E2DB"
            d="m12.973 12.514 3.815 3.793a.724.724 0 0 1-.078 1.084 6.9 6.9 0 0 1-10.097-1.765 6.836 6.836 0 0 1 2.859-9.798 6.91 6.91 0 0 1 7.264.806.717.717 0 0 1 .047 1.063l-3.814 3.797a.72.72 0 0 0-.214.523q0 .15.06.287a.7.7 0 0 0 .158.236z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCream.displayName = 'Cream'

export default IconCream
