import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCFG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.426 15.836a7.5 7.5 0 0 1 12.6-7.937l-.66.548A6.642 6.642 0 0 0 6.2 15.476zM16.38 9.274a5.357 5.357 0 1 0-4.363 8.722v-.857a4.5 4.5 0 1 1 3.703-7.316zm-1.646 1.372A3.21 3.21 0 0 0 9 12.643a3.214 3.214 0 0 0 5.529 2.228l-.54-.672a2.352 2.352 0 0 1-4.132-1.556 2.358 2.358 0 0 1 4.222-1.444l.655-.549z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M5.425 15.836a7.5 7.5 0 0 1 12.6-7.937l-.66.548a6.643 6.643 0 0 0-11.164 7.029zM16.38 9.274a5.357 5.357 0 1 0-4.363 8.722v-.857a4.5 4.5 0 1 1 3.703-7.316zm-1.646 1.372A3.21 3.21 0 0 0 9 12.643a3.214 3.214 0 0 0 5.528 2.228l-.54-.672a2.352 2.352 0 0 1-4.131-1.556 2.358 2.358 0 0 1 4.221-1.444l.656-.549z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCFG.displayName = 'CFG'
