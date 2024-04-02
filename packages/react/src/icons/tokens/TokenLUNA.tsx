import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLUNA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#F2E373"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path
        fill="url(#LUNA__a)"
        d="M14.143 3.429c-.575.857-1.685 1.453-2.452 1.718a6.857 6.857 0 0 0-6.463 7.937c.617 1.886 1.899 3.172 3.665 3.27 1.842.108 3.638-.552 4.478-2.58.677-1.628 1.869-2.104 2.379-2.202h3.964l-.964-.686c-1.427-1.222-3.635-1.084-4.217-.579a3.17 3.17 0 0 1-1.792.755c-2.19 0-2.383-1.659-2.383-2.049V8.97c-.004-.446-.013-1.727 2.045-2.417a2.65 2.65 0 0 0 1.517-1.14h-.005c.438-.677.343-1.629.228-1.984"
      />
      <path
        fill="url(#LUNA__b)"
        d="M17.605 15.952a6.857 6.857 0 0 1-12.351-2.73c.416 1.217 1.65 3.175 3.951 3.132 2.499-.042 3.738-1.602 4.072-2.468.338-.857 1.178-2.006 2.464-2.314-.527.325-1.487 1.221-1.388 2.314.115 1.333 1.191 2.216 3.252 2.066"
      />
      <defs>
        <linearGradient
          id="LUNA__a"
          x1="8.228"
          x2="16.553"
          y1="5.913"
          y2="12.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F5C859" />
          <stop offset="1" stopColor="#DE3633" />
        </linearGradient>
        <linearGradient
          id="LUNA__b"
          x1="9.591"
          x2="12.021"
          y1="14.648"
          y2="18.896"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3BE56" />
          <stop offset="1" stopColor="#E04437" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

TokenLUNA.displayName = 'LUNA'
