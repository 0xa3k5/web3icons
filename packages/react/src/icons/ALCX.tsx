import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconALCX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.714a7.714 7.714 0 1 0 0-15.428 7.714 7.714 0 0 0 0 15.428m0-.428a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.816 6.099V4.64h.428v1.457l4.899 3.9v3.888l-.827.685.981 1.715h-3.163l-2.1 1.731-2.168-1.731H6.857l.9-1.676-.9-.724V9.994l4.959-3.9zm.214.372-4.616 3.635 1.912 1.534 2.708-4.577 2.644 4.641 1.912-1.598zm4.684 4.089-1.817 1.521 1.204 2.117.613-.514zM9.66 11.91l2.584 2.079v1.868h4.316l-4.534-7.941zm2.584 4.376v1.002l1.217-1.002zm-.428 1.011v-3.103l-4.53-3.643v3.133zM8.1 14.88l-.527.977h1.761z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ALCX__a)">
            <path fill="url(#ALCX__b)" d="M0 0h24v24H0z" />
            <path
              fill="#ECBE9D"
              d="M12 19.714a7.713 7.713 0 1 0 0-15.427 7.713 7.713 0 0 0 0 15.427m0-.428a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
              fillRule="evenodd"
              clipRule="evenodd"
            />
            <path
              fill="#ECBE9D"
              d="M11.816 6.099V4.64h.429v1.457l4.898 3.9v3.888l-.827.685.982 1.715h-3.163l-2.1 1.731-2.169-1.731H6.858l.9-1.676-.9-.724V9.994l4.958-3.9zm.214.372-4.615 3.635 1.911 1.534 2.709-4.577 2.644 4.641 1.911-1.598zm4.685 4.089-1.817 1.521 1.204 2.117.613-.514zM9.66 11.91l2.585 2.079v1.868h4.315l-4.534-7.941zm2.585 4.376v1.002l1.217-1.002zm-.429 1.011v-3.103l-4.53-3.643v3.133zM8.1 14.88l-.527.977h1.762z"
            />
          </g>
          <defs>
            <linearGradient
              id="ALCX__b"
              x1="4.466"
              x2="29.207"
              y1="4.161"
              y2="32.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
            <clipPath id="ALCX__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconALCX.displayName = 'ALCX'
