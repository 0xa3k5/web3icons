import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconCUDOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.452 6.54A7.715 7.715 0 1 0 6.549 17.46 7.715 7.715 0 0 0 17.452 6.54m-5.88 12.317a6.82 6.82 0 0 1-4.607-2.113A6.86 6.86 0 0 1 5.143 12a6.86 6.86 0 0 1 1.822-4.749 6.8 6.8 0 0 1 4.607-2.108V7.71a4.26 4.26 0 0 0-2.769 1.384A4.27 4.27 0 0 0 7.714 12c0 1.071.365 2.108 1.09 2.901a4.25 4.25 0 0 0 2.768 1.385zm5.451-2.113c-1.213 1.286-2.828 2.01-4.594 2.113v-2.571a4.303 4.303 0 0 0 2.755-7.196 4.23 4.23 0 0 0-2.755-1.376V5.143a6.75 6.75 0 0 1 5.987 4.303 6.92 6.92 0 0 1-1.393 7.298M12 15.43a3.429 3.429 0 1 0 0-6.858 3.429 3.429 0 0 0 0 6.858"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#CUDOS__a)"
            d="M17.451 6.54A7.716 7.716 0 1 0 6.548 17.46 7.716 7.716 0 0 0 17.451 6.54m-5.88 12.317a6.82 6.82 0 0 1-4.607-2.113A6.86 6.86 0 0 1 5.143 12a6.86 6.86 0 0 1 1.821-4.749 6.8 6.8 0 0 1 4.607-2.108V7.71a4.26 4.26 0 0 0-2.768 1.384A4.27 4.27 0 0 0 7.714 12c0 1.071.364 2.108 1.089 2.901a4.25 4.25 0 0 0 2.768 1.385zm5.452-2.113c-1.213 1.286-2.829 2.01-4.595 2.113v-2.571a4.303 4.303 0 0 0 2.756-7.196 4.23 4.23 0 0 0-2.756-1.376V5.143a6.75 6.75 0 0 1 5.987 4.303 6.92 6.92 0 0 1-1.392 7.298M12 15.43a3.429 3.429 0 1 0 0-6.858 3.429 3.429 0 0 0 0 6.858"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="CUDOS__a"
              x1="4.603"
              x2="19.144"
              y1="15.334"
              y2="8.396"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2D9DFD" />
              <stop offset="1" stopColor="#36D5FD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCUDOS.displayName = 'CUDOS'
