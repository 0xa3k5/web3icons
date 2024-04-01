import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTRYB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.569 10.884c.006-.23 0-.835 0-.835l-5.57-1.478v1.715l3.858 1.003c-.319 3.965-2.176 6.244-5.571 6.71V4.77L8.57 4.287v15.428l.916-.046c3.384-.17 7.358-1.731 8.014-7.906.03-.283.06-.575.068-.878m-1.72-2.921.437-1.535L12 5.143v1.714z"
          />
        </>
      ) : (
        <>
          <path
            fill="#20316B"
            d="M17.569 10.884c.006-.23 0-.835 0-.835l-5.57-1.478v1.715l3.858 1.003c-.319 3.965-2.176 6.244-5.571 6.71V4.77L8.57 4.287v15.428l.916-.046c3.384-.17 7.358-1.731 8.014-7.906.03-.283.06-.575.068-.878m-1.72-2.921.437-1.535L12 5.143v1.714z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTRYB.displayName = 'TRYB'
