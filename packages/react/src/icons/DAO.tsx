import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconDAO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M3.857 17.55 9.45 7.286l4.937-2.143-5.601 10.256zm5.576-2.34 4.243-7.796 2.43 2.349-4.2 7.808zm7.14-5.22 3.141 1.136-1.573 2.841-3.81.129z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DAO__a)"
            d="M3.857 17.55 9.45 7.286l4.937-2.143-5.601 10.256z"
          />
          <path
            fill="url(#DAO__b)"
            d="m9.433 15.21 4.243-7.796 2.43 2.349-4.2 7.808z"
          />
          <path
            fill="url(#DAO__c)"
            d="m16.573 9.99 3.142 1.136-1.573 2.841-3.81.129z"
          />
          <defs>
            <linearGradient
              id="DAO__a"
              x1="3.857"
              x2="19.715"
              y1="11.355"
              y2="11.355"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4086FF" />
              <stop offset="1" stopColor="#48D4FF" />
            </linearGradient>
            <linearGradient
              id="DAO__b"
              x1="3.857"
              x2="19.715"
              y1="11.357"
              y2="11.357"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4086FF" />
              <stop offset="1" stopColor="#48D4FF" />
            </linearGradient>
            <linearGradient
              id="DAO__c"
              x1="14.332"
              x2="19.715"
              y1="12.047"
              y2="12.047"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4086FF" />
              <stop offset="1" stopColor="#48D4FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDAO.displayName = 'DAO'
