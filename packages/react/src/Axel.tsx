import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAxel = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.531 4.616a.596.596 0 0 0-1.062 0l-2.996 5.987 2.845 1.495 2.503-4.902zm1.86 3.715-2.168 4.243 5.815 3.052zm4.423 8.863-7.063-3.711L9.45 18h8.807a.6.6 0 0 0 .557-.806M8.301 18l2.55-4.989-2.837-1.491-2.807 5.614A.6.6 0 0 0 5.74 18z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AXEL__a)">
            <path fill="#F0F3FA" d="M0 0h24v24H0z" />
            <path
              fill="url(#AXEL__b)"
              d="M12.531 4.616a.596.596 0 0 0-1.062 0l-2.996 5.987 2.845 1.495 2.503-4.902zm1.86 3.715-2.168 4.243 5.815 3.052zm4.423 8.863-7.063-3.711L9.45 18h8.807a.6.6 0 0 0 .557-.806M8.301 18l2.55-4.989-2.837-1.491-2.807 5.614A.6.6 0 0 0 5.74 18z"
            />
          </g>
          <defs>
            <linearGradient
              id="AXEL__b"
              x1="8.914"
              x2="18.437"
              y1="11.143"
              y2="16.414"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0642DE" />
              <stop offset="1" stopColor="#0F36AF" />
            </linearGradient>
            <clipPath id="AXEL__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAxel.displayName = 'Axel'

export default IconAxel
