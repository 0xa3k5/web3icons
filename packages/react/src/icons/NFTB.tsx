import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconNFTB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.857 17.571v.857H8.143v-.857zm0-12v11.143H8.143V5.571zM15 6.428H9v9.429h6z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NFTB__a)"
            d="M15.857 17.571v.857H8.143v-.857zm0-12v11.143H8.143V5.571zM15 6.428H9v9.429h6z"
          />
          <defs>
            <linearGradient
              id="NFTB__a"
              x1="10.873"
              x2="16.161"
              y1="6.146"
              y2="12.771"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18D3FD" />
              <stop offset="1" stopColor="#DE04FF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconNFTB.displayName = 'NFTB'
