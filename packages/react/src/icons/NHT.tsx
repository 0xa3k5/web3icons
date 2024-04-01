import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNHT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.429 6.866c-.03 2.734-2.289 3.428-3.429 3.42l.005 2.944h6.852V6.857z"
          />
          <path
            fill="currentColor"
            d="M15.652 17.143H12v-3.429h3.429V6.857h.304a3.116 3.116 0 0 1 3.124 3.073v3.973a3.27 3.27 0 0 1-3.205 3.24"
          />
          <path
            fill="currentColor"
            d="M8.572 13.714h6.857c-2.777 0-3.424 2.173-3.429 3.343-.043-2.631-2.147-3.317-3.3-3.343zm3.445-3.591v.385h-3.54V6.883h.3a3.24 3.24 0 0 1 3.24 3.24"
          />
          <path
            fill="currentColor"
            d="M5.224 17.143h-.08v-7.2a3.086 3.086 0 0 1 3.085-3.086h.343c0 2.657 2.078 3.416 3.085 3.429h.605a3.11 3.11 0 0 1 3.167 3.102v.326H8.572v.009a3.365 3.365 0 0 1-3.348 3.42"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NHT__a)"
            d="M15.428 6.866c-.03 2.734-2.288 3.428-3.428 3.42l.004 2.944h6.853V6.857z"
          />
          <path
            fill="url(#NHT__b)"
            d="M15.651 17.143H12v-3.429h3.428V6.857h.305a3.116 3.116 0 0 1 3.124 3.073v3.973a3.27 3.27 0 0 1-3.206 3.24"
          />
          <path
            fill="url(#NHT__c)"
            d="M8.571 13.714h6.857c-2.777 0-3.424 2.173-3.428 3.343-.043-2.631-2.147-3.317-3.3-3.343z"
          />
          <path
            fill="url(#NHT__d)"
            d="M12.017 10.123v.385h-3.54V6.883h.3a3.24 3.24 0 0 1 3.24 3.24"
          />
          <path
            fill="url(#NHT__e)"
            d="M5.224 17.143h-.081v-7.2a3.086 3.086 0 0 1 3.085-3.086h.343c0 2.657 2.079 3.416 3.086 3.429h.604a3.11 3.11 0 0 1 3.167 3.102v.326H8.571v.009a3.364 3.364 0 0 1-3.347 3.42"
          />
          <defs>
            <linearGradient
              id="NHT__a"
              x1="18.857"
              x2="12.007"
              y1="7.39"
              y2="15.299"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2F1E58" />
              <stop offset="1" stopColor="#4C318D" />
            </linearGradient>
            <linearGradient
              id="NHT__b"
              x1="12.034"
              x2="10.241"
              y1="6.857"
              y2="18.687"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7B42A1" />
              <stop offset=".54" stopColor="#C75693" />
              <stop offset="1" stopColor="#A1467A" />
            </linearGradient>
            <linearGradient
              id="NHT__c"
              x1="7.234"
              x2="14.117"
              y1="7.292"
              y2="9.682"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#84354C" />
              <stop offset="1" stopColor="#B64A69" />
            </linearGradient>
            <linearGradient
              id="NHT__d"
              x1="6.853"
              x2="10.539"
              y1="7.586"
              y2="18.055"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8454F4" />
              <stop offset="1" stopColor="#5D3BAC" />
            </linearGradient>
            <linearGradient
              id="NHT__e"
              x1="7.243"
              x2="8.597"
              y1="7.26"
              y2="17.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8453EE" />
              <stop offset=".68" stopColor="#B456B2" />
              <stop offset=".98" stopColor="#201128" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconNHT.displayName = 'NHT'
