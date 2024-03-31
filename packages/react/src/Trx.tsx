import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTRX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.6 6.207a.43.43 0 0 1 .42-.129l9.043 2.214a.4.4 0 0 1 .15.07l1.84 1.342a.43.43 0 0 1 .102.587l-6.33 9.262a.428.428 0 0 1-.758-.099L6.514 6.638a.43.43 0 0 1 .086-.43M8.092 8.52l3.16 8.897.52-4.61zm4.526 4.435-.528 4.691 4.47-6.541zm4.345-2.986-2.88 1.352 1.93-2.044zm-1.82-1.02-7.03-1.72 4.122 4.8z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#C4342B"
            d="M6.6 6.207a.43.43 0 0 1 .42-.129l9.043 2.214a.4.4 0 0 1 .15.07l1.84 1.342a.43.43 0 0 1 .101.587l-6.33 9.262a.428.428 0 0 1-.758-.099L6.514 6.638a.43.43 0 0 1 .086-.43M8.092 8.52l3.16 8.897.52-4.61zm4.526 4.435-.528 4.691 4.47-6.541zm4.345-2.986-2.881 1.352 1.931-2.044zm-1.82-1.02-7.03-1.72 4.122 4.8z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTRX.displayName = 'TRX'
