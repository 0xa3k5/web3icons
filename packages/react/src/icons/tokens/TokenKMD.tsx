import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenKMD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 6.429a5.571 5.571 0 1 0 5.247 3.693.643.643 0 0 1 1.21-.434 6.857 6.857 0 1 1-4.36-4.218.643.643 0 1 1-.392 1.224A5.6 5.6 0 0 0 12 6.43"
          />
          <path
            fill="currentColor"
            d="M17.571 7.714A1.286 1.286 0 0 1 16.286 9c-.369 0-.773.031-1.033.292l-.4.4c-.45.45-.463 1.162-.335 1.785a2.571 2.571 0 1 1-2.044-2.005c.609.114 1.297.09 1.736-.349l.524-.524c.224-.225.266-.567.266-.885a1.286 1.286 0 0 1 2.571 0"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#KMD__a)"
            d="M12 6.429a5.571 5.571 0 1 0 5.247 3.693.643.643 0 0 1 1.21-.434 6.857 6.857 0 1 1-4.36-4.218.643.643 0 1 1-.392 1.224A5.6 5.6 0 0 0 12 6.43"
          />
          <path
            fill="url(#KMD__b)"
            d="M17.571 7.714A1.286 1.286 0 0 1 16.285 9c-.368 0-.773.031-1.033.292l-.4.4c-.45.45-.463 1.162-.334 1.785a2.571 2.571 0 1 1-2.045-2.005c.61.114 1.298.09 1.736-.349l.524-.524c.225-.225.266-.567.266-.885a1.286 1.286 0 0 1 2.572 0"
          />
          <defs>
            <linearGradient
              id="KMD__a"
              x1="16.213"
              x2="8.834"
              y1="6.907"
              y2="17.498"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00ECD2" />
              <stop offset="1" stopColor="#1B456E" />
            </linearGradient>
            <linearGradient
              id="KMD__b"
              x1="16.001"
              x2="11.62"
              y1="7.476"
              y2="13.764"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00ECD2" />
              <stop offset="1" stopColor="#1B456E" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenKMD.displayName = 'KMD'
