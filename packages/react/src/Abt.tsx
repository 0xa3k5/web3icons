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
          <path
            fill="url(#ABT__a)"
            d="m11.999 4.286 6.856 3.857v7.714L12 19.714l-6.856-3.857V8.143zm6.213 3.977L12.213 4.89v6.75zm.215.362-6 3.375 6 3.374zm-.215 7.111-5.999-3.375v6.75zm-6.427 3.375-6-3.375 6-3.374zm0-7.473-6-3.375 6-3.374zM5.57 8.625l6 3.375-6 3.374z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#ABT__b)"
            d="m12 7.845 3.613 6.099-3.614 2.033-3.613-2.033zm0 .836-3.029 5.11 3.028 1.704 3.029-1.704z"
          />
          <defs>
            <linearGradient
              id="ABT__a"
              x1="5.143"
              x2="18.855"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06EFA0" />
              <stop offset="1" stopColor="#01FAFC" />
            </linearGradient>
            <linearGradient
              id="ABT__b"
              x1="5.143"
              x2="18.855"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#06EFA0" />
              <stop offset="1" stopColor="#01FAFC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAbt.displayName = 'Abt'

export default IconAbt
