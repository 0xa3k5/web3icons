import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconMana = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.857 9.428v5.143h4.43zm-4.142 5.143h4.142V9.428zm2.171 3A7.13 7.13 0 0 0 12 18.857a7.13 7.13 0 0 0 4.114-1.286z"
          />
          <path
            fill="currentColor"
            d="M5.715 14.571q.322.691.8 1.286h7.83V14.57zm8.87-1.714v3.857h3.144z"
          />
          <path
            fill="currentColor"
            d="M11.445 16.714h3.14v-3.857zm3.14-5.4a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428M9.857 8.571a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
        </>
      ) : (
        <>
          <path fill="url(#MANA__a)" d="M9.858 9.428v5.143h4.43z" />
          <path fill="#fff" d="M5.716 14.571h4.142V9.428z" />
          <path
            fill="#FF2D55"
            d="M7.886 17.571A7.13 7.13 0 0 0 12 18.857a7.13 7.13 0 0 0 4.115-1.286z"
          />
          <path
            fill="#FFBC5B"
            d="M5.716 14.571q.322.691.799 1.286h7.83V14.57z"
          />
          <path fill="url(#MANA__b)" d="M14.586 12.857v3.857h3.144z" />
          <path fill="#fff" d="M11.445 16.714h3.14v-3.857z" />
          <path
            fill="#FFC95B"
            d="M14.586 11.314a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428M9.858 8.571a.857.857 0 1 0 0-1.714.857.857 0 0 0 0 1.714"
          />
          <defs>
            <linearGradient
              id="MANA__a"
              x1="11.913"
              x2="11.913"
              y1="6.857"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A524B3" />
              <stop offset="1" stopColor="#FF2D55" />
            </linearGradient>
            <linearGradient
              id="MANA__b"
              x1="11.719"
              x2="11.719"
              y1="6.857"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#A524B3" />
              <stop offset="1" stopColor="#FF2D55" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMana.displayName = 'Mana'

export default IconMana
