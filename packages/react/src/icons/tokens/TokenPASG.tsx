import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPASG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.832 12a6.831 6.831 0 1 1-13.663 0 6.831 6.831 0 0 1 13.662 0m.454 0a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-1.903 0a5.383 5.383 0 1 1-10.766 0 5.383 5.383 0 0 1 10.766 0m1.046 0A6.429 6.429 0 1 1 5.57 12a6.429 6.429 0 0 1 12.858 0M9.643 9.857A1.07 1.07 0 0 0 8.57 10.93v2.143a1.071 1.071 0 1 0 2.143 0v-.913h-.771l.771-.87v-.36a1.07 1.07 0 0 0-1.071-1.072m3.643 1.072a1.072 1.072 0 0 1 2.143 0v.36l-.772.874h.772v.909a1.071 1.071 0 1 1-2.143 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M18.831 12a6.831 6.831 0 1 1-13.662 0 6.831 6.831 0 0 1 13.662 0m.454 0a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-1.903 0a5.383 5.383 0 1 1-10.765 0 5.383 5.383 0 0 1 10.765 0m1.046 0a6.429 6.429 0 1 1-12.857 0 6.429 6.429 0 0 1 12.857 0M9.642 9.857a1.07 1.07 0 0 0-1.071 1.072v2.143a1.071 1.071 0 1 0 2.143 0v-.913h-.772l.772-.87v-.36a1.07 1.07 0 0 0-1.072-1.072m3.643 1.072a1.072 1.072 0 0 1 2.143 0v.36l-.771.874h.771v.909a1.071 1.071 0 1 1-2.143 0z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenPASG.displayName = 'PASG'
