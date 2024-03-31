import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconXLM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M7.002 12.687a5.44 5.44 0 0 1 .627-3.3 5.16 5.16 0 0 1 1.825-1.922 4.9 4.9 0 0 1 2.5-.722 4.9 4.9 0 0 1 2.513.668l1.154-.613A5.95 5.95 0 0 0 9.2 6.273a6.27 6.27 0 0 0-2.456 2.37 6.64 6.64 0 0 0-.89 3.848 1.2 1.2 0 0 1-.14.661 1.14 1.14 0 0 1-.469.47l-.53.28v1.314l14.572-7.743V6.16zm12.284-3.9L7.783 14.895l-3.069 1.631v1.312l12.287-6.529q.043.345.043.692a5.44 5.44 0 0 1-.67 2.617 5.16 5.16 0 0 1-1.827 1.923 4.9 4.9 0 0 1-2.503.72 4.9 4.9 0 0 1-2.516-.672l-.061.034-1.089.579a5.95 5.95 0 0 0 6.42.525 6.27 6.27 0 0 0 2.458-2.368 6.64 6.64 0 0 0 .891-3.852 1.2 1.2 0 0 1 .14-.66c.107-.2.27-.363.469-.47l.53-.282z"
      />
    </BaseIcon>
  ),
)

IconXLM.displayName = 'XLM'
