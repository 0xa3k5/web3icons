import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconKARATE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M6 6h8.143v2.571H8.57V18H6zm12 12H9.857v-2.571h5.572V6H18z"
      />
    </BaseIcon>
  ),
)

IconKARATE.displayName = 'KARATE'
