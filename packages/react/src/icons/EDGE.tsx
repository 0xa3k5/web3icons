import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconEDGE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 12q0-.165-.008-.327-.007-.113-.016-.224l-.006-.087q-.014-.143-.034-.286v-.015q-.021-.15-.048-.3a6.858 6.858 0 1 0-1.384 5.515l-2.104-1.498a4.2 4.2 0 0 1-3.253 1.508A4.273 4.273 0 0 1 7.714 12 4.27 4.27 0 0 1 12 7.714a4.275 4.275 0 0 1 4.09 3h-4.086l-1.095 2.572h7.835a7.7 7.7 0 0 0 .113-1.287"
          />
        </>
      ) : (
        <>
          <path
            fill="#0ECC5F"
            d="M18.857 12q0-.165-.009-.327-.006-.113-.016-.224 0-.043-.006-.087-.014-.143-.033-.286v-.015q-.022-.15-.048-.3a6.858 6.858 0 1 0-1.385 5.515l-2.104-1.498a4.2 4.2 0 0 1-3.253 1.508A4.27 4.27 0 0 1 7.714 12 4.27 4.27 0 0 1 12 7.714a4.28 4.28 0 0 1 4.09 3h-4.087l-1.095 2.572h7.835a7.5 7.5 0 0 0 .114-1.287"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconEDGE.displayName = 'EDGE'
