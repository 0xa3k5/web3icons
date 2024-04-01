import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSHROOM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.264 13.857 1.93-7.374c-.93-.196-2.944.02-3.819 2.629-.804 2.399.827 4.406 1.89 4.745m5.472-3.714-1.93 7.374c.93.196 2.944-.02 3.82-2.628.804-2.4-.828-4.406-1.89-4.746m3.281-.286h-6.823c.693-2.84 2.51-3.467 3.333-3.426h4.33zm-5.21 4.286H5.983l-.84 3.427h4.33c.823.04 2.64-.587 3.334-3.427"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#A1F931"
            d="m9.264 13.857 1.93-7.374c-.93-.196-2.944.02-3.82 2.629-.803 2.399.828 4.406 1.89 4.745m5.472-3.714-1.93 7.374c.93.196 2.944-.02 3.819-2.628.804-2.4-.827-4.406-1.89-4.746m3.28-.286h-6.823c.693-2.84 2.511-3.467 3.333-3.426h4.33zm-5.21 4.286H5.983l-.84 3.427h4.33c.823.04 2.64-.587 3.333-3.427"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSHROOM.displayName = 'SHROOM'
