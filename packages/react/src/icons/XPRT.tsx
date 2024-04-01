import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconXPRT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.143 7.715v11.142h2.571V15h2.336c2.023 0 3.665-1.628 3.665-3.643s-1.642-3.642-3.665-3.642zm2.571 5.06h1.813a1.424 1.424 0 0 0 1.428-1.418c0-.784-.64-1.418-1.428-1.418h-1.812z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M8.143 5.143h8.572v1.714H8.143z" />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M8.143 7.715v11.142h2.571V15h2.336c2.023 0 3.664-1.628 3.664-3.643s-1.641-3.642-3.664-3.642zm2.571 5.06h1.813a1.424 1.424 0 0 0 1.427-1.418c0-.784-.639-1.418-1.427-1.418h-1.813z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#E80813" d="M8.143 5.143h8.571v1.714H8.143z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconXPRT.displayName = 'XPRT'
