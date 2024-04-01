import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTOPIA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 5.571h4.714v4.286h2.572V5.571H18v12.857h-4.714v-4.285h-2.572v4.285H6z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TOPIA__a)"
            d="M6 5.571h4.714v4.286h2.572V5.571H18v12.857h-4.714v-4.285h-2.572v4.285H6z"
          />
          <defs>
            <linearGradient
              id="TOPIA__a"
              x1="7.766"
              x2="16.301"
              y1="6.933"
              y2="16.492"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA708" />
              <stop offset=".25" stopColor="#D9FE35" />
              <stop offset=".51" stopColor="#9CFDDE" />
              <stop offset=".73" stopColor="#E4B685" />
              <stop offset="1" stopColor="#F66AFF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTOPIA.displayName = 'TOPIA'
