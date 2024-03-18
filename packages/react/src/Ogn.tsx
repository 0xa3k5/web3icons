import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconOgn = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.716 8.546c-1.286 2.545-.557 5.691 0 6.883l2.121-2.143c-.21-.819-.167-2.057.094-3.077.31-1.222 1.372-2.448 3.01-2.469 1.152-.013 1.962.531 2.142.806L6.904 15.83c.3.502 1.175 1.766 2.482 2.469 1.23.66 3.124.681 4.337.343a6.06 6.06 0 0 0 4.011-4.397c.635-2.619-.017-4.972-.454-5.7l-2.083 2.121c.142.814.12 2.649-.36 3.806-.471 1.157-1.448 1.8-2.897 1.8a3.3 3.3 0 0 1-2.027-.844l7.157-7.325C15.356 5.2 12.334 5.001 11.242 5.2a6.06 6.06 0 0 0-4.526 3.34z"
          />
        </>
      ) : (
        <>
          <path
            fill="#007CFF"
            d="M6.715 8.546c-1.285 2.545-.557 5.691 0 6.883l2.122-2.143c-.21-.819-.167-2.057.094-3.077.309-1.222 1.371-2.448 3.009-2.469 1.152-.013 1.962.531 2.142.806L6.904 15.83c.3.502 1.174 1.766 2.481 2.469 1.23.66 3.125.681 4.337.343a6.06 6.06 0 0 0 4.012-4.397c.634-2.619-.017-4.972-.454-5.7l-2.083 2.121c.141.814.12 2.649-.36 3.806-.472 1.157-1.449 1.8-2.897 1.8a3.3 3.3 0 0 1-2.028-.844l7.158-7.325C15.355 5.2 12.334 5.001 11.24 5.2a6.06 6.06 0 0 0-4.525 3.34z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconOgn.displayName = 'Ogn'

export default IconOgn
