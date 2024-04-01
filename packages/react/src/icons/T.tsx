import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M20.143 8.143H14.57v1.714h5.572zm-9 1.714H9.428v1.715h1.715zM9.428 18.43h1.715v-5.143H9.428zm3.429-8.572v1.715h1.714V9.857zm0 8.572h1.714v-5.143h-1.714zm0-10.286h-1.714v1.714h1.714zm-9 0v1.714h5.571V8.143zm16.286 5.143v-1.714H14.57v1.714zm-9-1.714v1.714h1.714v-1.714zm-7.286 0v1.714h5.571v-1.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="#7D00FE"
            d="M20.143 8.143h-5.571v1.714h5.571zm-9 1.714H9.43v1.715h1.714zM9.43 18.43h1.714v-5.143H9.43zm3.428-8.572v1.715h1.715V9.857zm0 8.572h1.715v-5.143h-1.715zm0-10.286h-1.714v1.714h1.714zm-9 0v1.714H9.43V8.143zm16.286 5.143v-1.714h-5.571v1.714zm-9-1.714v1.714h1.714v-1.714zm-7.286 0v1.714H9.43v-1.714z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconT.displayName = 'T'
