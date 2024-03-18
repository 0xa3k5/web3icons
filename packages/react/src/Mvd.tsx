import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconMvd = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.143 9.429 12 16.286v3.428l-6.857-6.857z"
          />
          <path
            fill="currentColor"
            d="M5.143 12.857 8.572 9.43V6L5.143 9.429z"
          />
          <path
            fill="currentColor"
            d="m6.857 11.143-1.714 1.714V9.43zM12 12.857 8.572 9.43V6L12 9.489zm6.857-3.428L12 16.286v3.428l6.857-6.857z"
          />
          <path
            fill="currentColor"
            d="M18.857 12.857 15.43 9.43V6l3.428 3.429z"
          />
          <path
            fill="currentColor"
            d="m17.143 11.143 1.714 1.714V9.43zM12 12.857l3.43-3.427V6L12 9.489z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MVD__a)"
            d="M5.143 9.429 12 16.286v3.428l-6.857-6.857z"
          />
          <path
            fill="url(#MVD__b)"
            d="M5.143 12.857 8.57 9.43V6L5.143 9.429z"
          />
          <path fill="#C58F3C" d="m6.857 11.143-1.714 1.714V9.43z" />
          <path fill="#FFAA27" d="M12 12.857 8.57 9.43V6L12 9.489z" />
          <path
            fill="url(#MVD__c)"
            d="M18.857 9.429 12 16.286v3.428l6.857-6.857z"
          />
          <path
            fill="url(#MVD__d)"
            d="M18.857 12.857 15.428 9.43V6l3.429 3.429z"
          />
          <path fill="#D79B3F" d="m17.143 11.143 1.714 1.714V9.43z" />
          <path fill="#D28A1C" d="m12 12.857 3.428-3.428V6L12 9.489z" />
          <defs>
            <linearGradient
              id="MVD__a"
              x1="5.143"
              x2="12.746"
              y1="7.446"
              y2="22.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#955A00" />
              <stop offset=".79" stopColor="#F29F20" />
            </linearGradient>
            <linearGradient
              id="MVD__b"
              x1="7.834"
              x2="13.117"
              y1="14.537"
              y2="3.609"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9E877A" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="MVD__c"
              x1="9.831"
              x2="12.458"
              y1="11.777"
              y2="15.597"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#B06E07" />
              <stop offset="1" stopColor="#C77E0C" />
            </linearGradient>
            <linearGradient
              id="MVD__d"
              x1="16.165"
              x2="10.883"
              y1="14.537"
              y2="3.609"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9E877A" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMvd.displayName = 'Mvd'

export default IconMvd
