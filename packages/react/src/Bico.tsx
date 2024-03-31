import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBICO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.216 6a3.35 3.35 0 0 0-1.646-.429H9.36a1.62 1.62 0 0 1 1.642 1.603V12h1.568a3.31 3.31 0 0 0 2.576-1.226 3.172 3.172 0 0 0-.93-4.77z"
          />
          <path
            fill="currentColor"
            d="M15.172 10.714A3.54 3.54 0 0 1 12.429 12h-1.286V7.174c0-.883-.81-1.603-1.714-1.603-.909 0-1.715.72-1.715 1.603V18.43h5.747c.288 0 .558-.026.823-.086a4.04 4.04 0 0 0 3.287-3.93 4.15 4.15 0 0 0-2.4-3.699"
          />
        </>
      ) : (
        <>
          <path
            fill="#D85111"
            d="M14.215 6a3.35 3.35 0 0 0-1.645-.429H9.36A1.62 1.62 0 0 1 11 7.174V12h1.569a3.31 3.31 0 0 0 2.575-1.226 3.17 3.17 0 0 0-.93-4.77z"
          />
          <path
            fill="#fff"
            d="M15.171 10.714A3.54 3.54 0 0 1 12.428 12h-1.286V7.174c0-.883-.81-1.603-1.714-1.603-.908 0-1.714.72-1.714 1.603V18.43h5.747a3.7 3.7 0 0 0 .823-.086 4.04 4.04 0 0 0 3.287-3.93 4.15 4.15 0 0 0-2.4-3.699"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBICO.displayName = 'BICO'
