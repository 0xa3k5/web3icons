import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMTLX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.429 6h.857v11.571h-.857zM4.714 6h.857v11.571h-.857zm2.572 1.286h-.857v9h.857zm9.428 0h.858v9.428h-.858zM9 8.143h-.857v9.428H9zm6-.02h.857v9.428H15zm-4.286 1.306h-.857v7.285h.857zm2.572 0h.857v7.285h-.857zm-.857 1.285h-.857v7.715h.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#3E34A7"
            d="M18.428 6h.857v11.571h-.857zM4.714 6h.857v11.571h-.857zm2.571 1.286h-.857v9h.857zm9.429 0h.857v9.428h-.857zM9 8.143h-.858v9.428H9zm6-.02h.857v9.428H15zm-4.286 1.306h-.857v7.285h.857zm2.571 0h.857v7.285h-.857zm-.857 1.285h-.857v7.715h.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMTLX.displayName = 'MTLX'
