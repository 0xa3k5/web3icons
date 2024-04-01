import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconROOK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M8.143 6H5.57v2.571h2.572v10.286h7.714V8.571h2.571V6h-2.571v2.571h-2.571V6h-2.572v2.571h-2.57zm2.571 5.143h2.572v2.571h-2.572z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconROOK.displayName = 'ROOK'
