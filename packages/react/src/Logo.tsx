import { forwardRef } from 'react'
import { BaseIcon } from './BaseIcon'
import { IconComponentProps } from './types'

const TokenIconLogo = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#FF3D00"
        d="m12.63 7.11 7.012 4.257a.739.739 0 0 1 0 1.266L12.63 16.89a.753.753 0 0 1-1.04-.261l-2.488-4.258a.736.736 0 0 1 0-.744L11.59 7.37a.753.753 0 0 1 1.04-.26Z"
      />
      <path
        fill="#FF3D00"
        d="m4.155 11.606 5.556-3.97c.327-.235.745.14.543.486l-2.103 3.6a.368.368 0 0 0 0 .371l2.103 3.6c.203.346-.216.72-.543.486l-5.556-3.97a.37.37 0 0 1 0-.603Z"
      />
    </BaseIcon>
  ),
)

TokenIconLogo.displayName = 'TokenIconLogo'

export default TokenIconLogo
