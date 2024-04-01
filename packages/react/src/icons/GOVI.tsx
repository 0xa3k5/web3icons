import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconGOVI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.143 17.378c.056.463.518.75 1.136.562l8.837-5.799c.45-.321.437-.964-.184-1.358l-9.25-6.017c-.213-.138-.54.017-.54.274v2.9l5.637 3.605-5.636 3.604z"
          />
          <path
            fill="currentColor"
            d="M15.429 18.664c-.056.463-.493.75-1.119.561l-8.837-5.63a.943.943 0 0 1 .18-1.548l9.257-5.996c.223-.137.519.017.519.275v2.828L9.71 12.831l5.718 3.605z"
          />
          <path
            fill="currentColor"
            d="m12.78 7.436-2.7 1.748 2.666 1.689 2.674-1.727zm.677 7.761-2.708-1.714-2.606 1.645v.168l2.618 1.671z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GOVI__a)"
            d="M8.142 17.378c.056.463.519.75 1.136.562l8.837-5.799c.45-.321.437-.964-.184-1.358L8.682 4.766c-.214-.138-.54.017-.54.274v2.9l5.636 3.605-5.636 3.604z"
          />
          <path
            fill="url(#GOVI__b)"
            d="M15.428 18.664c-.056.463-.493.75-1.119.561l-8.837-5.63a.943.943 0 0 1 .18-1.548l9.258-5.996c.222-.137.518.017.518.275v2.828l-5.717 3.677 5.717 3.605z"
          />
          <path
            fill="#fff"
            d="m12.78 7.436-2.7 1.748 2.665 1.689 2.675-1.727zm.677 7.761-2.709-1.714-2.606 1.645v.168l2.619 1.671z"
          />
          <defs>
            <linearGradient
              id="GOVI__a"
              x1="4.627"
              x2="11.138"
              y1="3.412"
              y2="17.511"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".26" stopColor="#fff" />
              <stop offset=".84" stopColor="#95C9E3" />
            </linearGradient>
            <linearGradient
              id="GOVI__b"
              x1="13.894"
              x2="18.386"
              y1="3.393"
              y2="19.218"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".38" stopColor="#95C9E3" />
              <stop offset=".94" stopColor="#fff" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGOVI.displayName = 'GOVI'
