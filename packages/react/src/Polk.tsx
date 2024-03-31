import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconPOLK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="#5751FB" d="M18.857 12 12 20.143l1.828-10.405z" />
      <path fill="#3033BE" d="M12 20.143 5.143 12l8.685-2.262z" />
      <path fill="#51A0FC" d="m18.857 12-5.029-2.262L12 3.857z" />
      <path fill="#5751FB" d="M12 3.857 5.143 12l8.687-2.262z" />
    </BaseIcon>
  ),
)

IconPOLK.displayName = 'POLK'
