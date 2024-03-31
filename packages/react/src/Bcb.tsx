import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconBCB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m11.143 9-.857.857v1.715l1.5-1.715h1.286l-.858.857h-.428l-.857.857h3.214l-.857 1.286h-2.143l-.857.857h3.857l1.928-3h-2.357L15.43 9z"
          />
          <path
            fill="currentColor"
            d="m8.7 9.039.729.728v.609l-.558-.557-1.127 3.201 2.25 2.434.33-.883h.459l-.634 1.69-2.893-3.138 1.44-4.084zm2.13 5.533-.664 1.774 4.35-.729.347-1.046h-.45l-.223.67-3.364.556.467-1.226z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BCB__a)"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#fff"
            d="m11.142 9-.857.857v1.715l1.5-1.715h1.286l-.857.857h-.429l-.857.857h3.214l-.857 1.286h-2.143l-.857.857h3.857l1.929-3h-2.357L15.428 9z"
          />
          <path
            fill="url(#BCB__b)"
            d="m8.7 9.039.728.728v.609l-.557-.557-1.127 3.201 2.25 2.434.33-.883h.458l-.634 1.69-2.893-3.138 1.44-4.084zm2.13 5.533-.665 1.774 4.35-.729.347-1.046h-.45l-.222.67-3.365.556.467-1.226z"
          />
          <defs>
            <linearGradient
              id="BCB__a"
              x1="4.928"
              x2="19.071"
              y1="12.429"
              y2="12.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0387FA" />
              <stop offset="1" stopColor="#01FEFF" />
            </linearGradient>
            <linearGradient
              id="BCB__b"
              x1="8.357"
              x2="14.571"
              y1="10.071"
              y2="15.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11F6FC" />
              <stop offset="1" stopColor="#017EF2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBCB.displayName = 'BCB'
