import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTAMA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#FFD643"
        d="M19.286 12a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0"
      />
      <path
        fill="#A31B3F"
        d="M10.132 13.714h-.274v.665l.934.62h2.426l.925-.62v-.665h-.291l-.407.665h-1.016v-.236h-.857v.236H10.53z"
      />
      <path
        fill="#FF9B37"
        d="M11.143 15.18v-.609h1.715v.609h-.429v.248h-.857v-.248z"
      />
      <path
        fill="#A31B3F"
        d="M10.286 15.857h-.428v.369l.685.488h3.219s1.83-1.56 2.687-2.271v-1.637l-.891-1.427v-.87l.514-.605v-2.19h-.87l-1.487 1.877h-.472v.163l.472.296 1.611-2.01h.523v1.714l-.879.755-.175.672.861 1.775v1.491l-2.138 1.839h-3.232z"
      />
      <path
        fill="#FFFF74"
        d="m7.912 14.203 1.92 2.083.334-.15L8.28 14.36l-.128-.608.377-1.089 2.006-.823 5.1-3.792v-.335h-.549l-1.401 1.714h-.617v.01h-2.075v-.01h-.458l-1.65-1.714h-.356l-.373.335v1.808l.874 1.157-1.118 1.766z"
      />
      <path
        fill="#FF9B37"
        d="M8.143 12.913v1.23h.429v-.802l.343-.702h.943v.488l.257.321h.583l.561-.81h1.71l.613.81h.561l.425-.32v-.485h.685l.6.703v.797h.429v-1.23l-.93-1.187v-.309h-.3v-.531h.377v-.429l.429-.66V7.971h-.502l-1.671 1.457c-.185-.102-.767-.3-1.599-.3-.827 0-1.414.198-1.598.3L8.919 7.972H8.34v1.826l.66.664v.429h.215v.527h-.3v.309z"
      />
      <path
        fill="#FFD643"
        d="M10.715 10.714h.428v-.428h-.428zm2.143-.428v.428h.428v-.428zm2.164-1.895-.682.678v.788h.408v.429h.274l.566-.656V8.387h-.566zm-5.88.026.716.681v.76h-.429v.428h-.291l-.566-.626V8.417z"
      />
      <path
        fill="#A31B3F"
        d="M10.8 11.143h-.514V12h.429v.428h.428v-.89zm2.4 0h.515V12h-.429v.428h-.428v-.89z"
      />
      <path
        fill="#FF9B37"
        d="M18.429 12a6.429 6.429 0 1 1-12.857 0 6.429 6.429 0 0 1 12.857 0M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="url(#TAMA__a)"
        d="M12 19.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15m7.5-7.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m.215 0a7.714 7.714 0 1 1-15.429 0 7.714 7.714 0 0 1 15.429 0m-.429 0a7.286 7.286 0 1 1-14.572 0 7.286 7.286 0 0 1 14.572 0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="#A31B3F"
        d="M11.143 12.634v.446l.257.206h1.2l.258-.206v-.446l-.258-.206h-1.2z"
      />
      <defs>
        <linearGradient
          id="TAMA__a"
          x1="4.92"
          x2="18.922"
          y1="14.953"
          y2="16.504"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".47" stopColor="#FFFF74" />
          <stop offset=".48" stopColor="#A31B3F" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconTAMA.displayName = 'TAMA'
