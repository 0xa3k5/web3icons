import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVPAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.143 7.714 6.857 12 6.857-12zm3.789 2.143 1.075 2.006L9 13.286h1.83L12 15.429l2.936-5.572z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#68FFD2"
            d="m5.143 7.714 6.857 12 6.857-12zM8.93 9.857l1.076 2.006L9 13.286h1.83L12 15.429l2.935-5.572z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVPAD.displayName = 'VPAD'
