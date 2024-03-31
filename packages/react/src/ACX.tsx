import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconACX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.328 11.619 5.571 6.862l1.29-1.29 4.757 4.757a1.71 1.71 0 0 0-1.29 1.29m2.053-1.29a1.71 1.71 0 0 1 1.29 1.29l4.757-4.757-1.29-1.29zm1.29 2.053a1.71 1.71 0 0 1-1.29 1.29l4.757 4.757 1.29-1.29zm-2.053 1.29-4.757 4.757-1.29-1.29 4.757-4.757a1.71 1.71 0 0 0 1.29 1.29"
          />
        </>
      ) : (
        <>
          <path
            fill="#6CF9D7"
            d="M10.328 11.619 5.571 6.862l1.29-1.29 4.757 4.757a1.71 1.71 0 0 0-1.29 1.29m2.053-1.29a1.71 1.71 0 0 1 1.29 1.29l4.757-4.757-1.29-1.29zm1.29 2.053a1.71 1.71 0 0 1-1.29 1.29l4.757 4.757 1.29-1.29zm-2.053 1.29-4.757 4.757-1.29-1.29 4.757-4.757a1.71 1.71 0 0 0 1.29 1.29"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconACX.displayName = 'ACX'
