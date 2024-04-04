import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTHE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M4.286 7.286H9V8.57H4.286zm0 1.714H9v1.286H4.286zM9 10.714H4.286v1.925l1.285-.103v4.178h2.143v-4.178L9 12.639zm.428-3.428h2.143V8.57H9.43zm3.43 0H15V8.57h-2.143zM11.57 9H9.43v1.286h2.142zm-2.14 1.714h2.142v1.714h1.286v-1.714H15v6h-2.143v-2.571h-1.286v2.571H9.43zM14.999 9h-2.142v1.286H15zm.43-1.714h4.285V8.57H15.43zm0 1.714h4.285v1.286H15.43zm0 1.714h4.285v1.714H18v.43h1.714v1.713H18V15h1.714v1.714H15.43z"
      />
    </BaseIcon>
  ),
)

TokenTHE.displayName = 'THE'
