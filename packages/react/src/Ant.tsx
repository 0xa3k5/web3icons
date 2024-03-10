import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAnt = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.342 6.663a4.85 4.85 0 0 1 1.91-.403l-.634-.648s2.554-.44 5.82 1.592c0 0 .046.104 0 .4 0 0 1.548.688 1.671 2.016.132 1.328-.68 2.088-1.338 2.192 0 0 .34-.544-.186-.84a.7.7 0 0 0-.38-.08c-1.005 0-1.122 1.176-1.122 1.176.039 1.864 3.026 1.864 3.775 1.864-.635 2.47-3.498 4.497-6.352 4.497-2.658 0-6.935-1.902-6.935-6.497 0-1.463 1.162-4.137 3.77-5.27m6.136.805c-.163.168-.302.24-.34.264l-.016.008c-.921-.208-1.254-.688-1.254-.688a4.2 4.2 0 0 1 2.229.56s-.31-.104-.619-.144"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ANT__a)">
            <path fill="url(#ANT__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M9.342 6.663a4.85 4.85 0 0 1 1.91-.403l-.634-.648s2.554-.44 5.82 1.592c0 0 .046.104 0 .4 0 0 1.548.688 1.671 2.016.132 1.328-.68 2.088-1.338 2.192 0 0 .34-.544-.186-.84a.7.7 0 0 0-.38-.08c-1.005 0-1.122 1.176-1.122 1.176.039 1.864 3.026 1.864 3.775 1.864-.635 2.47-3.498 4.497-6.352 4.497-2.658 0-6.935-1.902-6.935-6.497 0-1.463 1.162-4.137 3.77-5.27m6.136.805c-.163.168-.302.24-.34.264l-.016.008c-.921-.208-1.254-.688-1.254-.688a4.2 4.2 0 0 1 2.229.56s-.31-.104-.619-.144"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <linearGradient
              id="ANT__b"
              x1="12"
              x2="12"
              y1="0"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#02E8F7" />
              <stop offset="1" stopColor="#03CCFD" />
            </linearGradient>
            <clipPath id="ANT__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAnt.displayName = 'Ant'

export default IconAnt
