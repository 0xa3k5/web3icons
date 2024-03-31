import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconWSI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.714 4.286H9.428v6l1.286-3.42zm-2.601 3H5.57l2.915 9.428h2.155l1.342-4.397 1.375 4.397h2.156l2.914-9.428h-2.49l-1.517 4.697-1.465-4.697h-1.912l-1.517 4.697zm6.458-3h-1.285v2.58l1.285 3.42zM9.428 17.143h1.286v2.571H9.428zm5.143 0h-1.285v2.571h1.285z"
          />
        </>
      ) : (
        <>
          <path
            fill="#013662"
            d="M10.714 4.286H9.428v6l1.286-3.42zm-2.601 3H5.57l2.915 9.428h2.155l1.342-4.397 1.375 4.397h2.156l2.914-9.428h-2.49l-1.517 4.697-1.465-4.697h-1.912l-1.517 4.697zm6.458-3h-1.285v2.58l1.285 3.42zM9.428 17.143h1.286v2.571H9.428zm5.143 0h-1.285v2.571h1.285z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWSI.displayName = 'WSI'
