import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenDACXI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.857 5.34c0-.317.172-.609.45-.771l.977-.575a.99.99 0 0 1 1.003 0l.977.575a.9.9 0 0 1 .45.771v10.251a1.81 1.81 0 0 1-.921 1.573l-.326.185-3.681-2.122.917-.54a.32.32 0 0 0 .154-.274V5.336zM12 8.194a1.86 1.86 0 0 0-1.35.193l-3.3 1.877a1.81 1.81 0 0 0-.921 1.573v.296l3.428 1.98v-1.097c0-.116.06-.215.155-.275l1.191-.698a.3.3 0 0 1 .309 0l.488.287zm-5.57 4.929v2.468c0 .652.351 1.248.921 1.573l3.3 1.877a1.86 1.86 0 0 0 1.843 0l2.109-1.2z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DACXI__a)"
            d="M12.857 5.34c0-.317.172-.609.45-.771l.977-.575a.99.99 0 0 1 1.003 0l.977.575a.9.9 0 0 1 .45.771v10.251a1.81 1.81 0 0 1-.921 1.573l-.326.185-3.681-2.122.917-.54a.32.32 0 0 0 .154-.274V5.336zM12 8.194a1.86 1.86 0 0 0-1.35.193l-3.3 1.877a1.81 1.81 0 0 0-.921 1.573v.296l3.428 1.98v-1.097c0-.116.06-.215.155-.275l1.191-.698a.3.3 0 0 1 .309 0l.488.287zm-5.57 4.929v2.468c0 .652.351 1.248.921 1.573l3.3 1.877a1.86 1.86 0 0 0 1.843 0l2.109-1.2z"
          />
          <defs>
            <linearGradient
              id="DACXI__a"
              x1="11.572"
              x2="11.572"
              y1="3.858"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0584BE" />
              <stop offset=".78" stopColor="#244E78" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenDACXI.displayName = 'DACXI'
