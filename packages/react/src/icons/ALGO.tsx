import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconALGO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="m7.364 18 5.873-10.162.707 2.63L9.597 18h2.225l2.824-4.888L15.964 18h1.994l-1.95-7.262 1.384-2.595h-2.026l-.862-3H12.56L5.14 18z"
      />
    </BaseIcon>
  ),
)

IconALGO.displayName = 'ALGO'
