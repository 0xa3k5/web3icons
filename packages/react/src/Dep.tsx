import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconDep = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.81 4.714 7.654 9.435h8.912l-1.19-4.72zm11.856 8.529-3.737-3.3-4.456 7.297 4.909 1.381z"
          />
          <path
            fill="currentColor"
            d="M15.793 9.857h.594l-4.231 6.814-4.278-6.814h6.33l-1.317 2.46.665 1.061zm-7.044.429h2.25l2.276 3.557-1.12 1.855zm4.754 0H11.57l1.052 1.579z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m3.577 13.243 3.737-3.3 4.457 7.297-4.91 1.382z"
          />
        </>
      ) : (
        <>
          <path
            fill="#EAB74C"
            d="M8.81 4.714 7.654 9.435h8.912l-1.19-4.72zm11.856 8.529-3.737-3.3-4.456 7.297 4.909 1.381z"
          />
          <path
            fill="#EAB74C"
            d="M15.793 9.857h.594l-4.231 6.814-4.278-6.814h6.33l-1.317 2.46.665 1.061zm-7.044.429h2.25l2.276 3.557-1.12 1.855zm4.754 0H11.57l1.052 1.579z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#EAB74C"
            d="m3.577 13.243 3.737-3.3 4.457 7.297-4.91 1.382z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconDep.displayName = 'Dep'

export default IconDep
