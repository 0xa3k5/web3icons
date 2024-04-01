import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconLSS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M20.486 13.213 12.3 5.03 7.453 9.878 5.94 8.361l-2.426 2.426 8.182 8.181 4.851-4.847 1.513 1.517zM7.457 11.09l.6-.608L12.3 6.24l6.973 6.973-1.213 1.213-1.513-1.518-4.851 4.852-2.422-2.426.909-.909 1.208 1.21 4.243-4.244-1.208-1.208.908-.909-.608-.608-.909.908-1.213-1.213-4.243 4.243 1.213 1.213-.908.909-2.426-2.422-1.513-1.517L5.94 9.574l1.513 1.517zm5.147-1.517-3.03 3.03 1.822 1.822 3.03-3.03z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconLSS.displayName = 'LSS'
