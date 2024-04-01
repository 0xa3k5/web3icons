import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSTRK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 10.286v-6.43l-5.143 9.858H12v6.429l5.143-9.857z"
          />
        </>
      ) : (
        <>
          <path
            fill="#277FE3"
            d="M12 10.286v-6.43l-5.143 9.858H12v6.429l5.143-9.857z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSTRK.displayName = 'STRK'
