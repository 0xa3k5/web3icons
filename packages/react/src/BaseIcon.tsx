import { forwardRef } from 'react'
import { BaseIconProps } from './types'

/**
 * renders an SVG with children or an image/fallback content
 *
 * @param {BaseIconProps} props
 * @param {React.ForwardedRef<SVGSVGElement | HTMLImageElement>} ref
 * @returns {(JSX.Element | null)} The JSX element for the BaseIcon component.
 */
export const BaseIcon = forwardRef<
  SVGSVGElement | HTMLImageElement,
  BaseIconProps
>(({ size = 24, children, fallback, ...props }, ref) => {
  if (!children && fallback) {
    if (typeof fallback === 'string') {
      return (
        <img
          ref={ref as React.Ref<HTMLImageElement>}
          src={fallback}
          width={size}
          height={size}
        />
      )
    }
    return <>{fallback}</>
  }

  return (
    <svg
      ref={ref as React.Ref<SVGSVGElement>}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  )
})

BaseIcon.displayName = 'BaseIcon'
