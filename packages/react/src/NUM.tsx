import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconNUM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 6.857v6l4.286 4.286v-6zm8.571 0h-4.285v4.286l3 2.987-3 3.013h4.285zm-8.571 0H5.571v10.286h4.286v-4.286l-3-3z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0000D8"
            d="M9.857 6.857v6l4.286 4.286v-6zm8.571 0h-4.285v4.286l3 2.987-3 3.013h4.285zm-8.571 0H5.571v10.286h4.286v-4.286l-3-3z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNUM.displayName = 'NUM'
