import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGlm = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m16.275 4.768-.907-.911-1.82 1.812a3.214 3.214 0 1 0-2.405 5.838v1.843a3.215 3.215 0 1 0 1.285 0v-1.843a3.217 3.217 0 0 0 2.033-4.932zm-2.56 3.59a1.929 1.929 0 1 1-3.858 0 1.929 1.929 0 0 1 3.857 0m0 8.142a1.929 1.929 0 1 1-3.858 0 1.929 1.929 0 0 1 3.857 0"
          />
        </>
      ) : (
        <>
          <path
            fill="#1C408A"
            d="m16.275 4.768-.907-.911-1.82 1.812a3.214 3.214 0 1 0-2.405 5.838v1.843a3.215 3.215 0 1 0 1.285 0v-1.843a3.217 3.217 0 0 0 2.033-4.932zm-2.56 3.59a1.929 1.929 0 1 1-3.858 0 1.929 1.929 0 0 1 3.857 0m0 8.142a1.929 1.929 0 1 1-3.858 0 1.929 1.929 0 0 1 3.857 0"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGlm.displayName = 'Glm'

export default IconGlm
