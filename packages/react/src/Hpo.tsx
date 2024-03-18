import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconHpo = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.286 10.714v-6h-2.572v6zm0 2.572v-2.572h6v2.572zm0 0v6h-2.572v-6zm-8.572-2.572h6v2.572h-6z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M13.285 10.714v-6h-2.571v6zm0 2.572v-2.572h6v2.572zm0 0v6h-2.571v-6z"
          />
          <path fill="#106BFF" d="M4.714 10.714h6v2.572h-6z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconHpo.displayName = 'Hpo'

export default IconHpo
