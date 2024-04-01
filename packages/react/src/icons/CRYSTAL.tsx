import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCRYSTAL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="#D2E2DA" d="M12 6V3.428L5.143 17.571l2.142-1.714z" />
      <path fill="#7E8B92" d="M12 6V3.428l6.857 14.143-2.143-1.714z" />
      <path fill="#5A687A" d="M16.714 15.857H7.285l-2.142 1.714h13.714z" />
      <path fill="#6A7C8B" d="M7.285 15.857 12 6l4.714 9.857z" />
      <path
        fill="#8AC4DE"
        d="M12 9.428v-3l-2.143 4.286.643.643L9.214 12l-1.5 3.643 1.714-1.5z"
      />
      <path
        fill="#58779F"
        d="M12 9.428v-3l2.143 4.286-.643.643 1.285.643 1.5 3.643-1.714-1.5z"
      />
      <path
        fill="#475985"
        d="M14.571 14.143H9.428l-1.714 1.5h3.214l.643-.643h.857l.643.643h3.214z"
      />
      <path fill="url(#CRYSTAL__a)" d="M9.428 14.143 12 9.428l2.571 4.715z" />
      <defs>
        <linearGradient
          id="CRYSTAL__a"
          x1="10.714"
          x2="14.571"
          y1="11.786"
          y2="14.143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2EDFB" />
          <stop offset="1" stopColor="#91CCE5" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconCRYSTAL.displayName = 'CRYSTAL'
