import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBCMC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12 7.714H9.43V12l.857-.428v-3H12a1.286 1.286 0 0 1 .57 2.438c-2.357 1.17-4.77 2.271-7.144 3.42l.377.771 6.484-3.154s1.007-.428 1.294-.745a2.134 2.134 0 0 0-1.58-3.588m6.951 2.503-.377-.771-4.474 2.331A1.715 1.715 0 0 1 13.286 15h-3v-1.427l-.857.437v1.847h3.857a2.57 2.57 0 0 0 2.177-3.943z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BCMC__a)"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#BCMC__b)"
            d="M12 7.714H9.428V12l.857-.428v-3H12a1.286 1.286 0 0 1 .57 2.438c-2.358 1.17-4.77 2.271-7.145 3.42l.377.771 6.485-3.154s1.007-.428 1.294-.745A2.134 2.134 0 0 0 12 7.714m6.951 2.503-.377-.771-4.474 2.331A1.715 1.715 0 0 1 13.285 15h-3v-1.427l-.857.437v1.847h3.857a2.57 2.57 0 0 0 2.177-3.943z"
          />
          <defs>
            <linearGradient
              id="BCMC__a"
              x1="12"
              x2="12"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCAB2F" />
              <stop offset="1" stopColor="#E45E0E" />
            </linearGradient>
            <linearGradient
              id="BCMC__b"
              x1="12"
              x2="12"
              y1="4.714"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FCAB2F" />
              <stop offset="1" stopColor="#E45E0E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBCMC.displayName = 'BCMC'
