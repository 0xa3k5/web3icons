import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconATD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#ATD__a)"
        d="M12.214 6.857a1.071 1.071 0 1 0 0-2.142 1.071 1.071 0 0 0 0 2.142"
      />
      <path
        fill="#610467"
        d="M7.783 15.857c-.506 0-.917.335-.917.823a.9.9 0 0 0 .917.892h8.443a.9.9 0 0 0 .917-.892c0-.488-.411-.823-.917-.823z"
      />
      <path
        fill="#610467"
        d="M7.265 17.43a.9.9 0 0 0 1.238-.261l2.494-3.802a.88.88 0 0 0-.261-1.226.9.9 0 0 0-1.239.262l-2.494 3.801a.88.88 0 0 0 .262 1.226"
      />
      <path
        fill="url(#ATD__b)"
        d="M9.81 7.877a.87.87 0 0 0-.214 1.234l5.905 8.092a.925.925 0 0 0 1.265.206.87.87 0 0 0 .21-1.235L11.07 8.083a.92.92 0 0 0-1.26-.206"
      />
      <defs>
        <linearGradient
          id="ATD__a"
          x1="12.214"
          x2="12.214"
          y1="4.714"
          y2="6.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E4396A" />
          <stop offset="1" stopColor="#300F39" />
        </linearGradient>
        <linearGradient
          id="ATD__b"
          x1="13.929"
          x2="13.071"
          y1="12.214"
          y2="12.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D12D6D" />
          <stop offset="1" stopColor="#610467" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconATD.displayName = 'ATD'
