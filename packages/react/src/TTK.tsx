import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTTK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 16.136a7.25 7.25 0 0 1-1.277-4.449c.39.25.823.429 1.277.527zm3.857 2.828A7.3 7.3 0 0 1 7.864 18H9.43v.429h.428zm.858.21v-.745h.214V18h.214v-6h-.214v-.428h-.215v-.858h2.572v.857h-.214v.43h-.215v6h.215v.428h.214v.745a7.3 7.3 0 0 1-2.572 0M16.136 18a7.3 7.3 0 0 1-1.993.964v-.535h.429V18zm.579-5.571h-2.572v.857h.214v.428h.215v3.858h1.714v-3.858h.214v-.428h.215zm-6.858 0H7.286v.857H7.5v.428h.214v3.858H9.43v-3.858h.214v-.428h.214zm7.715 4.264a7.26 7.26 0 0 0 1.693-5.229h-.01a.215.215 0 0 1-.218.103c-.428.197-.994.433-1.465.433zm1.671-5.464a.214.214 0 0 0-.386.098c-1.191-.12-2.014-.57-2.28-1.054a.214.214 0 0 0-.077-.416c-.214 0-.214.215-.214.215v.214h-2.143v-.643c1.029 0 1.856-.429 2.143-.643-1.226.043-1.8-.437-2.023-.874a.429.429 0 1 0-.549-.412h-3.428a.429.429 0 1 0-.549.412q-.128.27-.334.441L5.79 8.19q.15-.244.317-.476h2.465L6.39 7.35a7.273 7.273 0 0 1 11.366.184L15 7.93l3.172.197q.134.22.257.446h-2.572l2.769.394c.33.717.54 1.482.621 2.267z"
          />
          <path
            fill="currentColor"
            d="M4.929 11.143a.21.21 0 0 0-.172.086 7.1 7.1 0 0 1 .712-2.46l3.934-.202c-.493.42-1.251.48-1.689.433.172.514 1.213.643 1.715.643v.643H7.714v-.214a.214.214 0 1 0-.214.214c-.497.87-1.508 1.041-2.357 1.071a.214.214 0 0 0-.214-.214"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TTK__a)"
            d="M6 16.136a7.25 7.25 0 0 1-1.277-4.449c.391.25.824.429 1.277.527z"
          />
          <path
            fill="url(#TTK__b)"
            d="M9.857 18.964A7.3 7.3 0 0 1 7.864 18h1.564v.429h.429z"
          />
          <path
            fill="url(#TTK__c)"
            d="M10.714 19.174v-.745h.214V18h.214v-6h-.214v-.428h-.214v-.858h2.571v.857h-.214v.43h-.214v6h.214v.428h.214v.745a7.3 7.3 0 0 1-2.571 0"
          />
          <path
            fill="url(#TTK__d)"
            d="M16.135 18a7.3 7.3 0 0 1-1.992.964v-.535h.428V18z"
          />
          <path
            fill="url(#TTK__e)"
            d="M16.714 12.429h-2.571v.857h.214v.428h.214v3.858h1.714v-3.858h.215v-.428h.214z"
          />
          <path
            fill="url(#TTK__f)"
            d="M9.857 12.429H7.285v.857H7.5v.428h.214v3.858h1.714v-3.858h.215v-.428h.214z"
          />
          <path
            fill="url(#TTK__g)"
            d="M17.571 16.693a7.26 7.26 0 0 0 1.693-5.229h-.009a.215.215 0 0 1-.218.103c-.429.197-.994.433-1.466.433z"
          />
          <path
            fill="url(#TTK__h)"
            d="M19.243 11.229a.214.214 0 0 0-.386.098c-1.192-.12-2.014-.57-2.28-1.054a.214.214 0 0 0-.077-.416c-.215 0-.215.215-.215.215v.214h-2.142v-.643c1.028 0 1.855-.429 2.142-.643-1.225.043-1.8-.437-2.023-.874a.428.428 0 1 0-.548-.412h-3.429a.429.429 0 1 0-.548.412q-.129.27-.334.441L5.79 8.19q.148-.244.317-.476H8.57L6.39 7.35a7.273 7.273 0 0 1 11.365.184L15 7.93l3.171.197q.135.22.257.446h-2.571l2.768.394c.33.717.54 1.482.622 2.267z"
          />
          <path
            fill="url(#TTK__i)"
            d="M4.928 11.143a.21.21 0 0 0-.171.086 7.1 7.1 0 0 1 .711-2.46l3.935-.202c-.493.42-1.252.48-1.689.433.171.514 1.213.643 1.714.643v.643H7.714v-.214a.214.214 0 1 0-.214.214c-.497.87-1.509 1.041-2.357 1.071a.214.214 0 0 0-.215-.214"
          />
          <defs>
            <linearGradient
              id="TTK__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".71" stopColor="#C9AF67" />
              <stop offset="1" stopColor="#A58C51" />
            </linearGradient>
            <linearGradient
              id="TTK__b"
              x1="34.906"
              x2="34.906"
              y1="-196.194"
              y2="24.149"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".71" stopColor="#C9AF67" />
              <stop offset="1" stopColor="#A58C51" />
            </linearGradient>
            <linearGradient
              id="TTK__c"
              x1="12.021"
              x2="12.021"
              y1="-5.498"
              y2="19.284"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".71" stopColor="#C9AF67" />
              <stop offset="1" stopColor="#A58C51" />
            </linearGradient>
            <linearGradient
              id="TTK__d"
              x1="-10.864"
              x2="-10.864"
              y1="-196.194"
              y2="24.149"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".71" stopColor="#C9AF67" />
              <stop offset="1" stopColor="#A58C51" />
            </linearGradient>
            <linearGradient
              id="TTK__e"
              x1="-7.35"
              x2="-7.35"
              y1="-17.166"
              y2="24.149"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".71" stopColor="#C9AF67" />
              <stop offset="1" stopColor="#A58C51" />
            </linearGradient>
            <linearGradient
              id="TTK__f"
              x1="31.391"
              x2="31.391"
              y1="-17.166"
              y2="24.149"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".71" stopColor="#C9AF67" />
              <stop offset="1" stopColor="#A58C51" />
            </linearGradient>
            <linearGradient
              id="TTK__g"
              x1="-42.482"
              x2="-42.482"
              y1="-14.118"
              y2="26.519"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".71" stopColor="#C9AF67" />
              <stop offset="1" stopColor="#A58C51" />
            </linearGradient>
            <linearGradient
              id="TTK__h"
              x1="11.461"
              x2="11.461"
              y1="4.724"
              y2="36.816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#927A47" />
              <stop offset=".4" stopColor="#CAB067" />
              <stop offset=".71" stopColor="#C9AF67" />
            </linearGradient>
            <linearGradient
              id="TTK__i"
              x1="12"
              x2="12"
              y1="4.715"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#927A47" />
              <stop offset=".4" stopColor="#CAB067" />
              <stop offset=".71" stopColor="#C9AF67" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTTK.displayName = 'TTK'
