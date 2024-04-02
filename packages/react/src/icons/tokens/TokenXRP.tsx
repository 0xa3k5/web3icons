import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenXRP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M16.846 6h1.985l-4.13 4.405a3.75 3.75 0 0 1-2.7 1.17 3.74 3.74 0 0 1-2.703-1.17L5.163 6h1.991l3.134 3.374c.917.973 2.507.973 3.425 0zM7.127 17.993H5.143l4.155-4.391a3.75 3.75 0 0 1 2.705-1.171 3.75 3.75 0 0 1 2.705 1.171L18.858 18h-1.985l-3.153-3.36a2.374 2.374 0 0 0-3.426 0z"
      />
    </BaseIcon>
  ),
)

TokenXRP.displayName = 'XRP'
