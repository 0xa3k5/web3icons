import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTOP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 6.429a1.714 1.714 0 1 0 0 3.428h.857a1.714 1.714 0 0 0 0-3.428zm6.068 0H18a1.715 1.715 0 0 1 0 3.428h-3.692a.594.594 0 0 0-.594.594v7.973a1.719 1.719 0 1 1-3.438 0c.004-2.717.01-7.931.01-10.315 0-.658.345-1.68 1.782-1.68"
          />
        </>
      ) : (
        <>
          <path
            fill="#F8CF03"
            d="M6 6.429a1.714 1.714 0 1 0 0 3.428h.858a1.714 1.714 0 1 0 0-3.428zm6.069 0H18a1.714 1.714 0 0 1 0 3.428h-3.692a.594.594 0 0 0-.594.594v7.973a1.72 1.72 0 0 1-3.438 0c.004-2.717.01-7.931.01-10.315 0-.658.345-1.68 1.783-1.68"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTOP.displayName = 'TOP'
