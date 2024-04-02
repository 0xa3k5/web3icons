import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenZTG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M18.857 12.429H5.143c.039.595.15 1.17.33 1.714h5.67l.429-.429h7.08a6.7 6.7 0 0 0 .205-1.285M5.82 15q.336.689.814 1.286H9.42l.437-.429h7.83q.279-.409.497-.857zm10.723 2.143H7.457A6.84 6.84 0 0 0 12 18.857c1.74 0 3.335-.647 4.543-1.714m-3.043-6-.428.429H5.143q.06-.896.33-1.715h13.054c.137.412.236.845.292 1.286zm4.453-2.571a7 7 0 0 0-.964-1.286H7.012A6.9 6.9 0 0 0 5.82 9h9.185l.428-.428zm-9.96-2.143h8.014A6.84 6.84 0 0 0 12 5.143c-1.495 0-2.88.476-4.007 1.286"
      />
    </BaseIcon>
  ),
)

TokenZTG.displayName = 'ZTG'
