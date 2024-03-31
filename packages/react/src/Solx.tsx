import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSOLX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.851 9.429h-3.137c0-1.132-1.183-1.672-1.714-1.715-.604-.03-1.714.33-1.714 1.385 0 1.316.462 1.08 3.818 1.723 2.687.514 3.429 2.575 3.463 3.544.086 1.5-.892 4.491-5.486 4.491-4.59 0-5.683-2.824-5.653-4.285h3.326c-.043 1.491 1.817 1.714 2.327 1.714.515 0 2.062-.3 2.062-1.599s-1.273-1.234-1.77-1.268a21 21 0 0 1-1.23-.133C7.8 12.845 6.86 10.56 6.86 9.407c0-1.157.124-4.264 5.139-4.264 4.011 0 4.903 2.863 4.851 4.286"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SOLX__a)"
            d="M16.851 9.429h-3.137c0-1.132-1.183-1.672-1.714-1.715-.604-.03-1.714.33-1.714 1.385 0 1.316.462 1.08 3.818 1.723 2.687.514 3.429 2.575 3.463 3.544.086 1.5-.892 4.491-5.486 4.491-4.59 0-5.683-2.824-5.653-4.285h3.326c-.043 1.491 1.817 1.714 2.327 1.714.515 0 2.062-.3 2.062-1.599s-1.273-1.234-1.77-1.268a21 21 0 0 1-1.23-.133C7.8 12.845 6.86 10.56 6.86 9.407c0-1.157.124-4.264 5.139-4.264 4.011 0 4.903 2.863 4.851 4.286"
          />
          <defs>
            <linearGradient
              id="SOLX__a"
              x1="18.416"
              x2="6.84"
              y1="9.784"
              y2="15.339"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".03" stopColor="#E604B7" />
              <stop offset=".61" stopColor="#483EFF" />
              <stop offset="1" stopColor="#20BDFC" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSOLX.displayName = 'SOLX'
