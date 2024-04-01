import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAVA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.157 6.857H7.183c-.275 0-.335.18-.33.27v2.374c-.005.275.201.36.3.356h3.133v7.997c0 .613.582.995.938.995.583.004 1.822.017 2.087 0 .27-.022.403-.296.403-.429V9.857h3.137c.215 0 .283-.214.288-.313 0-.154.008-.87 0-1.654-.013-.78-.57-1.033-.986-1.033z"
          />
        </>
      ) : (
        <>
          <path
            fill="#393969"
            d="M16.157 6.857H7.183c-.275 0-.335.18-.33.27v2.374c-.005.275.201.36.3.356h3.133v7.997c0 .613.582.995.938.995.583.004 1.822.017 2.087 0 .27-.022.403-.296.403-.429V9.857h3.137c.215 0 .283-.214.288-.313 0-.154.008-.87 0-1.654-.013-.78-.57-1.033-.986-1.033z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAVA.displayName = 'AVA'
