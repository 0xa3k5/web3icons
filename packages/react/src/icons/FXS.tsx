import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconFXS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M6.54 6.437c-.42.442-.763.815-.767.823 0 .009.373.386.836.827l.3.287.493.48a5.55 5.55 0 0 0-.086 6.163c-.172.184-.45.485-.767.815l-.892.95-.038.044c0 .008 1.423 1.397 1.555 1.508l.052.043.806-.844.857-.909a5.55 5.55 0 0 0 6.18.026c.381.373 1.757 1.697 1.774 1.706.013.004 1.543-1.607 1.538-1.629a135 135 0 0 0-1.692-1.637l-.03-.03a5.55 5.55 0 0 0-.009-6.128l.767-.815q.456-.466.887-.955a54 54 0 0 0-1.602-1.53c-.013 0-.408.402-.875.9-.33.35-.621.66-.771.81a5.55 5.55 0 0 0-6.034-.052l-.026-.026-.3-.287-.472-.454-.775-.75-.155-.154-.754.814zM12 15.43a3.428 3.428 0 1 0 0-6.857 3.428 3.428 0 0 0 0 6.857"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconFXS.displayName = 'FXS'
