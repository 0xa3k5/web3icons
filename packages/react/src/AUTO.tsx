import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconAUTO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#E9595C"
        d="m7.232 15.587 2.735-1.713 4.864 2.892-2.723 1.75z"
      />
      <path fill="#109E92" d="M11.247 6 6.535 8.856v5.513l4.712-2.742z" />
      <path
        fill="#000"
        d="m18.857 14.661-3-1.877V11.17l1.286.685V8.899l-4.286-2.786v6.316l-1.28.73 6.082 3.64-5.66 3.344-6.856-4.053V7.984L12 3.86l6.857 4.125zm-12-5.762v5.274l4.284-2.606V6.22zm3.138 5.165-2.531 1.563L12 18.307l2.561-1.515z"
      />
    </BaseIcon>
  ),
)

IconAUTO.displayName = 'AUTO'
