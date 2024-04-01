import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconUSTC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#183EA4"
        d="M8.001 8.04a3.52 3.52 0 0 0 1.492 1.688c.95.588 4.864-1.637 6.702-2.82-.381-.445-1.697-1.337-3.921-1.337-2.229 0-3.579 1.089-3.977 1.637l-.3.832zm6.476 9.93c-.227.103-.793.356-1.059.343-.317-.009-1.328-.54-1.907-1.547-.583-1.008-.591-1.672-.12-2.272.45-.5.959-.946 1.513-1.328l4.971.844c.052.283-.115 1.114-1.187 2.228-1.071 1.102-1.855 1.586-2.117 1.689z"
      />
      <path
        fill="url(#USTC__a)"
        d="M10.045 7.041c-.857 1.303-3.72 2.22-4.191 2.079l-.004-.01q.261-.54.617-1.024a6.9 6.9 0 0 1 2.031-1.86c.289-.162.612-.25.943-.257 1.277.026.613 1.058.604 1.071"
      />
      <path
        fill="url(#USTC__b)"
        d="M9.343 16.247c.06.411 0 2.027-.086 2.164-.073.005-.219.013-.652-.231a6.86 6.86 0 0 1-2.7-2.829 6.9 6.9 0 0 1-.672-4.303q.105-.65.33-1.268c.497.664 1.07 1.264 1.555 1.928q.651.93 1.23 1.903c.806 1.38.935 2.229.995 2.636"
      />
      <path
        fill="url(#USTC__c)"
        d="M18.857 12.171c0 .9-.172 1.757-.476 2.542-.81.874-6.257-1.282-6.308-1.303-.746-.33-3.013-1.329-3.215-2.906-.295-2.263 4.256-3.84 6.257-3.9.24.004.973.013 1.397.36a6.92 6.92 0 0 1 2.345 5.207"
      />
      <path
        fill="url(#USTC__d)"
        d="M15.171 18.304c-.596.279-1.247.077-1.08-.506.33-1.118 3.172-2.271 3.801-2.331.082-.004.112.047.078.107a6.95 6.95 0 0 1-2.799 2.73"
      />
      <defs>
        <linearGradient
          id="USTC__a"
          x1="7.18"
          x2="19.411"
          y1="16.715"
          y2="13.454"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58C07B" />
          <stop offset="1" stopColor="#5599E0" />
        </linearGradient>
        <linearGradient
          id="USTC__b"
          x1="3.179"
          x2="16.186"
          y1="9.567"
          y2="6.871"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".32" stopColor="#57BC87" />
          <stop offset=".99" stopColor="#5493F1" />
        </linearGradient>
        <linearGradient
          id="USTC__c"
          x1="5.421"
          x2="19.581"
          y1="11.997"
          y2="11.716"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58C56E" />
          <stop offset="1" stopColor="#5492F3" />
        </linearGradient>
        <linearGradient
          id="USTC__d"
          x1="14.254"
          x2="18.115"
          y1="17.396"
          y2="15.977"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#58C178" />
          <stop offset="1" stopColor="#5493F0" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconUSTC.displayName = 'USTC'
