import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconCws = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.286 10.852 1.285-2.71 4.714 5.847v.385c-.971.33-1.98.534-3.004.609zM8.143 14.16c.137.082.3.154.471.223l1.616-2.97L8.143 8.57z"
          />
          <path
            fill="currentColor"
            d="M12 20.143a8.143 8.143 0 1 0 0-16.286 8.143 8.143 0 0 0 0 16.286m0-.429a7.714 7.714 0 1 0 0-15.427 7.714 7.714 0 0 0 0 15.427M8.143 14.86c3.57 1.311 6.917.544 8.142 0v.445c-3.158 1.265-6.745.527-8.142 0zm3.428-6.716v4.5l.082.111 1.555 2.238V15c1.102-.043 2.512-.437 3.077-.63v-.381zm3 3.094 1.714 2.049V8.57zm-4.341.176-1.612 2.97c1.239.489 3.275.66 4.239.617l-2.627-3.583z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FCF8F0"
            d="m10.286 10.852 1.286-2.71 4.714 5.847v.385c-.972.33-1.981.534-3.004.609zM8.143 14.16c.137.082.3.154.472.223l1.615-2.97L8.143 8.57z"
          />
          <path
            fill="#D7A049"
            d="M12 20.143a8.143 8.143 0 1 0 0-16.286 8.143 8.143 0 0 0 0 16.286m0-.429a7.714 7.714 0 1 0 0-15.427 7.714 7.714 0 0 0 0 15.427M8.143 14.86c3.57 1.311 6.917.544 8.143 0v.445c-3.159 1.265-6.746.527-8.143 0zm3.429-6.716v4.5l.081.111 1.556 2.238V15c1.101-.043 2.511-.437 3.077-.63v-.381zm3 3.094 1.714 2.049V8.57zm-4.342.176-1.611 2.97c1.238.489 3.274.66 4.238.617l-2.627-3.583z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCws.displayName = 'Cws'

export default IconCws
