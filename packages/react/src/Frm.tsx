import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconFrm = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.571 15.433.643.373.643-.377v-2.786l9.591-5.336-1.285-.866-8.306 4.47v-1.8l7.02-3.53-1.286-.867-7.02 3.557z"
          />
          <path
            fill="currentColor"
            d="m15.428 8.923-7.285 4.114v1.95l7.285-4.328zM9 17.584l-1.286-.865 7.714-4.762v1.736L9 17.593z"
          />
          <path
            fill="currentColor"
            d="M17.357 8.057 18 8.47v6.951l-6.514 3.866-1.286-.866 6.514-3.866V8.486l.643-.433z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#FRM__a)"
            d="m5.571 15.433.643.373.643-.377v-2.786l9.591-5.336-1.285-.866-8.306 4.47v-1.8l7.02-3.53-1.286-.867-7.02 3.557z"
          />
          <path
            fill="url(#FRM__b)"
            d="m15.428 8.923-7.285 4.114v1.95l7.285-4.328z"
          />
          <path
            fill="#CCA362"
            d="m9 17.584-1.286-.865 7.714-4.762v1.736L9 17.593z"
          />
          <path
            fill="#CCA362"
            d="M17.357 8.057 18 8.47v6.951l-6.514 3.866-1.286-.866 6.514-3.866V8.486l.643-.433z"
          />
          <defs>
            <linearGradient
              id="FRM__a"
              x1="4.935"
              x2="17.342"
              y1="15.283"
              y2="8.365"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".05" stopColor="#C5C3C5" />
              <stop offset=".3" stopColor="#F2F2F2" />
              <stop offset=".9" stopColor="#BEBBBE" />
            </linearGradient>
            <linearGradient
              id="FRM__b"
              x1="3.714"
              x2="22.924"
              y1="17.164"
              y2="11.111"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".2" stopColor="#CAA467" />
              <stop offset=".62" stopColor="#ECC77C" />
              <stop offset=".92" stopColor="#CCA362" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconFrm.displayName = 'Frm'

export default IconFrm
