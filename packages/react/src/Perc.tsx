import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconPerc = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-4.714 2.434V7.286l1.286.707v7.041zm-3.857.022V7.303l1.285.707v7.042l-1.285-.6zm-1.715-3.172v2.542L9 14.392v-2.435l-1.286-.668zm7.286 0v2.542l1.286.566v-2.435L15 11.29zm-3.643-2.318v7.148l1.286.6V9.673z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#009BA0"
            d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-4.715 2.434V7.286l1.286.707v7.041zm-3.857.022V7.303l1.286.707v7.042l-1.286-.6zm-1.714-3.172v2.542L9 14.392v-2.435l-1.286-.668zm7.286 0v2.542l1.285.566v-2.435L15 11.29zm-3.643-2.318v7.148l1.285.6V9.673z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPerc.displayName = 'Perc'

export default IconPerc
