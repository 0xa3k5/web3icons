import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconRGEN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m6.377 9.343 4.843-4.796.99.84-4.91 4.856 4.723 4.671 4.722-4.671-.801-.793-.921.913-.857-.947.874-.866a1.346 1.346 0 0 1 1.86.03l.69.686a1.374 1.374 0 0 1 0 1.954l-4.577 4.526a1.41 1.41 0 0 1-1.98 0l-4.655-4.603a1.266 1.266 0 0 1 0-1.8"
          />
          <path
            fill="currentColor"
            d="m14.242 9.33.415-.411a1.72 1.72 0 0 0 .446 1.457l2.439 2.413-.459 1.302-2.841-2.807a1.37 1.37 0 0 1 0-1.954"
          />
          <path
            fill="currentColor"
            d="M11.855 5.374c-.36-.334-1.046-.201-1.363-.103l.531-.582a1.41 1.41 0 0 1 1.976 0l.733.728a1.373 1.373 0 0 1 0 1.95l-6.489 6.416 4.783 4.731a1350 1350 0 0 0 4.689-4.633c.437-.445.3-1.35.17-1.744l.687.673a1.37 1.37 0 0 1 0 1.954l-4.633 4.577a1.303 1.303 0 0 1-1.826 0L6.48 14.76a1.37 1.37 0 0 1 0-1.954l6.49-6.416z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#RGEN__a)"
            d="m6.377 9.343 4.843-4.796.99.84-4.91 4.856 4.723 4.671 4.722-4.671-.801-.793-.921.913-.857-.947.874-.866a1.346 1.346 0 0 1 1.86.03l.69.686a1.374 1.374 0 0 1 0 1.954l-4.577 4.526a1.41 1.41 0 0 1-1.98 0l-4.655-4.603a1.266 1.266 0 0 1 0-1.8"
          />
          <path
            fill="url(#RGEN__b)"
            d="m14.242 9.33.415-.411a1.72 1.72 0 0 0 .446 1.457l2.439 2.413-.459 1.302-2.841-2.807a1.37 1.37 0 0 1 0-1.954"
          />
          <path
            fill="url(#RGEN__c)"
            d="M11.855 5.374c-.36-.334-1.046-.201-1.363-.103l.531-.582a1.41 1.41 0 0 1 1.976 0l.733.728a1.373 1.373 0 0 1 0 1.95l-6.489 6.416 4.783 4.731a1350 1350 0 0 0 4.689-4.633c.437-.445.3-1.35.17-1.744l.687.673a1.37 1.37 0 0 1 0 1.954l-4.633 4.577a1.303 1.303 0 0 1-1.826 0L6.48 14.76a1.37 1.37 0 0 1 0-1.954l6.49-6.416z"
          />
          <defs>
            <linearGradient
              id="RGEN__a"
              x1="6.274"
              x2="16.335"
              y1="12.114"
              y2="9.74"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#873B9F" />
              <stop offset=".52" stopColor="#359DDA" />
              <stop offset=".72" stopColor="#2867AC" />
              <stop offset=".85" stopColor="#327EC2" />
              <stop offset="1" stopColor="#27ABE3" />
            </linearGradient>
            <linearGradient
              id="RGEN__b"
              x1="6.493"
              x2="17.004"
              y1="8.657"
              y2="19.402"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".31" stopColor="#2CAAE2" />
              <stop offset="1" stopColor="#286DB0" />
            </linearGradient>
            <linearGradient
              id="RGEN__c"
              x1="6.069"
              x2="12.802"
              y1="14.246"
              y2="14.507"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#813B9D" />
              <stop offset="1" stopColor="#24ADE3" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconRGEN.displayName = 'RGEN'
