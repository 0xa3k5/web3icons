import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLPOOL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.356 16.663 7.62 8.829l.857-1.526 7.513 7.718z"
          />
          <path
            fill="currentColor"
            d="M8.143 7.286c.116 0 .227.004.343.013l-.673 1.718a3 3 0 1 0 3.321 3.214l.052-.128V12a4.693 4.693 0 1 1 4.166 4.663l.638-1.637-.043-.026a3 3 0 1 0-3.085-3.146l-.005.017V12a4.714 4.714 0 1 1-4.714-4.714"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LPOOL__a)"
            d="M15.356 16.663 7.62 8.829l.857-1.526 7.513 7.718z"
          />
          <path
            fill="url(#LPOOL__b)"
            d="M8.143 7.286c.116 0 .227.004.343.013l-.673 1.718a3 3 0 1 0 3.321 3.214l.052-.128V12a4.693 4.693 0 1 1 4.166 4.663l.638-1.637-.043-.026a3 3 0 1 0-3.085-3.146l-.005.017V12a4.714 4.714 0 1 1-4.714-4.714"
          />
          <defs>
            <linearGradient
              id="LPOOL__a"
              x1="6.001"
              x2="11.482"
              y1="8.84"
              y2="19.928"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".18" stopColor="#FAA31C" />
              <stop offset=".49" stopColor="#312D2E" />
              <stop offset=".89" stopColor="#FE4C38" />
            </linearGradient>
            <linearGradient
              id="LPOOL__b"
              x1="4.312"
              x2="19.826"
              y1="13.598"
              y2="11.974"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".12" stopColor="#F9C213" />
              <stop offset=".79" stopColor="#FF443B" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenLPOOL.displayName = 'LPOOL'
