import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGswap = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m16.5 8.143.429-1.714h-7.5c-.57 0-1.8.343-2.143 1.714l-.429 3h1.5L8.786 9c0-.287.214-.857 1.071-.857zm0 0-.214 1.714h-6.214l-.215 1.286h9zm-9 7.714-.428 1.715h7.5c.57 0 1.8-.343 2.143-1.715l.428-3h-1.5L15.214 15c0 .287-.214.857-1.07.857zm0 0 .215-1.714h6.214l.214-1.286h-9z"
          />
        </>
      ) : (
        <>
          <path
            fill="#7377D8"
            d="m16.5 8.143.428-1.714h-7.5c-.57 0-1.8.343-2.143 1.714l-.428 3h1.5L8.785 9c0-.287.215-.857 1.072-.857zm0 0-.215 1.714h-6.214l-.214 1.286h9zm-9 7.714-.429 1.715h7.5c.57 0 1.8-.343 2.143-1.715l.429-3h-1.5L15.214 15c0 .287-.214.857-1.071.857zm0 0 .214-1.714h6.214l.215-1.286h-9z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGswap.displayName = 'Gswap'

export default IconGswap
