import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLa = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.409 6.857 7.914 14.57h2.598l3.527-7.714h3.271l1.547 9.857h-2.855l-.164-2.143h-2.692l-.73 2.143h-8.13l4.416-9.857zm2.258 6.429h1.944L15.26 8.57z"
          />
        </>
      ) : (
        <>
          <path
            fill="#2F355B"
            d="M11.41 6.857 7.914 14.57h2.598l3.526-7.714h3.272l1.547 9.857h-2.856l-.164-2.143h-2.691l-.73 2.143h-8.13l4.416-9.857zm2.257 6.429h1.945l-.353-4.715z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLa.displayName = 'La'

export default IconLa
