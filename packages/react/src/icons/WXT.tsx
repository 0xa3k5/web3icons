import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWXT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m17.519 7.714-1.801 6.429-1.756-6.429h-3.099l-1.731 6.429-1.813-6.429H5.124l.604 2.143h-2.3v1.715h2.798l.411 1.285H3.429v1.715h3.715l.736 2.57h2.62l1.926-7.285 1.905 7.286h2.622l2.76-9.429z"
          />
        </>
      ) : (
        <>
          <path
            fill="#C9FFC6"
            d="m17.519 7.714-1.801 6.429-1.756-6.429h-3.099l-1.731 6.429-1.813-6.429H5.124l.604 2.143h-2.3v1.715h2.798l.411 1.285H3.429v1.715h3.715l.736 2.57h2.62l1.926-7.285 1.905 7.286h2.622l2.76-9.429z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWXT.displayName = 'WXT'
