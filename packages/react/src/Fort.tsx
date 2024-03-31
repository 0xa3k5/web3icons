import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconFORT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M13.959 9.476c-.395-1.32-.317-3.442-.227-4.333h-3.498c.318 1.834.052 3.656-.124 4.333-1.843 0-3.63-.784-4.294-1.179l-1.102 3.335c2.525.441 3.81 1.174 4.136 1.487-.463 1.444-1.813 3.017-2.43 3.625l2.794 2.113c1.093-1.89 2.315-3.072 2.79-3.428 1.35.913 2.4 2.665 2.752 3.428l2.803-2.113c-1.457-1.495-2.212-3.042-2.405-3.625 1.402-.866 3.339-1.35 4.132-1.487l-1.089-3.335c-1.487.725-3.445 1.089-4.243 1.179z"
      />
    </BaseIcon>
  ),
)

IconFORT.displayName = 'FORT'
