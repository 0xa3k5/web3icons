import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconHARD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 6.429h2.143v4.285h5.142V6.43h2.143v11.143h-2.143v-4.715H9.43v4.715H7.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="#441F67"
            d="M7.286 6.429H9.43v4.285h5.143V6.43h2.143v11.143h-2.143v-4.715H9.429v4.715H7.286z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHARD.displayName = 'HARD'
