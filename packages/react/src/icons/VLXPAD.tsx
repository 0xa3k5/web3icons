import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconVLXPAD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.63 8.571H4.286l4.285 7.286 3.215-5.143-1.072-2.143-1.971 3.515z"
          />
          <path
            fill="currentColor"
            d="M19.714 8.571h-9l1.072 2.143h3.857l-.429.857H12l.857 2.143h3.429z"
          />
          <path
            fill="currentColor"
            d="M12.857 13.714 12 11.571 9.214 16.5q.605 1.147 1.072 2.357s1.633-3.343 2.571-5.143"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#VLXPAD__a)"
            d="M6.63 8.571H4.286l4.286 7.286 3.214-5.143-1.071-2.143-1.972 3.515z"
          />
          <path
            fill="url(#VLXPAD__b)"
            d="M19.715 8.571h-9l1.071 2.143h3.857l-.428.857H12l.858 2.143h3.428z"
          />
          <path
            fill="url(#VLXPAD__c)"
            d="M12.858 13.714 12 11.571 9.215 16.5q.605 1.147 1.071 2.357s1.633-3.343 2.572-5.143"
          />
          <defs>
            <linearGradient
              id="VLXPAD__a"
              x1="6.693"
              x2="19.715"
              y1="11.881"
              y2="11.881"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0753F7" />
              <stop offset="1" stopColor="#02CBC5" />
            </linearGradient>
            <linearGradient
              id="VLXPAD__b"
              x1="6.123"
              x2="18.179"
              y1="9.977"
              y2="9.977"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02A7A1" />
              <stop offset="1" stopColor="#01E8BA" />
            </linearGradient>
            <linearGradient
              id="VLXPAD__c"
              x1="12.724"
              x2="9.677"
              y1="12.321"
              y2="17.713"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#01DBC0" />
              <stop offset="1" stopColor="#03ACD3" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconVLXPAD.displayName = 'VLXPAD'
