import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconQUINT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M16.286 16.286v.428h2.571l-.377-.428z" />
          <path
            fill="currentColor"
            d="M13.286 15.857v-1.714H7.714V7.286h6.857v11.142h4.286v-1.714h-2.571V5.571H6v10.286z"
          />
          <path
            fill="currentColor"
            d="m8.143 13.714-.429.429h5.572l-.429-.429zm0-6-.429-.428h6.857l-.428.428z"
          />
          <path
            fill="currentColor"
            d="m14.571 7.286-.428.428V18l.428.428zm-4.285 1.928L7.714 7.286v6.857l2.572-1.929z"
          />
        </>
      ) : (
        <>
          <path fill="#12E3BC" d="M16.286 16.286v.428h2.571l-.377-.428z" />
          <path
            fill="#14F4C8"
            d="M13.286 15.857v-1.714H7.714V7.286h6.857v11.142h4.286v-1.714h-2.571V5.571H6v10.286z"
          />
          <path
            fill="url(#QUINT__a)"
            d="m8.143 13.714-.429.429h5.572l-.429-.429z"
          />
          <path
            fill="url(#QUINT__b)"
            d="m8.143 7.714-.429-.428h6.857l-.428.428z"
          />
          <path fill="url(#QUINT__c)" d="m14.571 7.286-.428.428V18l.428.428z" />
          <path
            fill="url(#QUINT__d)"
            d="M10.286 9.214 7.714 7.286v6.857l2.572-1.929z"
          />
          <defs>
            <linearGradient
              id="QUINT__a"
              x1="9.926"
              x2="8.373"
              y1="14.443"
              y2="8.827"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#068F82" />
              <stop offset="1" stopColor="#12E3BC" />
            </linearGradient>
            <linearGradient
              id="QUINT__b"
              x1="9.946"
              x2="9.946"
              y1="2.357"
              y2="8.4"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#068F82" />
              <stop offset="1" stopColor="#12E3BC" />
            </linearGradient>
            <linearGradient
              id="QUINT__c"
              x1="20.914"
              x2="8.829"
              y1="9.621"
              y2="9.621"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#068F82" />
              <stop offset="1" stopColor="#12E3BC" />
            </linearGradient>
            <linearGradient
              id="QUINT__d"
              x1="7.405"
              x2="10.418"
              y1="10.393"
              y2="10.393"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#068F82" />
              <stop offset="1" stopColor="#12E3BC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconQUINT.displayName = 'QUINT'
