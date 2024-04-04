import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenHEART = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M16.286 12.604c0-2.01-1.243-3.604-3.472-3.604-1.071 0-1.915.334-2.528.956V6.429H7.714V18a35 35 0 0 1 2.572-.651v-3.935c0-1.547.75-2.271 1.868-2.271 1.093 0 1.56.694 1.56 1.997v3.643a32 32 0 0 1 2.572-.189V12.6z"
      />
    </BaseIcon>
  ),
)

TokenHEART.displayName = 'HEART'
