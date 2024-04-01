import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconKWENTA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M4.714 13.714 12 9.154v-4.44l-7.286 4.56zm14.572 0L12 9.154v-4.44l7.286 4.56z"
          />
          <path
            fill="currentColor"
            d="M4.714 10.286 12 14.846v4.44l-7.286-4.56zm14.572 0L12 14.846v4.44l7.286-4.56z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KWENTA__a)"
            d="M4.714 13.714 12 9.154v-4.44l-7.286 4.56z"
          />
          <path
            fill="url(#KWENTA__b)"
            d="M19.285 13.714 12 9.154v-4.44l7.285 4.56z"
          />
          <path
            fill="url(#KWENTA__c)"
            d="M4.714 10.286 12 14.846v4.44l-7.286-4.56z"
          />
          <path
            fill="url(#KWENTA__d)"
            d="M19.285 10.286 12 14.846v4.44l7.285-4.56z"
          />
          <defs>
            <linearGradient
              id="KWENTA__a"
              x1="4.714"
              x2="19.282"
              y1="9.918"
              y2="9.559"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C39A6F" />
              <stop offset="1" stopColor="#9A6A3A" />
            </linearGradient>
            <linearGradient
              id="KWENTA__b"
              x1="4.714"
              x2="19.282"
              y1="13.18"
              y2="13.529"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C29665" />
              <stop offset="1" stopColor="#AE8351" />
            </linearGradient>
            <linearGradient
              id="KWENTA__c"
              x1="4.714"
              x2="20.117"
              y1="9.918"
              y2="10.976"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#323232" />
              <stop offset="1" stopColor="#353535" />
            </linearGradient>
            <linearGradient
              id="KWENTA__d"
              x1="19.286"
              x2="11.571"
              y1="13.5"
              y2="13.928"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#373737" />
              <stop offset="1" stopColor="#2A2A2C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconKWENTA.displayName = 'KWENTA'
