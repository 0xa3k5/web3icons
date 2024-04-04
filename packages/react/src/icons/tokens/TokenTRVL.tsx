import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTRVL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 12c0 .429-.214 2.152-2.575 2.152-1.676 0-2.983-1.029-3.707-1.616a.035.035 0 0 0-.043 0 .034.034 0 0 0-.009.047c.591.729 1.62 2.019 1.62 3.703 0 1.221-1.629 2.571-2.143 2.571V12zM7.714 9.857c1.676 0 2.98 1.025 3.708 1.616a.04.04 0 0 0 .025.012.04.04 0 0 0 .026-.012.034.034 0 0 0 0-.047c-.591-.729-1.62-2.031-1.62-3.712 0-2.57 1.933-2.57 2.147-2.57V12H5.143c0-.214 0-2.143 2.571-2.143"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TRVL__a)"
            d="M18.857 12c0 .429-.214 2.152-2.576 2.152-1.676 0-2.983-1.029-3.707-1.616a.035.035 0 0 0-.043 0 .034.034 0 0 0-.008.047c.591.729 1.62 2.019 1.62 3.703 0 1.221-1.629 2.571-2.143 2.571V12z"
          />
          <path
            fill="url(#TRVL__b)"
            d="M7.714 9.857c1.676 0 2.979 1.025 3.707 1.616a.04.04 0 0 0 .026.012.04.04 0 0 0 .026-.012.034.034 0 0 0 0-.047c-.592-.729-1.62-2.031-1.62-3.712 0-2.57 1.932-2.57 2.147-2.57V12H5.143c0-.214 0-2.143 2.571-2.143"
          />
          <defs>
            <linearGradient
              id="TRVL__a"
              x1="17.485"
              x2="5.151"
              y1="5.503"
              y2="17.494"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8FA3A4" />
              <stop offset="1" stopColor="#C1D0D1" />
            </linearGradient>
            <linearGradient
              id="TRVL__b"
              x1="12.004"
              x2="7.033"
              y1="5.143"
              y2="12.343"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7D5D6" />
              <stop offset="1" stopColor="#5A6966" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenTRVL.displayName = 'TRVL'
