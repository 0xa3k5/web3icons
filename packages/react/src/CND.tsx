import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCND = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 .857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12 12.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 .857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#0C0E15"
            d="M12 12.857a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCND.displayName = 'CND'
