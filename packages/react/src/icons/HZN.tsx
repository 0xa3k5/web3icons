import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconHZN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.714 12 17.4 9.686l-1.543 1.543.771.77L12 16.63l-1.543-1.543.771-.772.343.386V12.43H9.3l.386.342-2.315 2.315L12 19.714z"
          />
          <path
            fill="currentColor"
            d="m16.629 8.914-4.63-4.628L4.287 12 6.6 14.314l1.543-1.543L7.37 12 12 7.37l1.543 1.543-.772.772-.343-.386v2.271H14.7l-.386-.342z"
          />
        </>
      ) : (
        <>
          <path
            fill="#37F"
            d="M19.715 12 17.4 9.686l-1.542 1.543.771.77L12 16.63l-1.542-1.543.771-.772.343.386V12.43H9.3l.386.342-2.314 2.315L12 19.714z"
          />
          <path
            fill="#2AD4B7"
            d="M16.629 8.914 12 4.286 4.286 12 6.6 14.314l1.543-1.543L7.372 12 12 7.37l1.543 1.543-.771.772-.343-.386v2.271H14.7l-.385-.342z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHZN.displayName = 'HZN'
