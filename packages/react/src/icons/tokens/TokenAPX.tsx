import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenAPX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.717 8.183a12.8 12.8 0 0 1-4.582 5.51 12.76 12.76 0 0 1-6.821 2.175A6.89 6.89 0 0 1 10.653 5.28a6.86 6.86 0 0 1 7.064 2.904M18 8.14v-.853a.05.05 0 0 1 .024-.043l.764-.432a.05.05 0 0 1 .048 0q.01.006.017.018.005.012.003.025v.853q.002.015-.003.025l-.017.019-.765.432a.047.047 0 0 1-.065-.019zm-.428 7.84a6.9 6.9 0 0 0 1.284-4.007c0-1.06-.245-2.104-.716-3.052-2.146 2.778-3.507 6.021-3.94 9.508 1.359-.465 2.538-1.28 3.372-2.449"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#APX__a)"
            d="M17.716 8.183a12.8 12.8 0 0 1-4.582 5.51 12.76 12.76 0 0 1-6.82 2.175A6.89 6.89 0 0 1 10.651 5.28a6.86 6.86 0 0 1 7.064 2.904M18 8.14v-.853q0-.013.007-.025l.018-.018.763-.432a.046.046 0 0 1 .065.018q.006.012.004.025v.853q.001.015-.004.025l-.017.019-.764.432a.047.047 0 0 1-.066-.019zm-.427 7.84a6.9 6.9 0 0 0 1.284-4.007c0-1.06-.245-2.104-.716-3.052-2.147 2.778-3.508 6.021-3.94 9.508 1.358-.465 2.537-1.28 3.372-2.449"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="APX__a"
              x1="7.703"
              x2="16.264"
              y1="7.988"
              y2="17.122"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AA42FC" />
              <stop offset="1" stopColor="#5A49FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenAPX.displayName = 'APX'
