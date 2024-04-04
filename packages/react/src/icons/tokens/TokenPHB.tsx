import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPHB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.987 15.32c.015-.03.049-.012.064 0l.311 3.642-.343.323-.36-.323c.103-1.2.313-3.612.328-3.641m-.703-2.657.328-.407.398.844.404-.844.328.407-.732 1.576z"
          />
          <path
            fill="currentColor"
            d="m11.665 11.803.351-.36.357.36-.357.654zm-6.357.277-.318-.93 6.477 2.724.412.72-.563 4.068-.493-.457.815-3.611zm13.384 0 .32-.93-6.478 2.724-.413.72.564 4.068.492-.457-.814-3.611zm-8.442-.454-6.82-4.77.679 1.862 6.549 3.672zm3.5 0 6.822-4.77-.68 1.862-6.548 3.672zm-8.94-.972-.512-1.417 6.548 3.516.403.75zm14.38 0 .512-1.417-6.548 3.516-.403.75z"
          />
        </>
      ) : (
        <>
          <path
            fill="#E61E28"
            d="M11.987 15.32c.015-.03.049-.012.064 0l.311 3.642-.343.323-.36-.323c.103-1.2.313-3.612.328-3.641"
          />
          <path
            fill="url(#PHB__a)"
            d="m11.284 12.664.328-.407.398.844.404-.844.328.407-.732 1.576z"
          />
          <path
            fill="url(#PHB__b)"
            d="m11.665 11.803.351-.36.357.36-.357.654z"
          />
          <path
            fill="url(#PHB__c)"
            d="m5.308 12.08-.318-.93 6.477 2.724.412.72-.563 4.068-.493-.457.815-3.611z"
          />
          <path
            fill="url(#PHB__d)"
            d="m18.692 12.08.32-.93-6.478 2.724-.413.72.564 4.068.492-.457-.814-3.611z"
          />
          <path
            fill="url(#PHB__e)"
            d="m10.25 11.626-6.82-4.77.679 1.862 6.549 3.672z"
          />
          <path
            fill="url(#PHB__f)"
            d="m13.75 11.626 6.822-4.77-.68 1.862-6.548 3.672z"
          />
          <path
            fill="url(#PHB__g)"
            d="m4.81 10.654-.512-1.417 6.548 3.516.403.75z"
          />
          <path
            fill="url(#PHB__h)"
            d="m19.19 10.654.512-1.417-6.548 3.516-.403.75z"
          />
          <defs>
            <linearGradient
              id="PHB__a"
              x1="11.998"
              x2="11.998"
              y1="6.857"
              y2="19.285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9231E" />
              <stop offset="1" stopColor="#E42021" />
            </linearGradient>
            <linearGradient
              id="PHB__b"
              x1="12"
              x2="12"
              y1="6.857"
              y2="19.285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E53A2D" />
              <stop offset="1" stopColor="#E82620" />
            </linearGradient>
            <linearGradient
              id="PHB__c"
              x1="3.429"
              x2="15.132"
              y1="6.857"
              y2="19.522"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F0341E" />
              <stop offset="1" stopColor="#E31D26" />
            </linearGradient>
            <linearGradient
              id="PHB__d"
              x1="20.572"
              x2="8.868"
              y1="6.857"
              y2="19.523"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F0341E" />
              <stop offset="1" stopColor="#E31D26" />
            </linearGradient>
            <linearGradient
              id="PHB__e"
              x1="3.726"
              x2="19.986"
              y1="6.857"
              y2="20.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7691F" />
              <stop offset="1" stopColor="#E9342A" />
            </linearGradient>
            <linearGradient
              id="PHB__f"
              x1="20.276"
              x2="4.015"
              y1="6.857"
              y2="20.01"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7691F" />
              <stop offset="1" stopColor="#E9342A" />
            </linearGradient>
            <linearGradient
              id="PHB__g"
              x1="3.429"
              x2="21.993"
              y1="6.857"
              y2="16.074"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EE511F" />
              <stop offset="1" stopColor="#EE1B21" />
            </linearGradient>
            <linearGradient
              id="PHB__h"
              x1="19.702"
              x2="12.721"
              y1="9.237"
              y2="13.332"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EE511F" />
              <stop offset="1" stopColor="#EE1B21" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenPHB.displayName = 'PHB'
