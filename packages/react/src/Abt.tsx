import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAbt = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12 4.286 6.856 3.857v7.714l-6.857 3.857-6.856-3.857V8.143zm6.213 3.977-6-3.374v6.75zm.214.362-6 3.375 6 3.374zm-.214 7.111-6-3.375v6.75zm-6.428 3.375-6-3.375 6-3.374zm0-7.473-6-3.375 6-3.374zM5.572 8.625 11.57 12l-6 3.374z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="m12 7.845 3.614 6.099-3.615 2.033-3.613-2.033zm0 .836-3.029 5.11L12 15.495l3.03-1.704z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ABT__a)">
            <path fill="url(#ABT__b)" d="M0 0h24v24H0z" />
            <path
              fill="#000"
              d="m12 4.286 6.856 3.857v7.714l-6.857 3.857-6.856-3.857V8.143zm6.213 3.977-6-3.374v6.75zm.214.362-6 3.375 6 3.374zm-.214 7.111-6-3.375v6.75zm-6.428 3.375-6-3.375 6-3.374zm0-7.473-6-3.375 6-3.374zM5.572 8.625 11.57 12l-6 3.374z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
            <path
              fill="#000"
              d="m12 7.845 3.614 6.099-3.615 2.033-3.613-2.033zm0 .836-3.029 5.11L12 15.495l3.03-1.704z"
            />
          </g>
          <defs>
            <linearGradient
              id="ABT__b"
              x1="0"
              x2="24"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06EFA0" />
              <stop offset="1" stopColor="#01FAFC" />
            </linearGradient>
            <clipPath id="ABT__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAbt.displayName = 'Abt'

export default IconAbt
