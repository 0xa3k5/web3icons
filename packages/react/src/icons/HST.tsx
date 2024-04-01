import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconHST = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.663 16.286C19.058 16.286 21 14.367 21 12s-1.942-4.286-4.337-4.286c-2.099 0-3.849 1.473-4.25 3.429h4.301a.857.857 0 0 1 0 1.714h-4.302c.402 1.957 2.152 3.429 4.25 3.429"
          />
          <path
            fill="currentColor"
            d="M4.714 7.714a.857.857 0 0 0-.857.857v6.858a.857.857 0 0 0 .857.857h6.857a.857.857 0 0 0 .857-.857V8.572a.857.857 0 0 0-.857-.858zm7.713 3.429H8.923l-1.638 1.714h5.142z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#545EFF"
            d="M16.663 16.286C19.058 16.286 21 14.367 21 12s-1.942-4.286-4.337-4.286c-2.098 0-3.848 1.473-4.25 3.429h4.302a.857.857 0 0 1 0 1.714h-4.302c.402 1.957 2.152 3.429 4.25 3.429"
          />
          <path
            fill="#fff"
            d="M4.715 7.714a.857.857 0 0 0-.858.857v6.858a.857.857 0 0 0 .858.857h6.857a.857.857 0 0 0 .857-.857V8.572a.857.857 0 0 0-.857-.858zm7.712 3.429H8.924l-1.638 1.714h5.141z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHST.displayName = 'HST'
