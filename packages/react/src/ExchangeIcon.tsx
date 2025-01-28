import { forwardRef } from 'react'
import { ExchangeIconProps } from './types'
import { DynamicIcon } from './DynamicIcon'
import { findExchange } from './utils'

/**
 * @component @name ExchangeIcon
 *
 * @description A React component for rendering exchange icons dynamically based on the provided exchange ID or name.
 *
 * @param {ExchangeIconProps} props
 * @param {SVGSVGElement} ref
 *
 * @returns {JSX.Element} JSX Element for the ExchangeIcon component.
 */
export const ExchangeIcon = forwardRef<SVGSVGElement, ExchangeIconProps>(
  ({ id, name, size, className, variant = 'mono', color, fallback }, ref) => {
    let metadata
    if (name) {
      metadata = findExchange({ name })
    } else if (id) {
      metadata = findExchange({ id })
    }

    return (
      <DynamicIcon
        metadata={metadata}
        type="exchange"
        size={size}
        className={className}
        variant={variant}
        color={color}
        ref={ref}
        fallback={fallback}
      />
    )
  },
)

ExchangeIcon.displayName = 'ExchangeIcon'
