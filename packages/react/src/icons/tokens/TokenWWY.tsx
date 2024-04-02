import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenWWY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M2.271 10.706a.53.53 0 0 1 0-.703.424.424 0 0 1 .643 0l3.386 3.72a.545.545 0 0 1 0 .703.424.424 0 0 1-.643 0zm9.172-.703a.545.545 0 0 1 0 .703l-3.386 3.72a.424.424 0 0 1-.643 0 .53.53 0 0 1 0-.703l3.386-3.72a.425.425 0 0 1 .643 0m1.114.703a.53.53 0 0 1 0-.703.424.424 0 0 1 .643 0l3.386 3.72a.544.544 0 0 1 0 .703.423.423 0 0 1-.643 0zm9.172 0a.545.545 0 0 0 0-.703.425.425 0 0 0-.643 0l-3.386 3.72a.53.53 0 0 0 0 .703.425.425 0 0 0 .643 0z"
      />
    </BaseIcon>
  ),
)

TokenWWY.displayName = 'WWY'
