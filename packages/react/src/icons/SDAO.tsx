import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSDAO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <g opacity=".7">
        <path
          fill="url(#SDAO__a)"
          d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m1.842-9.335c.168-.724.073-1.658-.822-2.94 3.218.703 5.254 4.205 4.38 7.325a5.52 5.52 0 0 1-2.619 3.42c-1.076.6-2.644 1.071-3.806.437A2.19 2.19 0 0 1 9.9 15.934c.141-.707.651-1.401 1.195-2.057.292-.351.6-.686.905-1.028l.471-.519c.609-.69 1.161-1.508 1.363-2.379z"
        />
        <path
          fill="#203BDB"
          d="M7.307 9c2.55-2.734 5.687-1.989 5.687-1.989l-.06-.068C12.59 6.857 9.428 6.3 7.307 9"
        />
        <path
          fill="url(#SDAO__b)"
          d="M14.785 17.756c-1.075.6-2.644 1.071-3.805.437a2.19 2.19 0 0 1-1.076-2.259c.141-.707.651-1.401 1.196-2.057.291-.351.6-.686.904-1.028l.471-.519c-.805.849-2.031 1.264-2.914 1.946-.879.673-1.157 1.688-.926 2.773.245 1.114 1.076 2.143 3.082 2.228 1.255.056 2.237-.771 3.068-1.521"
        />
      </g>
      <defs>
        <linearGradient
          id="SDAO__a"
          x1="19.285"
          x2="4.714"
          y1="12.013"
          y2="12.013"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".11" stopColor="#E25900" />
          <stop offset=".2" stopColor="#CBC91E" />
          <stop offset=".35" stopColor="#2DE2C1" />
          <stop offset=".46" stopColor="#3093D3" />
          <stop offset=".7" stopColor="#2024DE" />
          <stop offset="1" stopColor="#2624DF" />
        </linearGradient>
        <linearGradient
          id="SDAO__b"
          x1="10.092"
          x2="8.554"
          y1="15.484"
          y2="15.553"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#203BDB" />
          <stop offset="1" stopColor="#2133DD" stopOpacity=".4" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconSDAO.displayName = 'SDAO'
