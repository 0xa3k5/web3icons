import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSLG = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.143 15.802 2.143-3.986 4.757 2.091 4.672-2.091 2.142 3.986-6.814 3.055z"
          />
          <path
            fill="currentColor"
            d="M11.991 14.19a782 782 0 0 0-4.705-2.374l4.705-2.34 4.723 2.34zm0-.742c-1.058-.535-3.188-1.615-3.227-1.628l3.227-1.603 3.245 1.607-3.245 1.629zM10.5 12.214l1.5.643 1.5-.647-1.5-.639-1.5.639z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12 11.143 8.57 9.634 12 4.286zm0 0 3.429-1.509L12 4.286z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SLG__a)"
            d="m5.143 15.802 2.142-3.986 4.758 2.091 4.671-2.091 2.143 3.986-6.814 3.055z"
          />
          <path
            fill="url(#SLG__b)"
            d="M11.992 14.19a780 780 0 0 0-4.706-2.374l4.706-2.34 4.723 2.34zm0-.742c-1.059-.535-3.189-1.615-3.227-1.628l3.227-1.603 3.244 1.607-3.244 1.629zM10.5 12.214l1.5.643 1.5-.647-1.5-.639-1.5.639z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path fill="url(#SLG__c)" d="M12 11.143 8.57 9.634 12 4.286z" />
          <path fill="url(#SLG__d)" d="m12 11.143 3.429-1.509L12 4.286z" />
          <defs>
            <linearGradient
              id="SLG__a"
              x1="11.863"
              x2="11.863"
              y1="18.279"
              y2="12.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".59" stopColor="#A9CFD8" />
              <stop offset="1" stopColor="#CFE6EE" />
            </linearGradient>
            <linearGradient
              id="SLG__b"
              x1="12"
              x2="12"
              y1="9.476"
              y2="14.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".57" stopColor="#D7FDFF" />
              <stop offset="1" stopColor="#DAFBFF" />
            </linearGradient>
            <linearGradient
              id="SLG__c"
              x1="9.244"
              x2="11.696"
              y1="9.947"
              y2="5.434"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".46" stopColor="#70B8C7" />
              <stop offset="1" stopColor="#D8F3FC" />
            </linearGradient>
            <linearGradient
              id="SLG__d"
              x1="14.756"
              x2="12.304"
              y1="9.947"
              y2="5.434"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".26" stopColor="#96CEDF" />
              <stop offset="1" stopColor="#D8F3FC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenSLG.displayName = 'SLG'
