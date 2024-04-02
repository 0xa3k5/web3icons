import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPWR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.857a6.86 6.86 0 0 0 6.591-8.747q.052.296.052.604c0 2.743-2.713 3.429-4.072 3.429H9.428L9 16.286H6.643A6.86 6.86 0 0 0 12 18.857"
          />
          <path
            fill="currentColor"
            d="M6.471 16.059A6.857 6.857 0 1 1 18.3 9.29c-.394-.664-1.187-1.148-2.657-1.148H9.428l-2.142 2.143h7.285v-.857l2.572 1.714-2.572 1.714V12H7.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#PWR__a)"
            d="M12 18.857a6.86 6.86 0 0 0 6.592-8.747q.051.296.051.604c0 2.743-2.713 3.429-4.071 3.429H9.429L9 16.286H6.643A6.86 6.86 0 0 0 12 18.857"
          />
          <path
            fill="url(#PWR__b)"
            d="M6.472 16.059A6.858 6.858 0 1 1 18.3 9.29c-.394-.664-1.187-1.148-2.657-1.148H9.43l-2.143 2.143h7.286v-.857l2.571 1.714-2.571 1.714V12H7.286z"
          />
          <defs>
            <linearGradient
              id="PWR__a"
              x1="7.311"
              x2="19.141"
              y1="16.171"
              y2="12.855"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D4D4D" />
              <stop offset="1" stopColor="#1A1A1A" />
            </linearGradient>
            <linearGradient
              id="PWR__b"
              x1="6.215"
              x2="17.786"
              y1="7.929"
              y2="8.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#008CC4" />
              <stop offset="1" stopColor="#00A8F8" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenPWR.displayName = 'PWR'
