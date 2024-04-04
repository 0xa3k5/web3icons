import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPPC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 5.143c8.99.343 12.451 5.867 10.706 10.804a5.3 5.3 0 0 1-2.118 2.91c.044-.198.096-.396.126-.601.654-3.848-.58-8.48-6.612-11.04 4.8 2.933 6.738 8.152 4.495 11.52-3.811.61-6.597-2.729-6.597-6.576z"
          />
        </>
      ) : (
        <>
          <path
            fill="#3CB054"
            d="M6.857 5.143c8.99.343 12.452 5.867 10.706 10.804a5.3 5.3 0 0 1-2.118 2.91c.045-.198.097-.396.127-.601.653-3.848-.58-8.48-6.612-11.04 4.799 2.933 6.738 8.152 4.494 11.52-3.81.61-6.597-2.729-6.597-6.576z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenPPC.displayName = 'PPC'
