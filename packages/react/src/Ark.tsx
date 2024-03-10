import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconArk = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.966 9.741 4.5 17.711 12 5.356l7.5 12.429zm1.077 3.116h-2.331l1.2-1.285 1.138 1.285zM8.543 15l1.33-1.286h4.036L15.273 15z"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#ARK__a)">
            <path fill="#F70000" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M11.966 9.741 4.5 17.711 12 5.356l7.5 12.429zm-1.254 3.116 1.2-1.285 1.138 1.285zM8.543 15l1.33-1.286h4.036L15.273 15z"
            />
          </g>
          <defs>
            <clipPath id="ARK__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconArk.displayName = 'Ark'

export default IconArk
