import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconZNN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.714 5.143h8.572V6.79l-5.233 3.497h5.233v8.571h-1.552L9.43 14.315v4.542H7.714v-8.622l5.362-3.378H7.714zM9.43 12h5.143v4.286z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#00FF65"
            d="M7.714 5.143h8.571V6.79l-5.233 3.497h5.233v8.571h-1.551l-5.306-4.542v4.542H7.714v-8.622l5.361-3.378H7.714zM9.428 12h5.143v4.286z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconZNN.displayName = 'ZNN'
