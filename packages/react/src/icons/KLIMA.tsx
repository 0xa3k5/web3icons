import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconKLIMA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m18.857 5.571-6.852 10.286-6.85-10.286zm-1.662.857L12 14.143 6.806 6.428z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m11.996 8.143 6.849 10.285H15v-.857h2.195L12 9.857l-5.194 7.714H9v.857H5.143z"
          />
          <path fill="currentColor" d="M6 11.571h12v.857H6z" />
        </>
      ) : (
        <>
          <path
            fill="#00CD34"
            d="m18.857 5.571-6.853 10.286L5.155 5.571zm-1.663.857L12 14.143 6.805 6.428z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#00CD34"
            d="m11.995 8.143 6.849 10.285H15v-.857h2.194L12 9.857l-5.195 7.714H9v.857H5.143z"
          />
          <path fill="#00CD34" d="M6 11.571h12v.857H6z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconKLIMA.displayName = 'KLIMA'
