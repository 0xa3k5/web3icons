import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAioz = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m1.294-3.621V10.34l-4.551 5.31a.65.65 0 0 1-.42.206.58.58 0 0 1-.609-.574v-.017c0-.133.052-.266.142-.373l5.571-6.527a.66.66 0 0 1 .497-.223.64.64 0 0 1 .647.63v6.463a.63.63 0 0 1-.643.621.627.627 0 0 1-.634-.621"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AIOZ__a)">
            <path fill="url(#AIOZ__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714m1.294-3.621V10.34l-4.551 5.31a.65.65 0 0 1-.42.206.58.58 0 0 1-.609-.574v-.017c0-.133.052-.266.142-.373l5.571-6.527a.66.66 0 0 1 .497-.223.64.64 0 0 1 .647.63v6.463a.63.63 0 0 1-.643.621.627.627 0 0 1-.634-.621"
            />
          </g>
          <defs>
            <linearGradient
              id="AIOZ__b"
              x1="4.466"
              x2="29.207"
              y1="4.161"
              y2="32.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
            <clipPath id="AIOZ__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAioz.displayName = 'Aioz'

export default IconAioz
