import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPHA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 6.429h9.429V9h2.57v3.429h-2.57V9H9.427v3.429h-2.57zM9.428 15h6.857v-2.57H9.429zm0 0v3.429H6.857V15z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#D1FF52"
            d="M6.857 6.429h9.429V9h2.571v3.429h-2.571V9H9.429v3.429H6.857zM9.43 15h6.857v-2.57H9.429zm0 0v3.429H6.857V15z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenPHA.displayName = 'PHA'
