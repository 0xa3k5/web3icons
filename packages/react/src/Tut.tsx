import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTUT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714M14.57 12l-3.857-2.143v4.286z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.953 5.807C15.92 7.273 17 10.217 14.57 12l-3.857 2.143c0 1.144.771 3.471 3.857 3.643.39.021.767.017 1.119-.004a6.853 6.853 0 0 0-.737-11.975"
          />
          <path
            fill="currentColor"
            d="M5.143 12.035c.48-1.115 1.573-2.606 3.428-2.606.287 0 1.115.086 2.143.428L14.571 12c.57-.428 1.714-1.585 1.714-2.785 0-1.286-.47-2.409-1.277-3.378a6.857 6.857 0 0 0-9.865 6.198"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TUT__a)"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714M14.57 12l-3.857-2.143v4.286z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#TUT__b)"
            d="M14.953 5.807C15.92 7.273 17 10.217 14.57 12l-3.857 2.143c0 1.144.771 3.471 3.857 3.643.39.021.767.017 1.119-.004a6.853 6.853 0 0 0-.737-11.975"
          />
          <path
            fill="url(#TUT__c)"
            d="M5.143 12.035c.48-1.115 1.573-2.606 3.428-2.606.287 0 1.115.086 2.143.428L14.571 12c.57-.428 1.714-1.585 1.714-2.785 0-1.286-.47-2.409-1.277-3.378a6.857 6.857 0 0 0-9.865 6.198"
          />
          <defs>
            <linearGradient
              id="TUT__a"
              x1="12.005"
              x2="12.005"
              y1="5.142"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#036276" />
              <stop offset=".36" stopColor="#066579" />
              <stop offset=".7" stopColor="#039AAB" />
              <stop offset="1" stopColor="#11B7C5" />
            </linearGradient>
            <linearGradient
              id="TUT__b"
              x1="11.996"
              x2="11.996"
              y1="5.142"
              y2="18.856"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00B8C2" />
              <stop offset="1" stopColor="#046179" />
            </linearGradient>
            <linearGradient
              id="TUT__c"
              x1="16.5"
              x2="5.571"
              y1="9.429"
              y2="10.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#005F71" />
              <stop offset="1" stopColor="#02BCCD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTUT.displayName = 'TUT'
