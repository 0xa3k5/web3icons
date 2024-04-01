import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconZIL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6.857 5.649 8.139 3.93 2.142-.943-8.151-3.922z"
          />
          <path
            fill="currentColor"
            d="M6.857 5.649V7.77l5.666 2.73-5.666 2.773v2.091L15 19.286v-2.1l-5.516-2.679L15 11.68v-2.1L6.857 5.657zM15 9.566l2.143-.93v2.1L15 11.67zm0 9.703 2.143-.935V11.8L15 12.742z"
          />
        </>
      ) : (
        <>
          <g opacity=".8">
            <path
              fill="url(#ZIL__a)"
              d="m6.857 5.649 8.139 3.93 2.143-.943-8.152-3.922z"
            />
            <path
              fill="url(#ZIL__b)"
              d="M6.857 5.649V7.77l5.666 2.73-5.666 2.773v2.091L15 19.286v-2.1l-5.515-2.679L15 11.68v-2.1L6.857 5.657z"
            />
            <path
              fill="url(#ZIL__c)"
              d="m15 9.566 2.143-.93v2.1L15 11.67zm0 9.703 2.143-.935V11.8L15 12.742z"
            />
          </g>
          <defs>
            <linearGradient
              id="ZIL__a"
              x1="15.432"
              x2="4.833"
              y1="18.836"
              y2="14.872"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#60AAAC" />
              <stop offset="1" stopColor="#347181" />
            </linearGradient>
            <linearGradient
              id="ZIL__b"
              x1="12"
              x2="12"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5AC1C1" />
              <stop offset="1" stopColor="#216B79" />
            </linearGradient>
            <linearGradient
              id="ZIL__c"
              x1="13.714"
              x2="18.429"
              y1="17.357"
              y2="13.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5AC1C1" />
              <stop offset="1" stopColor="#216B79" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconZIL.displayName = 'ZIL'
