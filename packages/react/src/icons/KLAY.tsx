import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconKLAY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.244 5.143a6.6 6.6 0 0 1 4.153 1.599l-7.641 7.654z"
          />
          <path
            fill="currentColor"
            d="M12.244 5.143a6.6 6.6 0 0 1 4.153 1.599l-7.641 7.654zm.626 6.874 4.406-4.423a6.93 6.93 0 0 1 0 8.812z"
          />
          <path
            fill="currentColor"
            d="m12.87 12.017 4.406-4.423a6.93 6.93 0 0 1 0 8.812zm-7.714-.445 5.366-5.388-3.823 10.183a6.9 6.9 0 0 1-1.543-4.795"
          />
          <path
            fill="currentColor"
            d="m5.156 11.572 5.366-5.388-3.823 10.183a6.9 6.9 0 0 1-1.543-4.795m2.46 5.687 4.41-4.385 4.406 4.385a6.85 6.85 0 0 1-4.406 1.598 6.86 6.86 0 0 1-4.41-1.598"
          />
          <path
            fill="currentColor"
            d="m7.616 17.259 4.41-4.385 4.406 4.385a6.85 6.85 0 0 1-4.406 1.598 6.86 6.86 0 0 1-4.41-1.598"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KLAY__a)"
            d="M12.244 5.143a6.6 6.6 0 0 1 4.153 1.599l-7.641 7.654z"
          />
          <path
            fill="url(#KLAY__b)"
            d="M12.244 5.143a6.6 6.6 0 0 1 4.153 1.599l-7.641 7.654z"
          />
          <path
            fill="url(#KLAY__c)"
            d="m12.87 12.017 4.406-4.423a6.93 6.93 0 0 1 0 8.812z"
          />
          <path
            fill="url(#KLAY__d)"
            d="m12.87 12.017 4.406-4.423a6.93 6.93 0 0 1 0 8.812z"
          />
          <path
            fill="url(#KLAY__e)"
            d="m5.156 11.572 5.366-5.388-3.823 10.183a6.9 6.9 0 0 1-1.543-4.795"
          />
          <path
            fill="url(#KLAY__f)"
            d="m5.156 11.572 5.366-5.388-3.823 10.183a6.9 6.9 0 0 1-1.543-4.795"
          />
          <path
            fill="url(#KLAY__g)"
            d="m7.616 17.259 4.41-4.385 4.406 4.385a6.85 6.85 0 0 1-4.406 1.598 6.86 6.86 0 0 1-4.41-1.598"
          />
          <path
            fill="url(#KLAY__h)"
            d="m7.616 17.259 4.41-4.385 4.406 4.385a6.85 6.85 0 0 1-4.406 1.598 6.86 6.86 0 0 1-4.41-1.598"
          />
          <defs>
            <linearGradient
              id="KLAY__a"
              x1="10.965"
              x2="10.965"
              y1="5.143"
              y2="25.47"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8300" />
              <stop offset=".51" stopColor="#E91A00" />
              <stop offset="1" stopColor="#7C0000" />
            </linearGradient>
            <linearGradient
              id="KLAY__b"
              x1="21.733"
              x2="4.708"
              y1="30.234"
              y2="10.764"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9D0097" stopOpacity=".85" />
              <stop offset="1" stopColor="#9D0097" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="KLAY__c"
              x1="3.15"
              x2="3.15"
              y1="1.328"
              y2="22.673"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8300" />
              <stop offset=".51" stopColor="#E91A00" />
              <stop offset="1" stopColor="#7C0000" />
            </linearGradient>
            <linearGradient
              id="KLAY__d"
              x1="16.895"
              x2="-.209"
              y1="27.676"
              y2="3.9"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9D0097" stopOpacity=".85" />
              <stop offset="1" stopColor="#9D0097" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="KLAY__e"
              x1="22.626"
              x2="22.626"
              y1="3.74"
              y2="22.211"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF8300" />
              <stop offset=".51" stopColor="#E91A00" />
              <stop offset="1" stopColor="#7C0000" />
            </linearGradient>
            <linearGradient
              id="KLAY__f"
              x1="37.924"
              x2="24.623"
              y1="26.54"
              y2="2.76"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9D0097" stopOpacity=".85" />
              <stop offset="1" stopColor="#9D0097" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="KLAY__g"
              x1="11.963"
              x2="11.963"
              y1="-12.579"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".51" stopColor="#E91A00" />
              <stop offset="1" stopColor="#7C0000" />
            </linearGradient>
            <linearGradient
              id="KLAY__h"
              x1="18"
              x2="6.428"
              y1="22.072"
              y2="11.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9D0097" stopOpacity=".85" />
              <stop offset="1" stopColor="#9D0097" stopOpacity="0" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconKLAY.displayName = 'KLAY'
