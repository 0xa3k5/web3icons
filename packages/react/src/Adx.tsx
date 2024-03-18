import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAdx = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.76 6.714 12 10l3.159-3.286 1.984 1.972L13.91 12l3.233 3.286-1.984 2L11.999 14l-3.24 3.285-1.902-1.942 3.203-3.357-3.203-3.308L8.76 6.707zm.257-.264 2.968-3.022 2.968 3.022-1.557 1.614-1.41-1.507-1.404 1.507zm0 11.1 1.565-1.615 1.403 1.508 1.41-1.508 1.558 1.615-2.968 3.021z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1B75BC"
            d="M8.76 6.714 12 10l3.16-3.286 1.983 1.972L13.91 12l3.233 3.286-1.984 2L12 14l-3.24 3.285-1.903-1.942 3.204-3.357-3.204-3.308L8.76 6.707zm.257-.264 2.969-3.022 2.968 3.022-1.558 1.614-1.41-1.507-1.404 1.507zm0 11.1 1.565-1.615 1.404 1.508 1.41-1.508 1.558 1.615-2.968 3.021z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAdx.displayName = 'Adx'

export default IconAdx
