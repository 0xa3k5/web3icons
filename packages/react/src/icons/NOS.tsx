import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 18H6.43V8.04c0-.506.797-1.016 1.337-.394l4.663 9.068h-1.715L8.357 12h-1.5l3 6h4.723L9.022 7.106S8.473 6.009 7.17 6.009 5.143 7.337 5.143 7.736zM18.857 6h-1.285v9.973c0 .501-.789 1.011-1.329.39l-4.671-9.077h1.714L15.643 12h1.5l-2.991-6H9.429l5.558 10.903S15.536 18 16.843 18s2.014-1.329 2.014-1.727z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0DE90B"
            d="M5.143 18h1.285V8.04c0-.506.797-1.016 1.337-.394l4.663 9.068h-1.714L8.357 12h-1.5l3 6h4.723L9.02 7.106s-.547-1.097-1.85-1.097-2.027 1.328-2.027 1.727zM18.857 6H17.57v9.973c0 .501-.788 1.011-1.328.39L11.57 7.286h1.714L15.643 12h1.5L14.15 6H9.428l5.559 10.903S15.535 18 16.843 18c1.307 0 2.014-1.329 2.014-1.727z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNOS.displayName = 'NOS'
