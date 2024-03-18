import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLm = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.143 8.143 2.571 1.285v4.715l-2.57 1.285zm13.714.428-2.571 1.286v4.714l2.571 1.286zm-11.143.857-2.57-1.285L12 3.857l6.429 3.857L15.857 9 12 6.857z"
          />
          <path
            fill="currentColor"
            d="m16.286 14.571 2.571 1.286L12 20.143l-6.428-3.858L8.143 15 12 17.143zM15 9.857H9l3 1.929z"
          />
          <path fill="currentColor" d="M12 15.428v-3.642l3-1.93z" />
        </>
      ) : (
        <>
          <path
            fill="url(#LM__a)"
            d="m5.143 8.143 2.571 1.285v4.715l-2.571 1.285z"
          />
          <path
            fill="url(#LM__b)"
            d="m18.857 8.571-2.572 1.286v4.714l2.572 1.286z"
          />
          <path
            fill="#004F9F"
            d="M7.714 9.428 5.143 8.143 12 3.857l6.428 3.857L15.857 9 12 6.857z"
          />
          <path
            fill="#009945"
            d="m16.285 14.571 2.572 1.286L12 20.143l-6.43-3.858L8.143 15 12 17.143z"
          />
          <path fill="#0174BC" d="M15 9.857H9l3 1.929z" />
          <path fill="#024531" d="M12 15.428v-3.642l3-1.93z" />
          <defs>
            <linearGradient
              id="LM__a"
              x1="12"
              x2="12"
              y1="3.857"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1E5EA8" />
              <stop offset="1" stopColor="#163F71" />
            </linearGradient>
            <linearGradient
              id="LM__b"
              x1="12"
              x2="12"
              y1="3.857"
              y2="20.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#03783C" />
              <stop offset="1" stopColor="#015429" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLm.displayName = 'Lm'

export default IconLm
