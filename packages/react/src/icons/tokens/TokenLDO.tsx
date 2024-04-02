import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenLDO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12 13.372-4.393-2.58-.124.188a5.434 5.434 0 0 0 .729 6.724 5.335 5.335 0 0 0 7.577 0 5.42 5.42 0 0 0 .728-6.724l-.124-.188z"
          />
          <path
            fill="currentColor"
            d="m12.005 3.797 3.788 5.979L12.005 12zm0 0V12l-3.79-2.228z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LDO__a)"
            d="m12 13.372-4.393-2.58-.124.188a5.434 5.434 0 0 0 .728 6.724 5.335 5.335 0 0 0 7.577 0 5.42 5.42 0 0 0 .729-6.724l-.124-.188z"
          />
          <path
            fill="url(#LDO__b)"
            d="m16.371 10.8-4.358 2.563L7.624 10.8l4.389-2.314z"
          />
          <path fill="url(#LDO__c)" d="m12.004 3.797 3.789 5.979L12.004 12z" />
          <path fill="url(#LDO__d)" d="M12.004 3.797V12L8.215 9.772z" />
          <defs>
            <linearGradient
              id="LDO__a"
              x1="12"
              x2="12"
              y1="3.797"
              y2="19.288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#498BE9" />
              <stop offset="1" stopColor="#56F2FF" />
            </linearGradient>
            <linearGradient
              id="LDO__b"
              x1="11.999"
              x2="11.999"
              y1="3.811"
              y2="19.283"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A8CEA" />
              <stop offset=".7" stopColor="#5ABEF4" />
            </linearGradient>
            <linearGradient
              id="LDO__c"
              x1="13.142"
              x2="11.033"
              y1="12.406"
              y2="19.91"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FB8174" />
              <stop offset=".56" stopColor="#568FDD" />
            </linearGradient>
            <linearGradient
              id="LDO__d"
              x1="9.017"
              x2="9.703"
              y1="7.899"
              y2="11.212"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFE235" />
              <stop offset=".61" stopColor="#5DCBA2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenLDO.displayName = 'LDO'
