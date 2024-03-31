import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconNEST = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M17.427 10.335C18.032 7.463 16.697 6 14.177 6c-1.514 0-2.772.555-3.909 1.587l.22-1.001s-.404-.157-1.21-.157c-.882 0-1.312.157-1.312.157L5.57 17.825S5.924 18 6.806 18c.807 0 1.285-.175 1.285-.175l1.747-8.169c.882-1.01 2.053-1.513 3.163-1.513 1.615 0 2.206.706 1.906 2.118l-1.622 7.564s.377.175 1.234.175c.831 0 1.286-.175 1.286-.175z"
      />
    </BaseIcon>
  ),
)

IconNEST.displayName = 'NEST'
