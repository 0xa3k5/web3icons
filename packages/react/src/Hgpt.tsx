import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconHGPT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="url(#HGPT__a)"
        d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
      />
      <path
        fill="url(#HGPT__b)"
        d="M16.513 17.722a7.286 7.286 0 1 1-8.987-11.47c1.007 1.325 1.556 3.044 1.221 4.955-.06.343-.008.656.125.943.205.454.621.849 1.165 1.217.279.193.6.377.93.557.386.21.789.416 1.209.626.428.214.87.433 1.299.669q.67.366 1.307.793c.342.23.664.484.947.758q.451.428.784.951"
      />
      <path
        fill="url(#HGPT__c)"
        d="M16.157 10.286h-8.31a1.456 1.456 0 0 0-1.419 1.5c0 1.298 1.003 2.357 2.229 2.357h6.681c1.23 0 2.233-1.059 2.233-2.357a1.46 1.46 0 0 0-1.414-1.5m-5.443 2.16c0 .15-.051.287-.128.411H8.7a.8.8 0 0 1-.129-.411c0-.485.48-.875 1.072-.875.591 0 1.071.39 1.071.875m5.143 0c0 .15-.051.287-.129.411h-1.885a.8.8 0 0 1-.129-.411c0-.485.48-.875 1.072-.875.591 0 1.071.39 1.071.875"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="HGPT__a"
          x1="18.09"
          x2="11.961"
          y1="9.686"
          y2="14.091"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6767D9" />
          <stop offset="1" stopColor="#9578EF" />
        </linearGradient>
        <linearGradient
          id="HGPT__b"
          x1="4.715"
          x2="10.655"
          y1="14.657"
          y2="10.05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#AA80F9" />
          <stop offset="1" stopColor="#675ADD" />
        </linearGradient>
        <linearGradient
          id="HGPT__c"
          x1="6.428"
          x2="17.571"
          y1="12.214"
          y2="12.214"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#444B8C" />
          <stop offset="1" stopColor="#26264F" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconHGPT.displayName = 'HGPT'
