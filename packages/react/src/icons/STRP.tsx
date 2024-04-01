import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSTRP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.286 16.714a6.52 6.52 0 0 1-2.143-4.847A6.53 6.53 0 0 1 8.045 6.43c-.352.784-.76 1.92-.76 2.837 0 1.517 1.287 3.9 3.43 4.337l.428-.651c.356.505 1.286 1.602 2.143 1.95a3.04 3.04 0 0 1-3.214.865l.214-.647A1.6 1.6 0 0 0 9 14.47c-.857 0-1.714.651-1.714 1.735z"
          />
          <path
            fill="currentColor"
            d="M7.295 9.017A6.52 6.52 0 0 0 6 12.93c0 1.312.386 2.529 1.042 3.553a6.52 6.52 0 0 1-1.899-4.616A6.53 6.53 0 0 1 8.045 6.43a8.4 8.4 0 0 0-.75 2.588m9.42-1.732a6.52 6.52 0 0 1 2.142 4.847 6.53 6.53 0 0 1-2.901 5.439c.351-.785.759-1.92.759-2.838 0-1.517-1.286-3.9-3.43-4.337l-.428.652c-.355-.506-1.285-1.603-2.142-1.95a3.04 3.04 0 0 1 3.214-.866l-.215.647c.142.214.6.652 1.286.652.857 0 1.715-.652 1.715-1.736z"
          />
          <path
            fill="currentColor"
            d="M16.706 14.983A6.5 6.5 0 0 0 18 11.07a6.57 6.57 0 0 0-1.041-3.553 6.52 6.52 0 0 1 1.898 4.616 6.53 6.53 0 0 1-2.901 5.439 8.4 8.4 0 0 0 .75-2.589"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#STRP__a)"
            d="M7.285 16.714a6.52 6.52 0 0 1-2.142-4.847A6.53 6.53 0 0 1 8.044 6.43c-.351.784-.759 1.92-.759 2.837 0 1.517 1.286 3.9 3.429 4.337l.429-.651c.355.505 1.285 1.602 2.143 1.95a3.04 3.04 0 0 1-3.215.865l.215-.647A1.6 1.6 0 0 0 9 14.47c-.857 0-1.715.651-1.715 1.735z"
          />
          <path
            fill="url(#STRP__b)"
            d="M7.294 9.017A6.52 6.52 0 0 0 6 12.93c0 1.312.385 2.529 1.041 3.553a6.52 6.52 0 0 1-1.898-4.616A6.53 6.53 0 0 1 8.044 6.43a8.4 8.4 0 0 0-.75 2.588"
          />
          <path
            fill="url(#STRP__c)"
            d="M16.714 7.286a6.52 6.52 0 0 1 2.143 4.847 6.53 6.53 0 0 1-2.901 5.439c.35-.785.758-1.92.758-2.838 0-1.517-1.286-3.9-3.428-4.337l-.43.652c-.355-.506-1.285-1.603-2.142-1.95a3.04 3.04 0 0 1 3.214-.866l-.214.647c.141.214.6.652 1.286.652.857 0 1.714-.652 1.714-1.736z"
          />
          <path
            fill="url(#STRP__d)"
            d="M16.706 14.983A6.5 6.5 0 0 0 18 11.07a6.57 6.57 0 0 0-1.042-3.553 6.52 6.52 0 0 1 1.899 4.616 6.53 6.53 0 0 1-2.901 5.439 8.4 8.4 0 0 0 .75-2.589"
          />
          <defs>
            <linearGradient
              id="STRP__a"
              x1="5.143"
              x2="17.747"
              y1="13.472"
              y2="18.569"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0367AB" />
              <stop offset="1" stopColor="#0C99D7" />
            </linearGradient>
            <linearGradient
              id="STRP__b"
              x1="17.297"
              x2="16.823"
              y1="6.671"
              y2="16.408"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#076EB0" />
              <stop offset="1" stopColor="#199CD4" />
            </linearGradient>
            <linearGradient
              id="STRP__c"
              x1="18.857"
              x2="6.253"
              y1="10.528"
              y2="5.431"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBB20B" />
              <stop offset="1" stopColor="#FEFF42" />
            </linearGradient>
            <linearGradient
              id="STRP__d"
              x1="16.286"
              x2="18.039"
              y1="17.353"
              y2="8.91"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F38F12" />
              <stop offset="1" stopColor="#F09508" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSTRP.displayName = 'STRP'
