import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSAIL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.286 17.306c-4.937-6.146-3.429-10.492-2.057-11.897-3.703 3.373-2.4 8.674-1.286 10.903 1.028.595 2.657.908 3.343.99z"
          />
          <path
            fill="currentColor"
            d="M7.543 14.332c.206-4.363 4.543-9.086 6.686-10.903-4.32 5.55-3 10.735-1.8 12.634z"
          />
          <path
            fill="currentColor"
            d="M6 17.057v-1.243s.257-.492 1.029-.492c1.971 0 7.877 2.708 9.771 2.725 1.093.009 1.714-.793 2.057-1.238-.343.66-1.354 2.057-3 2.057-2.057 0-5.841-2.306-8.828-2.306-.618 0-.943.33-1.029.497"
          />
          <path
            fill="currentColor"
            d="M7.174 16.783c-1.028 0-1.003 1.204-.745 1.671 0-.235.214-.835.745-.835.755-.005 5.675 1.05 8.255 1.667C13.07 18.45 9 16.783 7.174 16.783"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SAIL__a)"
            d="M16.286 17.306c-4.937-6.146-3.429-10.492-2.057-11.897-3.703 3.373-2.4 8.674-1.286 10.903 1.028.595 2.657.908 3.343.99z"
          />
          <path
            fill="url(#SAIL__b)"
            d="M7.543 14.332c.206-4.363 4.543-9.086 6.686-10.903-4.32 5.55-3 10.735-1.8 12.634z"
          />
          <path
            fill="url(#SAIL__c)"
            d="M6 17.057v-1.243s.257-.492 1.029-.492c1.971 0 7.877 2.708 9.771 2.725 1.093.009 1.714-.793 2.057-1.238-.343.66-1.354 2.057-3 2.057-2.057 0-5.841-2.306-8.828-2.306-.618 0-.943.33-1.029.497"
          />
          <path
            fill="url(#SAIL__d)"
            d="M7.174 16.783c-1.028 0-1.003 1.204-.745 1.671 0-.235.214-.835.745-.835.755-.005 5.675 1.05 8.255 1.667C13.07 18.45 9 16.783 7.174 16.783"
          />
          <defs>
            <linearGradient
              id="SAIL__a"
              x1="12.425"
              x2="12.425"
              y1="3.434"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF9C00" />
              <stop offset=".54" stopColor="#FED087" />
              <stop offset="1" stopColor="#FF9D00" />
            </linearGradient>
            <linearGradient
              id="SAIL__b"
              x1="18.363"
              x2="14.537"
              y1="3.741"
              y2="19.294"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00116A" />
              <stop offset=".63" stopColor="#003180" />
              <stop offset=".78" stopColor="#0094C6" />
              <stop offset="1" stopColor="#00CBEE" />
            </linearGradient>
            <linearGradient
              id="SAIL__c"
              x1="5.743"
              x2="18.899"
              y1="6.746"
              y2="6.926"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0064A3" />
              <stop offset=".16" stopColor="#00B1DA" />
              <stop offset=".46" stopColor="#001169" />
              <stop offset="1" stopColor="#011D6D" />
            </linearGradient>
            <linearGradient
              id="SAIL__d"
              x1="6.249"
              x2="14.773"
              y1="17.644"
              y2="20.023"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0064A3" />
              <stop offset=".16" stopColor="#00B1DA" />
              <stop offset=".51" stopColor="#001169" />
              <stop offset="1" stopColor="#011D6D" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenSAIL.displayName = 'SAIL'
