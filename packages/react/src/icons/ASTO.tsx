import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconASTO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <g clipPath="url(#ASTO__a)">
        <path fill="#1E1E20" d="M0 0h24v24H0z" />
        <path
          fill="url(#ASTO__b)"
          d="M8.914 17.276a6.15 6.15 0 0 1 2.773-.592c.566 0 1.62.03 2.773.592 1.093.531 3.771.643 3.771-2.328 0-1.268-.583-2.922-1.384-4.5-.802-1.585-2.927-5.305-5.16-5.305-2.229 0-4.354 3.724-5.16 5.305-.802 1.578-1.384 3.232-1.384 4.5 0 2.97 2.682 2.86 3.771 2.328"
        />
        <path
          fill="url(#ASTO__c)"
          d="M14.785 14.571a4.071 4.071 0 1 0 0-8.142 4.071 4.071 0 0 0 0 8.142"
        />
        <path
          fill="url(#ASTO__d)"
          d="M14.16 6.476a4.071 4.071 0 1 0 3.767 6.617 15.7 15.7 0 0 0-1.08-2.645c-.493-.972-1.479-2.742-2.687-3.972"
        />
      </g>
      <defs>
        <linearGradient
          id="ASTO__b"
          x1="12"
          x2="12"
          y1="5.143"
          y2="17.571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7F70FD" />
          <stop offset=".53" stopColor="#6551F1" />
          <stop offset="1" stopColor="#846DF8" />
        </linearGradient>
        <linearGradient
          id="ASTO__c"
          x1="12.361"
          x2="14.755"
          y1="5.143"
          y2="16.043"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F4C9EA" />
          <stop offset="1" stopColor="#E995AE" />
        </linearGradient>
        <linearGradient
          id="ASTO__d"
          x1="14.301"
          x2="15.642"
          y1="6.544"
          y2="13.929"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F9DBFF" />
          <stop offset=".57" stopColor="#ED9FF9" />
          <stop offset="1" stopColor="#F3BBFB" />
        </linearGradient>
        <clipPath id="ASTO__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </BaseIcon>
  ),
)

IconASTO.displayName = 'ASTO'
