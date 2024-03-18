import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconMtd = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 15h9V6h3v12H6zm0-9h3v4.714H6zm4.286 0h3v4.714h-3z"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF1826"
            d="M6 15h9V6h3v12H6zm0-9h3v4.714H6zm4.286 0h3v4.714h-3z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMtd.displayName = 'Mtd'

export default IconMtd
