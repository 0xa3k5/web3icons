import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLooks = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m19.714 11.357-4.628-4.5H8.914l-4.628 4.5 7.714 7.5zm-2.143.214s-5.125-7.714-11.143 0c6 7.714 11.143 0 11.143 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.571 11.571a2.572 2.572 0 1 0-5.143 0 2.572 2.572 0 0 0 5.143 0m-1.285 0A1.286 1.286 0 0 0 12 10.286c-.716 0-1.286.57-1.286 1.285 0 .716.57 1.286 1.286 1.286s1.286-.57 1.286-1.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#04CD58"
            d="m19.715 11.357-4.629-4.5H8.915l-4.629 4.5 7.714 7.5zm-2.143.214s-5.126-7.714-11.143 0c6 7.714 11.143 0 11.143 0"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#F0F3FA"
            d="M14.572 11.571a2.572 2.572 0 1 0-5.144 0 2.572 2.572 0 0 0 5.144 0m-1.286 0A1.286 1.286 0 0 0 12 10.286c-.715 0-1.285.57-1.285 1.285 0 .716.57 1.286 1.285 1.286.716 0 1.286-.57 1.286-1.286"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLooks.displayName = 'Looks'

export default IconLooks
