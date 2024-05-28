import { forwardRef } from 'react'
import { BaseIconProps } from './types'

export const BaseIcon = forwardRef<SVGSVGElement, BaseIconProps>(
  ({ size = 24, children, ...props }, ref) => {
    const svgSize = typeof size === 'number' ? `${size}px` : size
    return (
      <svg
        ref={ref}
        width={svgSize}
        height={svgSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {children}
      </svg>
    )
  },
)

BaseIcon.displayName = 'BaseIcon'
