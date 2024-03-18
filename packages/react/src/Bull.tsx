import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBull = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.571 6h10.286v3.429H8.571zm0 4.714h6.858v3.429H8.57zm0 4.715H12v3.428H8.57zm-4.285-4.715h3.428v3.429H4.286z"
          />
        </>
      ) : (
        <>
          <path fill="#02A6C2" d="M8.571 6h10.286v3.429H8.571z" />
          <path fill="#5FCADE" d="M8.571 10.714h6.857v3.429H8.571z" />
          <path fill="#ABEBF4" d="M8.571 15.429H12v3.428H8.57z" />
          <path fill="#5FCADE" d="M4.286 10.714h3.429v3.429H4.286z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconBull.displayName = 'Bull'

export default IconBull
