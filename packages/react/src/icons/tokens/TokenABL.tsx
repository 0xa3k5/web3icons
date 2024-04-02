import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenABL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M12.643 7.715h-1.286l-3.642 8.57H9l.996-2.142h3.973L15 16.285h1.286zm.837 5.142h-2.993L12 9.43z"
      />
      <path
        fill="currentColor"
        d="M18.429 16.54c-.887.17-1.707.997-1.875 1.889H7.447c-.168-.892-.989-1.719-1.875-1.888V7.459c.886-.169 1.707-.996 1.875-1.888h9.107c.167.892.988 1.719 1.875 1.888zm.29-9.595a1.66 1.66 0 0 1-1.653-1.662.14.14 0 0 0-.139-.14H7.074a.14.14 0 0 0-.14.14 1.66 1.66 0 0 1-1.652 1.662.14.14 0 0 0-.139.14v9.83c0 .078.062.14.14.14.91 0 1.651.746 1.651 1.662 0 .078.063.14.14.14h9.853a.14.14 0 0 0 .139-.14c0-.916.741-1.661 1.652-1.661a.14.14 0 0 0 .14-.14V7.084a.14.14 0 0 0-.041-.099.14.14 0 0 0-.099-.04"
      />
    </BaseIcon>
  ),
)

TokenABL.displayName = 'ABL'
