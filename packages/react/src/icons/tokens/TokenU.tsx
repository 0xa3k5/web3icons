import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenU = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 7.286H9v9.257c0 .308.313 1.028 1.046 1.028h3.685c.305 0 .84-.287.84-1.028v-2.357L12 16.714v-2.301l2.571-2.374V7.286h1.715v3.171l3.428-3.171v1.843l-3.428 3.368v2.657c0 1.235-.716 3.703-4.398 3.703-3.685 0-4.602-2.468-4.602-3.703z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F7D132"
            d="M7.286 7.286H9v9.257c0 .308.313 1.028 1.046 1.028h3.686c.304 0 .84-.287.84-1.028v-2.357L12 16.714v-2.301l2.572-2.374V7.286h1.714v3.171l3.429-3.171v1.843l-3.429 3.368v2.657c0 1.235-.716 3.703-4.397 3.703-3.686 0-4.603-2.468-4.603-3.703z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenU.displayName = 'U'
