import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconWAGMIGAMES = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M8.259 10.286h-.973l2.297 5.143h.703l1.727-3.922L13.7 15.43h.768l2.245-5.143h-.917l-1.714 3.9-1.697-3.9h-.729l-1.744 3.9-1.659-3.9zM7.286 9v.429h3.33l.274-.232h5.824V9z"
          />
        </>
      ) : (
        <>
          <path
            fill="#00D8FF"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.857A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="M8.258 10.286h-.973l2.297 5.143h.703l1.727-3.922 1.689 3.922h.767l2.246-5.143h-.917l-1.715 3.9-1.697-3.9h-.728l-1.745 3.9-1.658-3.9z"
          />
          <path fill="#FD124D" d="M7.285 9v.429h3.33l.275-.232h5.824V9z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconWAGMIGAMES.displayName = 'WAGMIGAMES'
