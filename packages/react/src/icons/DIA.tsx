import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconDIA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.571 9V7.286h2.143l3.214 2.571.643 2.572c0 5.143-5.143 6.857-7.071 6.857-1.929 0-3.214-1.072-3.214-1.286l3.214-.428c1.428-.93 4.329-3.258 4.5-5.143C15 10.5 12.786 9.357 11.57 9"
          />
          <path
            fill="currentColor"
            d="M11.571 15.857H9.43V4.714h1.928c2.972 0 6.429 2.572 6.214 8.143-.428-3.857-4.357-5.571-6-5.571z"
          />
          <path
            fill="currentColor"
            d="m9.429 4.714-2.143 1.5V18h1.928c2.972 0 6.214-2.357 5.786-5.571-.857 3-3.929 3.428-5.571 3.428z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DIA__a)"
            d="M11.572 9V7.286h2.143l3.214 2.571.643 2.572c0 5.143-5.143 6.857-7.072 6.857-1.928 0-3.214-1.072-3.214-1.286l3.214-.428c1.429-.93 4.329-3.258 4.5-5.143C15 10.5 12.786 9.357 11.572 9"
          />
          <path
            fill="url(#DIA__b)"
            d="M11.572 15.857H9.429V4.714h1.929c2.972 0 6.428 2.572 6.214 8.143-.429-3.857-4.357-5.571-6-5.571z"
          />
          <path
            fill="url(#DIA__c)"
            d="m9.429 4.714-2.143 1.5V18h1.929c2.972 0 6.214-2.357 5.785-5.571-.857 3-3.928 3.428-5.571 3.428z"
          />
          <defs>
            <linearGradient
              id="DIA__a"
              x1="12.434"
              x2="12.434"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5A3B90" />
              <stop offset=".292" stopColor="#614397" />
              <stop offset=".615" stopColor="#8071B3" />
              <stop offset=".857" stopColor="#AEBADE" />
              <stop offset="1" stopColor="#C2DCF1" />
            </linearGradient>
            <linearGradient
              id="DIA__b"
              x1="17.569"
              x2="7.286"
              y1="11.434"
              y2="11.434"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6C5DF4" />
              <stop offset=".437" stopColor="#8093D6" />
              <stop offset="1" stopColor="#9DE2AE" />
            </linearGradient>
            <linearGradient
              id="DIA__c"
              x1="7.286"
              x2="18"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5B51EF" />
              <stop offset=".19" stopColor="#8367D3" />
              <stop offset=".45" stopColor="#B483AA" />
              <stop offset=".715" stopColor="#E7A081" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconDIA.displayName = 'DIA'
