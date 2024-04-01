import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconUTK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.753 12.404 19 9.035 17.95 7l-5.72 2.334a.6.6 0 0 1-.458 0L6.05 7.002 5 9.036l6.247 3.367L5 15.77l1.05 2.037 5.72-2.334c.148-.06.31-.06.458 0l5.72 2.334 1.05-2.037-6.246-3.367z"
          />
        </>
      ) : (
        <>
          <path
            fill="#7C4DFF"
            d="M12.753 12.404 19 9.035 17.95 7l-5.72 2.334a.6.6 0 0 1-.458 0L6.05 7.002 5 9.036l6.247 3.367L5 15.77l1.05 2.037 5.72-2.334c.148-.06.31-.06.458 0l5.72 2.334 1.05-2.037-6.246-3.367z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconUTK.displayName = 'UTK'
