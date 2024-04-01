import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconIDV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.429 7.714h-.857v2.443a3.429 3.429 0 1 0 .085 4.432L8.2 13.76A2.572 2.572 0 1 1 8.538 12h.892zM18 15.857a3.429 3.429 0 1 0-2.636-5.623l.485.785a2.571 2.571 0 1 1-.42 1.324l-.686-.986a3.4 3.4 0 0 0-.171 1.072v3.428h.857V14.7A3.42 3.42 0 0 0 18 15.857"
          />
          <path
            fill="currentColor"
            d="M2.597 12a3.429 3.429 0 0 0 6.06 2.593L8.2 13.76A2.572 2.572 0 0 1 3.464 12z"
          />
          <path
            fill="currentColor"
            d="M12 15.857A3.429 3.429 0 1 0 12 9a3.429 3.429 0 0 0 0 6.857M12 15a2.571 2.571 0 1 0 0-5.143A2.571 2.571 0 0 0 12 15"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#IDV__a)"
            d="M9.429 7.714h-.857v2.443a3.429 3.429 0 1 0 .085 4.432L8.2 13.76A2.572 2.572 0 1 1 8.538 12h.892z"
          />
          <path
            fill="url(#IDV__b)"
            d="M18 15.857a3.429 3.429 0 1 0-2.636-5.623l.485.785a2.571 2.571 0 1 1-.42 1.324l-.686-.986a3.4 3.4 0 0 0-.171 1.072v3.428h.857V14.7A3.42 3.42 0 0 0 18 15.857"
          />
          <path
            fill="#14B4FE"
            d="M2.597 12a3.429 3.429 0 0 0 6.06 2.593L8.2 13.76A2.572 2.572 0 0 1 3.464 12z"
          />
          <path
            fill="#1EBCFF"
            d="M12 15.857A3.429 3.429 0 1 0 12 9a3.429 3.429 0 0 0 0 6.857M12 15a2.571 2.571 0 1 0 0-5.143A2.571 2.571 0 0 0 12 15"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="IDV__a"
              x1="16.125"
              x2="16.803"
              y1="9.644"
              y2="13.107"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#14B4FE" />
              <stop offset=".66" stopColor="#1A2C58" />
            </linearGradient>
            <linearGradient
              id="IDV__b"
              x1="-.377"
              x2="3.291"
              y1="14.839"
              y2="8.468"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#122543" />
              <stop offset=".45" stopColor="#173C66" />
              <stop offset="1" stopColor="#5FC0F0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconIDV.displayName = 'IDV'
