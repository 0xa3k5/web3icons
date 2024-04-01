import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPRQ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.156 11.572A6.86 6.86 0 0 1 12 5.143v3.429h2.572v-.429h1.285V9.43h-1.285V9H12v3h3v2.572h-.428V15H9.429v-.428H9V9.429h.429V8.143H8.143V9.43h.428v2.143z"
          />
          <path
            fill="currentColor"
            d="M14.572 15.857v-.428h-2.143v3.415A6.86 6.86 0 0 0 18.857 12H15.43v2.571h.428v1.286zm-6.429-1.286h.429V12H5.143A6.857 6.857 0 0 0 12 18.857V15.43H9.43v.428H8.143z"
          />
        </>
      ) : (
        <>
          <path
            fill="#005CC7"
            d="M5.155 11.572A6.86 6.86 0 0 1 12 5.143v3.429h2.571v-.429h1.286V9.43H14.57V9H12v3h3v2.572h-.429V15H9.428v-.428H9V9.429h.428V8.143H8.142V9.43h.429v2.143z"
          />
          <path
            fill="#005CC7"
            d="M14.571 15.857v-.428h-2.143v3.415A6.86 6.86 0 0 0 18.857 12h-3.429v2.571h.429v1.286zm-6.428-1.286h.428V12H5.143A6.857 6.857 0 0 0 12 18.857V15.43H9.428v.428H8.143z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPRQ.displayName = 'PRQ'
