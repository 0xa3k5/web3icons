import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenORDI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.921 6h2.936v1.714H7.286v3.926l-.429.3v.471l.429.279v3.596h2.571V18H6.921l-1.35-1.714v-3.429H4.286v-1.714H5.57V7.714zm10.157 0h-2.935v1.714h2.571v3.926l.429.3v.471l-.429.279v3.596h-2.571V18h2.935l1.35-1.714v-3.429h1.286v-1.714H18.43V7.714z"
          />
          <path
            fill="currentColor"
            d="M12 14.571a2.572 2.572 0 1 0 0-5.144 2.572 2.572 0 0 0 0 5.144m0-1.285a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FEFEFE"
            d="M6.922 6h2.936v1.714H7.286v3.926l-.428.3v.471l.428.279v3.596h2.572V18H6.922l-1.35-1.714v-3.429H4.286v-1.714h1.286V7.714zm10.157 0h-2.936v1.714h2.572v3.926l.428.3v.471l-.428.279v3.596h-2.572V18h2.936l1.35-1.714v-3.429h1.286v-1.714h-1.286V7.714z"
          />
          <path
            fill="#FEFEFE"
            d="M12 14.571a2.572 2.572 0 1 0 0-5.144 2.572 2.572 0 0 0 0 5.144m0-1.285a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenORDI.displayName = 'ORDI'
