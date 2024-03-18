import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBoa = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 8.143h13.714v2.143H18l.215 6.857h.642V18H5.143v-.857h.643L6 10.286h-.857zm3.429 2.143h2.143l-.283 6.857H8.824zm4.714 0h2.143l-.283 6.857h-1.607z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="m6.857 7.286 5.126-3 5.16 3z" />
        </>
      ) : (
        <>
          <path
            fill="#004F9E"
            d="M5.143 8.143h13.714v2.143H18l.214 6.857h.643V18H5.143v-.857h.642L6 10.286h-.857zm3.428 2.143h2.143l-.283 6.857H8.824zm4.714 0h2.143l-.283 6.857h-1.607z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#004F9E" d="m6.857 7.286 5.126-3 5.16 3z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconBoa.displayName = 'Boa'

export default IconBoa
