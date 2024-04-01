import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPSL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0m-.857 0A6.429 6.429 0 1 1 5.57 12a6.429 6.429 0 0 1 12.858 0m-9-3.857 1.193 1.286h2.071c.564 0 1.021.48 1.021 1.071s-.457 1.072-1.02 1.072h-1.551v4.284l1.286 1.287v-4.286h.193A2.367 2.367 0 0 0 15 10.5a2.37 2.37 0 0 0-2.378-2.357z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#1D1D1B"
            d="M19.285 12a7.286 7.286 0 1 1-14.571 0 7.286 7.286 0 0 1 14.571 0m-.857 0a6.429 6.429 0 1 1-12.857 0 6.429 6.429 0 0 1 12.857 0m-9-3.857 1.193 1.286h2.072c.564 0 1.02.48 1.02 1.071s-.456 1.072-1.02 1.072h-1.55v4.284l1.285 1.287v-4.286h.193A2.367 2.367 0 0 0 15 10.5a2.37 2.37 0 0 0-2.379-2.357z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPSL.displayName = 'PSL'
