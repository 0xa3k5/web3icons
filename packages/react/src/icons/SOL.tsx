import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSOL = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.886 8.876a.47.47 0 0 1-.313.124H5.584c-.39 0-.587-.446-.317-.707l1.805-1.74a.46.46 0 0 1 .312-.129h11.032c.394 0 .587.45.313.712zm0 8.576a.47.47 0 0 1-.313.12H5.584c-.39 0-.587-.442-.317-.703l1.805-1.745A.45.45 0 0 1 7.384 15h11.032c.394 0 .587.446.313.707zm0-6.618a.47.47 0 0 0-.313-.12H5.584c-.39 0-.587.442-.317.703l1.805 1.745a.47.47 0 0 0 .312.124h11.032c.394 0 .587-.446.313-.707z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SOL__a)"
            d="M16.886 8.876a.47.47 0 0 1-.313.124H5.584c-.39 0-.587-.446-.317-.707l1.805-1.74a.46.46 0 0 1 .312-.129h11.032c.394 0 .587.45.313.712z"
          />
          <path
            fill="url(#SOL__b)"
            d="M16.886 17.452a.47.47 0 0 1-.313.12H5.584c-.39 0-.587-.442-.317-.703l1.805-1.745A.45.45 0 0 1 7.384 15h11.032c.394 0 .587.446.313.707z"
          />
          <path
            fill="url(#SOL__c)"
            d="M16.886 10.834a.47.47 0 0 0-.313-.12H5.584c-.39 0-.587.442-.317.703l1.805 1.745a.47.47 0 0 0 .312.124h11.032c.394 0 .587-.446.313-.707z"
          />
          <defs>
            <linearGradient
              id="SOL__a"
              x1="5.143"
              x2="19.186"
              y1="15.29"
              y2="14.733"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#599DB0" />
              <stop offset="1" stopColor="#47F8C3" />
            </linearGradient>
            <linearGradient
              id="SOL__b"
              x1="5.143"
              x2="19.103"
              y1="15.788"
              y2="15.325"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C44FE2" />
              <stop offset="1" stopColor="#73B0D0" />
            </linearGradient>
            <linearGradient
              id="SOL__c"
              x1="5.932"
              x2="18.326"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#778CBF" />
              <stop offset="1" stopColor="#5DCDC9" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSOL.displayName = 'SOL'
