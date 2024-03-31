import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconGHUB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="#C6E9F4" d="M10.405 5.571 8.357 6.9l7.285-.887z" />
      <path fill="#42C6EA" d="m13.821 9.78-2.276-.664 4.097-3.103z" />
      <path fill="#42AADB" d="M11.545 9.116 8.357 6.9l-3.643 7.084z" />
      <path fill="#2A4D9B" d="m13.594 10.444-8.88 3.54h8.194z" />
      <path
        fill="#1B6DB7"
        d="m12.912 13.984 1.136-3.763 5.237 1.993-6.377 1.77z"
      />
      <path fill="#2589C9" d="m19.285 12.214-3.643-6.201-1.367 3.767z" />
      <path fill="#243E81" d="m12 18.857.912-4.873 6.373-1.77z" />
      <path fill="#1D1F50" d="M12.908 13.984H4.714L12 18.857z" />
      <path fill="#1996CE" d="m13.594 9.998-2.049-.882-6.831 4.868z" />
      <path fill="#7CD1EC" d="M11.545 9.116 8.357 6.9l7.285-.887z" />
    </BaseIcon>
  ),
)

IconGHUB.displayName = 'GHUB'
