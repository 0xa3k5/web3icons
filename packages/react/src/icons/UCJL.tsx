import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconUCJL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#UCJL__a)"
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 .857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path fill="url(#UCJL__b)" d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12" />
      <path
        fill="#D7E6F9"
        d="M12.429 10.071V7.5l-3 1.714v1.072c.214.214.6.428 1.285.428.686 0 1.428-.428 1.715-.643"
      />
      <path fill="#D5DBFB" d="m14.572 8.571-2.143 1.5v5.358l2.143-1.286z" />
      <path
        fill="#fff"
        d="M10.714 10.714c-.428 0-1.212-.287-1.285-.428v5.143c.073.214.428.642 1.285.642.858 0 1.5-.428 1.715-.642V10.07c-.429.215-1.17.643-1.715.643"
      />
      <defs>
        <linearGradient
          id="UCJL__a"
          x1="18.428"
          x2="5.785"
          y1="12"
          y2="12.214"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#17C8FA" />
          <stop offset="1" stopColor="#975DFE" />
        </linearGradient>
        <linearGradient
          id="UCJL__b"
          x1="15"
          x2="8.786"
          y1="7.286"
          y2="16.714"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B0AEFF" />
          <stop offset="1" stopColor="#278EDD" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconUCJL.displayName = 'UCJL'
