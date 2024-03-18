import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconLcs = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.81 8.686a.82.82 0 0 1 1.312 0l4.22 5.668a.812.812 0 0 1-.505 1.283.55.55 0 0 1-.294-.042l-2.308-.889a4.92 4.92 0 0 0-3.538 0l-2.308.89a.55.55 0 0 1-.294.04.812.812 0 0 1-.504-1.282z"
          />
          <path
            fill="currentColor"
            d="M7.81 8.686a.82.82 0 0 1 1.312 0l4.22 5.668a.812.812 0 0 1-.505 1.283.55.55 0 0 1-.294-.042l-2.308-.889a4.92 4.92 0 0 0-3.538 0l-2.308.89a.55.55 0 0 1-.294.04.812.812 0 0 1-.504-1.282z"
          />
          <path
            fill="currentColor"
            d="m13.15 14.097.192.257a.812.812 0 0 1-.505 1.283.55.55 0 0 1-.294-.042l-2.308-.889a4.92 4.92 0 0 0-3.146-.132l-.027-.013c1.657-.625 5.154-1.597 5.963-.61q.066.082.125.146"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M14.878 15.314a.82.82 0 0 0 1.312 0l4.22-5.667a.812.812 0 0 0-.504-1.283.55.55 0 0 0-.295.04l-2.308.89a4.92 4.92 0 0 1-3.538 0l-2.308-.89a.55.55 0 0 0-.294-.04.812.812 0 0 0-.504 1.283z"
          />
          <path
            fill="currentColor"
            d="m20.219 9.903.19-.256a.812.812 0 0 0-.503-1.283.55.55 0 0 0-.295.04l-2.308.89a4.92 4.92 0 0 1-3.146.132l-.027.013c1.657.626 5.154 1.597 5.963.61q.066-.081.125-.146"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#C4C4C4"
            d="M7.81 8.686a.82.82 0 0 1 1.312 0l4.22 5.668a.812.812 0 0 1-.505 1.283.55.55 0 0 1-.294-.042l-2.308-.889a4.92 4.92 0 0 0-3.538 0l-2.308.89a.55.55 0 0 1-.294.04.812.812 0 0 1-.504-1.282z"
          />
          <path
            fill="url(#LCS__a)"
            d="M7.81 8.686a.82.82 0 0 1 1.312 0l4.22 5.668a.812.812 0 0 1-.505 1.283.55.55 0 0 1-.294-.042l-2.308-.889a4.92 4.92 0 0 0-3.538 0l-2.308.89a.55.55 0 0 1-.294.04.812.812 0 0 1-.504-1.282z"
          />
          <path
            fill="url(#LCS__b)"
            d="m13.15 14.097.192.257a.812.812 0 0 1-.505 1.283.55.55 0 0 1-.294-.042l-2.308-.889a4.92 4.92 0 0 0-3.146-.132l-.027-.013c1.657-.625 5.154-1.597 5.963-.61q.066.082.125.146"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#LCS__c)"
            d="M14.878 15.314a.82.82 0 0 0 1.312 0l4.22-5.667a.812.812 0 0 0-.504-1.283.55.55 0 0 0-.295.04l-2.308.89a4.92 4.92 0 0 1-3.538 0l-2.308-.89a.55.55 0 0 0-.294-.04.812.812 0 0 0-.504 1.283z"
          />
          <path
            fill="url(#LCS__d)"
            d="m20.219 9.903.19-.256a.812.812 0 0 0-.503-1.283.55.55 0 0 0-.295.04l-2.308.89a4.92 4.92 0 0 1-3.146.132l-.027.013c1.657.626 5.154 1.597 5.963.61q.066-.081.125-.146"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="LCS__a"
              x1="12"
              x2="12"
              y1="8.357"
              y2="15.644"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".146" stopColor="#283DA8" />
              <stop offset=".615" stopColor="#4196F9" />
            </linearGradient>
            <linearGradient
              id="LCS__b"
              x1="12"
              x2="12"
              y1="8.357"
              y2="15.644"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#283EAA" />
              <stop offset=".776" stopColor="#4171F9" />
            </linearGradient>
            <linearGradient
              id="LCS__c"
              x1="12"
              x2="12"
              y1="15.643"
              y2="8.357"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DB9D16" />
              <stop offset="1" stopColor="#E2DA20" />
            </linearGradient>
            <linearGradient
              id="LCS__d"
              x1="17.351"
              x2="17.351"
              y1="10.471"
              y2="8.357"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E0A500" />
              <stop offset=".743" stopColor="#ECCD3C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLcs.displayName = 'Lcs'

export default IconLcs
