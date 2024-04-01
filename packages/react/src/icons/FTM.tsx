import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconFTM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.97 3.429 6.857 6.33v11.254l5.113 2.988 5.173-2.988V6.33zm.03.857L8.143 6.6 12 8.85l3.857-2.25zm-4.286 3v3.857l3.428-1.92zm4.714 2.785v3.858l3.429-1.92zm3.857-2.785v3.857l-3.428-1.92zm-4.714 2.785v3.858l-3.428-1.92zM7.714 12.67v4.474L12 19.714l4.285-2.571v-4.475L12 15z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M4.714 18.51v-2.653h.857v2.229l2.143 1.105v.952zM19.286 5.49v2.653h-.857V5.914L16.286 4.81v-.952z"
          />
        </>
      ) : (
        <>
          <path
            fill="#26B6EA"
            d="M11.97 3.429 6.857 6.33v11.254l5.113 2.988 5.173-2.988V6.33zm.03.857L8.141 6.6l3.857 2.25 3.857-2.25zm-4.287 3v3.857l3.429-1.92zm4.715 2.785v3.858l3.428-1.92zm3.857-2.785v3.857l-3.429-1.92zM11.57 10.07v3.858l-3.429-1.92zm-3.857 2.6v4.474L12 19.714l4.286-2.571v-4.475L11.999 15z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#26B6EA"
            d="M4.714 18.51v-2.653h.857v2.229l2.143 1.105v.952zM19.285 5.49v2.653h-.857V5.914L16.285 4.81v-.952z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconFTM.displayName = 'FTM'
