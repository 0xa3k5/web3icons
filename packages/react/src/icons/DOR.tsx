import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconDOR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#128BF4"
        d="m6.857 14.925 5.152-5.068 5.134 5.068-5.134 5.218z"
      />
      <path
        fill="#E21639"
        d="m6.857 8.927 5.152-5.069 5.134 5.069L12 14.145z"
      />
      <path
        fill="#1C4387"
        d="m9.863 11.972 2.139 2.17 2.145-2.177.72.713-2.865 2.93-2.874-2.921z"
      />
    </BaseIcon>
  ),
)

IconDOR.displayName = 'DOR'
