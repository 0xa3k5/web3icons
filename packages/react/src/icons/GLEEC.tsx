import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconGLEEC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M10.714 3.857h2.572V6c1.928 0 4.075 1.205 4.584 3.428h-2.34c-.444-1.137-1.473-1.285-2.731-1.285l-1.6-.01c-1.657 0-3.058.99-3.058 2.704v2.326c0 1.713 1.451 2.694 3.108 2.694h1.5c1.657 0 3-1.287 3-3h-6.32v-2.143H18v2.449C18 15.947 15.75 18 13.286 18v2.143h-2.572V18C8.143 18 6 15.947 6 13.163v-2.326C6 8.053 8.143 6 10.714 6z"
          />
        </>
      ) : (
        <>
          <path
            fill="#843AF9"
            d="M10.714 3.857h2.572V6c1.928 0 4.075 1.205 4.584 3.428h-2.34c-.444-1.137-1.473-1.285-2.731-1.285l-1.6-.01c-1.657 0-3.058.99-3.058 2.704v2.326c0 1.713 1.451 2.694 3.108 2.694h1.5c1.657 0 3-1.287 3-3h-6.32v-2.143H18v2.449C18 15.947 15.75 18 13.286 18v2.143h-2.572V18C8.143 18 6 15.947 6 13.163v-2.326C6 8.053 8.143 6 10.714 6z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGLEEC.displayName = 'GLEEC'
