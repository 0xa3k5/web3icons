import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenNAV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.828 6.343a.857.857 0 0 0-1.542.514v4.286h-.858a.857.857 0 0 0 0 1.714h.858v4.286a.857.857 0 1 0 1.714 0v-4.286h2.571l3.6 4.8a.856.856 0 0 0 1.543-.514v-4.286h.857a.857.857 0 0 0 0-1.714h-.857V6.857a.857.857 0 0 0-1.714 0v4.286h-2.572zm4.886 6.514L15 14.571v-1.714zm-3.428-1.714L9 9.429v1.714z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#NAV__a)"
            d="M8.828 6.343a.857.857 0 0 0-1.542.514v4.286h-.858a.857.857 0 0 0 0 1.714h.858v4.286a.857.857 0 1 0 1.714 0v-4.286h2.571l3.6 4.8a.856.856 0 0 0 1.543-.514v-4.286h.857a.857.857 0 0 0 0-1.714h-.857V6.857a.857.857 0 0 0-1.714 0v4.286h-2.572zm4.886 6.514L15 14.571v-1.714zm-3.428-1.714L9 9.429v1.714z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="NAV__a"
              x1="18.428"
              x2="6.343"
              y1="6"
              y2="18.834"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0B88F6" />
              <stop offset=".456" stopColor="#7152D7" />
              <stop offset="1" stopColor="#DD1EBA" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenNAV.displayName = 'NAV'
