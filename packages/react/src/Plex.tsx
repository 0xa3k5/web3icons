import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconPlex = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.143 12.429v-3H12c.887 0 1.286.343 1.286 1.5 0 .925-.527 1.5-1.286 1.5z"
          />
          <path
            fill="currentColor"
            d="M18.853 10.875v2.462c0 2.919-2.863 5.52-8.58 5.52-1.638 0-5.13-.75-5.13-5.738v-2.456c0-5.01 6.852-5.52 8.58-5.52 5.398 0 5.143 5.448 5.13 5.732M15 10.843c0-1.671-.887-2.7-2.151-2.7-.843 0-2.385.616-3.218.948l-.202.08v6.686h1.714v-2.502q.146.053.285.114c.292.123.585.245 1 .245 1.394 0 2.572-1.195 2.572-2.87"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#F08296"
            d="M11.143 12.429v-3H12c.887 0 1.286.343 1.286 1.5 0 .925-.527 1.5-1.286 1.5z"
          />
          <path
            fill="#F08296"
            d="M18.853 10.875v2.462c0 2.919-2.863 5.52-8.58 5.52-1.638 0-5.13-.75-5.13-5.738v-2.456c0-5.01 6.852-5.52 8.58-5.52 5.398 0 5.143 5.448 5.13 5.732M15 10.843c0-1.671-.887-2.7-2.151-2.7-.843 0-2.385.616-3.218.948l-.202.08v6.686h1.714v-2.502q.146.053.285.114c.292.123.585.245 1 .245 1.394 0 2.572-1.195 2.572-2.87"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPlex.displayName = 'Plex'

export default IconPlex
