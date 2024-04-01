import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconIDLE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.572 17.143V4.286L6.429 7.329v9.814zm6-10.286h-5.143v12.857l5.143-3.043z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1B14DC"
            d="M11.572 17.143V4.286L6.429 7.329v9.814zm6-10.286h-5.143v12.857l5.143-3.043z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconIDLE.displayName = 'IDLE'
