import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconNBT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <g fill="currentColor" opacity=".5">
            <path
              d="M19.286 12a7.285 7.285 0 1 1-14.57 0 7.285 7.285 0 0 1 14.57 0m-.857 0A6.429 6.429 0 1 1 5.57 12a6.429 6.429 0 0 1 12.858 0"
              fillRule="evenodd"
              clipRule="evenodd"
            />
            <path d="M15.429 13.603c0 .531-.502.969-1.072.969s-1.071-.438-1.071-.97v-3.316c0-.643-.373-1.286-1.234-1.286h-.103c-.862 0-1.235.643-1.235 1.286v3.317c0 .531-.501.969-1.071.969s-1.072-.438-1.072-.97V9.858c0-1.71 1.543-3 3.36-3h.103c1.8 0 3.395 1.299 3.395 3z" />
            <path d="M9.643 9a1.071 1.071 0 1 0 0-2.142 1.071 1.071 0 0 0 0 2.142m-1.071 6.429h6.857v.857H8.572z" />
          </g>
        </>
      ) : (
        <>
          <g opacity=".5">
            <path
              fill="url(#NBT__a)"
              d="M19.285 12a7.286 7.286 0 1 1-14.57 0 7.286 7.286 0 0 1 14.57 0m-.857 0a6.429 6.429 0 1 1-12.857 0 6.429 6.429 0 0 1 12.857 0"
              fillRule="evenodd"
              clipRule="evenodd"
            />
            <path
              fill="url(#NBT__b)"
              d="M15.428 13.603c0 .531-.501.969-1.071.969s-1.072-.438-1.072-.97v-3.316c0-.643-.373-1.286-1.234-1.286h-.103c-.861 0-1.234.643-1.234 1.286v3.317c0 .531-.502.969-1.072.969s-1.071-.438-1.071-.97V9.858c0-1.71 1.543-3 3.36-3h.103c1.8 0 3.394 1.299 3.394 3z"
            />
            <path
              fill="url(#NBT__c)"
              d="M9.642 9a1.072 1.072 0 1 0 0-2.143 1.072 1.072 0 0 0 0 2.143"
            />
            <path fill="#2A1F63" d="M8.571 15.429h6.857v.857H8.571z" />
          </g>
          <defs>
            <linearGradient
              id="NBT__a"
              x1="17.357"
              x2="6.642"
              y1="6.643"
              y2="17.357"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AC89DD" />
              <stop offset="1" stopColor="#9864E6" />
            </linearGradient>
            <linearGradient
              id="NBT__b"
              x1="4.714"
              x2="18.771"
              y1="8.762"
              y2="18.248"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".14" stopColor="#7B72DC" />
              <stop offset=".35" stopColor="#7A73E6" />
              <stop offset="1" stopColor="#BC9CEB" />
            </linearGradient>
            <linearGradient
              id="NBT__c"
              x1="7.628"
              x2="16.371"
              y1="6.171"
              y2="16.372"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DFE8F7" />
              <stop offset="1" stopColor="#BBBBF1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconNBT.displayName = 'NBT'
