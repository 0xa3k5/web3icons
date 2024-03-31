import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTBTC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0m-1.715 0A5.571 5.571 0 1 1 6.43 12a5.571 5.571 0 0 1 11.143 0m-4.715-2.57a.857.857 0 1 1-1.714 0 .857.857 0 0 1 1.714 0m1.715 2.143H9.429v.857h2.143V15h.857v-2.57h2.143z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#090502"
            d="M19.285 12a7.286 7.286 0 1 1-14.571 0 7.286 7.286 0 0 1 14.571 0m-1.714 0a5.571 5.571 0 1 1-11.143 0 5.571 5.571 0 0 1 11.143 0m-4.714-2.57a.857.857 0 1 1-1.715 0 .857.857 0 0 1 1.715 0m1.714 2.143H9.428v.857h2.143V15h.857v-2.57h2.143z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTBTC.displayName = 'TBTC'
