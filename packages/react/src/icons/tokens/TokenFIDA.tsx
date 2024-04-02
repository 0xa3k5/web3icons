import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenFIDA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.799 4.14h.415v3.729H11.8zm-3.596 9.759.219.355-3.15 1.886-.215-.351zm7.654.064-.214.356 3.197 1.915.214-.351z"
          />
          <path
            fill="currentColor"
            d="M8.143 9.87 12 7.714l3.857 2.156v4.264L12 16.286l-3.857-2.152zm.428.189 3.43-1.916 3.428 1.916v3.788l-3.425 2.01-3.432-2.01z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="currentColor" d="M11.79 11.876h.416v8.143h-.416z" />
          <path
            fill="currentColor"
            d="m12.257 11.876-.214.351-7.076-4.05.215-.351z"
          />
          <path
            fill="currentColor"
            d="m11.786 11.876.214.351 7.072-4.05-.215-.351z"
          />
          <path
            fill="currentColor"
            d="M4.714 7.95 12 3.857l7.286 4.093v8.104L12 20.143l-7.286-4.089zm.429.193L12 4.286l6.857 3.857v7.714L12 19.714l-6.857-3.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#5F60C7"
            d="M11.798 4.14h.416v3.729h-.416zm-3.596 9.759.219.355-3.15 1.886-.214-.351zm7.655.064-.215.356 3.198 1.915.214-.351z"
          />
          <path
            fill="url(#FIDA__a)"
            d="M8.142 9.87 12 7.714l3.857 2.156v4.264L12 16.286l-3.858-2.152zm.429.189L12 8.143l3.428 1.916v3.788l-3.424 2.01-3.433-2.01z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="#8081EE" d="M11.79 11.876h.415v8.143h-.415z" />
          <path
            fill="#8081EE"
            d="m12.257 11.876-.215.351-7.075-4.05.214-.351z"
          />
          <path
            fill="#8081EE"
            d="m11.785 11.876.215.351 7.071-4.05-.214-.351z"
          />
          <path
            fill="#8081EE"
            d="M4.714 7.95 12 3.857l7.285 4.093v8.104L12 20.143l-7.286-4.089zm.428.193L12 4.286l6.857 3.857v7.714L12 19.714l-6.858-3.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="FIDA__a"
              x1="13.861"
              x2="6.25"
              y1="2.277"
              y2="19.548"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#86E0E9" />
              <stop offset="1" stopColor="#259AC1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenFIDA.displayName = 'FIDA'
