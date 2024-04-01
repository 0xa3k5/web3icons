import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBITCI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.143 5.143h2.143v.428h1.286v-.428h2.142v.437a3.214 3.214 0 0 1 1.62 5.846 3.643 3.643 0 0 1-1.405 7.002h-.215v.43h-2.142v-.43h-1.286v.43H8.143v-.43H6.429l2.571-3H7.714V8.572H9l-2.571-3h1.714zm2.143 3h2.143a1.285 1.285 0 1 1 0 2.571h-2.143zm0 4.714H13.5a1.5 1.5 0 1 1 0 3h-3.214z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FF4802"
            d="M8.143 5.143h2.143v.428h1.286v-.428h2.142v.437a3.214 3.214 0 0 1 1.62 5.846 3.643 3.643 0 0 1-1.405 7.002h-.215v.43h-2.142v-.43h-1.286v.43H8.143v-.43H6.429l2.571-3H7.714V8.572H9l-2.571-3h1.714zm2.143 3h2.143a1.285 1.285 0 1 1 0 2.571h-2.143zm0 4.714H13.5a1.5 1.5 0 1 1 0 3h-3.214z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBITCI.displayName = 'BITCI'
