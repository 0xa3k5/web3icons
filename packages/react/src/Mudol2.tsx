import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconMudol2 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="#3C7547" d="m12 12.081-4.715 2.572L12 17.48l4.714-2.828z" />
      <path
        fill="#F95D33"
        d="M9 11.361v2.387l3-1.585 4.714 2.614v-2.614L12 9.673z"
      />
      <path
        fill="#F95D33"
        d="m12 4.286 6.857 3.857v.064l-2.152 1.2L12 6.814 7.285 9.403v5.185L12 17.179l4.701-2.585 2.156 1.255v.01L12 19.713l-6.857-3.857V8.143z"
      />
    </BaseIcon>
  ),
)

IconMudol2.displayName = 'Mudol2'

export default IconMudol2
