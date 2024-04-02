import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenEJS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.484 8.511 11.726 9.54l.364.369-2.216 2.215a.601.601 0 1 1-.853-.848l4.256-4.256a5.143 5.143 0 1 0 3.703 3.703l-4.256 4.256a.602.602 0 0 1-.848-.853l2.215-2.216.403.399z"
          />
          <path
            fill="currentColor"
            d="m7.5 14.494 2.374-2.37a.601.601 0 1 1-.853-.848l-2.005 2.001c.111.42.27.832.484 1.217m4.371-.364L9.506 16.5c.385.214.797.373 1.217.484l2.078-2.083-.077.078a.602.602 0 1 1-.853-.85"
          />
          <path
            fill="currentColor"
            d="M12.15 13.851 9.506 16.5l.261.133 1.946-1.946a.6.6 0 0 1 .163-.557zm-5.044-.265 1.757-1.749a.61.61 0 0 1 .158-.561l-2.005 2.001.09.313z"
          />
          <path
            fill="currentColor"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0 .428a7.714 7.714 0 1 0 0-15.428 7.714 7.714 0 0 0 0 15.428"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#EJS__a)"
            d="M15.485 8.511 11.726 9.54l.364.369-2.215 2.215a.601.601 0 1 1-.853-.848l4.256-4.256a5.143 5.143 0 1 0 3.702 3.703l-4.255 4.256a.602.602 0 0 1-.849-.853l2.216-2.216.403.399z"
          />
          <path
            fill="#EA3D72"
            d="m7.5 14.494 2.375-2.37a.601.601 0 1 1-.853-.848l-2.006 2.001c.112.42.27.832.484 1.217m4.372-.364L9.506 16.5c.386.214.797.373 1.217.484l2.079-2.083-.077.078a.602.602 0 1 1-.853-.85"
          />
          <path
            fill="#730D2B"
            d="M12.15 13.851 9.506 16.5l.262.133 1.945-1.946a.6.6 0 0 1 .163-.557zm-5.044-.265 1.757-1.749a.61.61 0 0 1 .159-.561l-2.006 2.001.09.313z"
          />
          <path
            fill="url(#EJS__b)"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0 .428a7.713 7.713 0 1 0 0-15.427 7.713 7.713 0 0 0 0 15.427"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="EJS__a"
              x1="17.229"
              x2="6.545"
              y1="6.771"
              y2="17.456"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8F3EDA" />
              <stop offset="1" stopColor="#E73E73" />
            </linearGradient>
            <linearGradient
              id="EJS__b"
              x1="19.715"
              x2="4.74"
              y1="12"
              y2="12"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#864BD0" />
              <stop offset="1" stopColor="#E54077" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenEJS.displayName = 'EJS'
