import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkBeam = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 14.572h3.557l-3.557-6V4.714l7.286 12H12zm0 0H8.426l3.574-6V4.714l-7.286 12H12z"
          />
          <path
            fill="currentColor"
            d="M12 10.286v3.428H9.857zm0 0v3.428h2.143z"
          />
          <path
            fill="currentColor"
            d="m3.429 8.469 8.563 3.96v.415l-8.563-1.872z"
          />
          <path
            fill="currentColor"
            d="m20.572 7.316-8.58 5.117v.141l8.58-3.604zm0 4.958-8.58.575v-.138l8.58-2.09z"
          />
          <path fill="currentColor" d="m20.572 8.97-8.58 3.6v.141l8.58-2.09z" />
        </>
      ) : (
        <>
          <path
            fill="#0B76FF"
            d="M12 14.572h3.557l-3.557-6V4.714l7.286 12H12z"
          />
          <path
            fill="#24C1FF"
            d="M12 14.572H8.426l3.574-6V4.714l-7.286 12H12z"
          />
          <path fill="#39FFF2" d="M12 10.286v3.428H9.857z" />
          <path fill="#00E2C2" d="M12 10.286v3.428h2.143z" />
          <path
            fill="url(#beam__a)"
            d="m3.429 8.469 8.563 3.96v.415l-8.563-1.872z"
          />
          <path
            fill="url(#beam__b)"
            d="m20.572 7.316-8.58 5.117v.141l8.58-3.604z"
          />
          <path
            fill="url(#beam__c)"
            d="m20.572 12.274-8.58.575v-.138l8.58-2.09z"
          />
          <path
            fill="url(#beam__d)"
            d="m20.572 8.97-8.58 3.6v.141l8.58-2.09z"
          />
          <defs>
            <linearGradient
              id="beam__a"
              x1="3.437"
              x2="12.824"
              y1="10.744"
              y2="10.744"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" stopOpacity="0" />
              <stop offset="1" stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="beam__b"
              x1="20.469"
              x2="9.568"
              y1="10.69"
              y2="10.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FD76FD" stopOpacity="0" />
              <stop offset="1" stopColor="#FF51FF" />
            </linearGradient>
            <linearGradient
              id="beam__c"
              x1="20.649"
              x2="11.82"
              y1="10.737"
              y2="10.737"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9D6EFF" stopOpacity="0" />
              <stop offset="1" stopColor="#A18CFF" />
            </linearGradient>
            <linearGradient
              id="beam__d"
              x1="20.563"
              x2="15.514"
              y1="10.847"
              y2="10.847"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#AE60D6" stopOpacity="0" />
              <stop offset="1" stopColor="#AB38E6" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

NetworkBeam.displayName = 'beam'
