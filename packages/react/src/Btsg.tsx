import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBtsg = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.572 16.243V0H6.429v16.243a.48.48 0 0 0 .488.471h1.166a.48.48 0 0 0 .489-.471m4.345-7.672c-.27 0-.488.24-.488.536V19.18c0 .295.218.535.488.535h1.166c.27 0 .489-.24.489-.535V9.107c0-.296-.219-.536-.489-.536zm-3 1.286c-.27 0-.488.236-.488.532v8.365c0 .296.218.532.488.532h1.166c.27 0 .489-.236.489-.532V10.39c0-.296-.219-.532-.489-.532zm5.512.969c0-.3.218-.54.488-.54h1.166c.27 0 .489.24.489.54v7.063c0 .3-.219.54-.489.54h-1.166c-.27 0-.488-.24-.488-.54z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BTSG__a)"
            d="M8.572 16.243V0H6.429v16.243a.48.48 0 0 0 .488.471h1.166a.48.48 0 0 0 .489-.471m4.345-7.672c-.27 0-.488.24-.488.536V19.18c0 .295.218.535.488.535h1.166c.27 0 .489-.24.489-.535V9.107c0-.296-.219-.536-.489-.536zm-3 1.286c-.27 0-.488.236-.488.532v8.365c0 .296.218.532.488.532h1.166c.27 0 .489-.236.489-.532V10.39c0-.296-.219-.532-.489-.532zm5.512.969c0-.3.218-.54.488-.54h1.166c.27 0 .489.24.489.54v7.063c0 .3-.219.54-.489.54h-1.166c-.27 0-.488-.24-.488-.54z"
          />
          <defs>
            <linearGradient
              id="BTSG__a"
              x1="12"
              x2="12"
              y1="0"
              y2="19.714"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9F559B" />
              <stop offset="1" stopColor="#F70762" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBtsg.displayName = 'Btsg'

export default IconBtsg
