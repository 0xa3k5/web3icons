import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconKine = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 5.571h3.857v3.857H6.857zm0 9h3.857v3.857H6.857zM10.286 12l4.284-6.43H18L13.928 12 18 18.428h-3.43z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#12A8A7"
            d="M6.857 5.571h3.858v3.857H6.857zm0 9h3.858v3.857H6.857zM10.286 12l4.286-6.429H18L13.93 12 18 18.428h-3.428z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconKine.displayName = 'Kine'

export default IconKine
