import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAIN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.571 4.714v4.222l-2.644 3.921H5.571v-.428l5.572-7.715zm.429 0v4.217l2.816 3.926h3.612v-.428l-6-7.715zm6.428 8.572h-3.304l3.073 4.286h.231zm-.758 4.286-3.073-4.286H9.154l-2.888 4.286zm-11.919 0 2.889-4.286H5.57v4.286zm3.695-4.715 2.344-3.48 2.498 3.48z"
          />
        </>
      ) : (
        <>
          <path
            fill="#663FBC"
            d="M11.571 4.714v4.222l-2.644 3.921H5.571v-.428l5.572-7.715zm.429 0v4.217l2.816 3.926h3.612v-.428l-6-7.715zm6.428 8.572h-3.304l3.073 4.286h.231zm-.758 4.286-3.073-4.286H9.154l-2.888 4.286zm-11.919 0 2.889-4.286H5.57v4.286zm3.695-4.715 2.344-3.48 2.498 3.48z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAIN.displayName = 'AIN'
