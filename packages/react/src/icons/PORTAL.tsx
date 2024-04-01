import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPORTAL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.428 8.143 12 4.286 5.57 8.143v7.714L12 19.714l6.428-3.857zm-9-.572v8.901l2.144-.992v-5.037l1.285-1.048v4.228l-1.259.955L15 16.472v-5.938l-2.143-1.142v.003z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PORTAL__a)"
            d="M18.428 8.143 12 4.286 5.57 8.143v7.714L12 19.714l6.428-3.857zm-9-.572v8.901l2.144-.992v-5.037l1.285-1.048v4.228l-1.259.955L15 16.472v-5.938l-2.143-1.142v.003z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="PORTAL__a"
              x1="8.245"
              x2="19.337"
              y1="13.344"
              y2="16.52"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#064FAB" />
              <stop offset="1" stopColor="#180043" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconPORTAL.displayName = 'PORTAL'
