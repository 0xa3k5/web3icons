import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconPOLA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m13.714 18.857-.771-1.285 1.843-3.429L12 9.43h1.432l2.854 4.714z"
          />
          <path
            fill="currentColor"
            d="M6.214 12.857h-1.5l3.604 5.995 5.396.005-.758-1.285H9zm4.072-7.714.771 1.286-1.843 3.428L12 14.572h-1.432L7.714 9.857z"
          />
          <path
            fill="currentColor"
            d="M17.786 11.143h1.5l-3.604-5.995-5.396-.005.758 1.286H15z"
          />
        </>
      ) : (
        <>
          <path
            fill="#1B7EFF"
            d="m13.714 18.857-.772-1.285 1.843-3.429L12 9.43h1.432l2.853 4.714z"
          />
          <path
            fill="#0B61CE"
            d="M6.214 12.857h-1.5l3.603 5.995 5.397.005-.759-1.285H9z"
          />
          <path
            fill="#0D64CE"
            d="m10.285 5.143.772 1.286-1.843 3.428L12 14.572h-1.433L7.714 9.857z"
          />
          <path
            fill="#1B7FF6"
            d="M17.785 11.143h1.5l-3.603-5.995-5.397-.005.759 1.286H15z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPOLA.displayName = 'POLA'
