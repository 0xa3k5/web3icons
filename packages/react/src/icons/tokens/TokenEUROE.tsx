import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenEUROE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M6 6h12v2.143H8.143v1.286H18v2.142H6zm0 6.429h12v2.142H8.143v1.286H18V18H6z"
      />
    </BaseIcon>
  ),
)

TokenEUROE.displayName = 'EUROE'
