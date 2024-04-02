import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenASCN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M4.714 14.571v1.286h.429l2.571-3h.643l2.357-3.214v-1.5H10.5l-3.643 4.714h-.643zm6.429 1.286v-3h.428V9.43c0-.429.258-1.286 1.286-1.286H18c.429 0 1.286.257 1.286 1.286v3.428h-.429v3h-1.285v-2.571h-5.143v2.571zM12.857 12H18V9.857c0-.141-.086-.428-.428-.428h-4.286c-.142 0-.429.085-.429.428z"
      />
    </BaseIcon>
  ),
)

TokenASCN.displayName = 'ASCN'
