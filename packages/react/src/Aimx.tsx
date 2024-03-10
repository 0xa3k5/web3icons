import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAimx = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.092 5.97-.056.043c-.814.848-.304 2.747-.75 4.243-.42 1.414-2.576 2.22-3.489 3.085a2.139 2.139 0 1 0 2.936 3.095h.008c.163-.159.288-.356.369-.57l.022-.06v-.022q.052-.13.085-.266c.412-1.508.154-4.071.506-4.988.441-1.153 1.238-1.736 1.903-2.374.458-.438.75-.9.681-1.406v-.03a1.287 1.287 0 0 0-2.216-.75m4.337 9.887a1.286 1.286 0 1 0 2.571 0 1.286 1.286 0 0 0-2.571 0"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AIMX__a)">
            <path fill="url(#AIMX__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="m11.092 5.97-.056.043c-.814.848-.304 2.747-.75 4.243-.42 1.414-2.576 2.22-3.489 3.085a2.139 2.139 0 1 0 2.936 3.095h.008c.163-.159.288-.356.369-.57l.022-.06v-.022q.052-.13.085-.266c.412-1.508.154-4.071.506-4.988.441-1.153 1.238-1.736 1.903-2.374.458-.438.75-.9.681-1.406v-.03a1.287 1.287 0 0 0-2.216-.75m4.337 9.887a1.286 1.286 0 1 0 2.571 0 1.286 1.286 0 0 0-2.571 0"
            />
          </g>
          <defs>
            <linearGradient
              id="AIMX__b"
              x1="3.523"
              x2="20.687"
              y1="3.917"
              y2="20.781"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#135554" />
              <stop offset="1" stopColor="#00A790" />
            </linearGradient>
            <clipPath id="AIMX__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAimx.displayName = 'Aimx'

export default IconAimx
