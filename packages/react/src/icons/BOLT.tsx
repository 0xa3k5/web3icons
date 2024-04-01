import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconBOLT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.571 15.71V9.597l3.772 3.146z" />
          <path
            fill="currentColor"
            d="M18.428 5.572 8.571 9.28l4.17 3.462-7.17 5.687 9.643-3.71-.989-5.686z"
          />
        </>
      ) : (
        <>
          <path fill="#280C9C" d="M8.571 15.71V9.597l3.772 3.146z" />
          <path
            fill="#280C9C"
            d="M18.428 5.572 8.571 9.28l4.17 3.462-7.17 5.687 9.643-3.71-.989-5.686z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBOLT.displayName = 'BOLT'
