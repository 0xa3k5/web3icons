import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAlgb = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.786 3.857v9.215l-7.072 4.07zM12.214 3.857v9.215l7.072 4.07zM12 13.5 4.93 17.572h14.143z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ALGB__a)">
            <path fill="url(#ALGB__b)" d="M0 0h24v24H0z" />
            <path fill="#B41870" d="M11.786 3.857v9.215l-7.072 4.07z" />
            <path fill="#00CAB2" d="M12.214 3.857v9.215l7.072 4.07z" />
            <path fill="#5D32ED" d="M12 13.5 4.93 17.572h14.143z" />
          </g>
          <defs>
            <linearGradient
              id="ALGB__b"
              x1="4.466"
              x2="29.207"
              y1="4.161"
              y2="32.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
            <clipPath id="ALGB__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAlgb.displayName = 'Algb'

export default IconAlgb
