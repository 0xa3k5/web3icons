import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconADP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.72 5.143a.819.819 0 0 0-1.44 0L5.237 16.697a.8.8 0 0 0-.086.502c2.01.574 5.246.32 6.849-2.713 1.414-2.687 2.246-4.166 2.764-5.096l.094-.163-2.138-4.08zm2.31 4.414-2.623 4.929a4.65 4.65 0 0 0 4.564 3.085c.793 0 1.406-.141 1.869-.343a.8.8 0 0 0-.073-.531z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ADP__a)"
            d="M12.72 5.143a.819.819 0 0 0-1.44 0L5.237 16.697a.8.8 0 0 0-.085.502c2.01.574 5.245.32 6.848-2.713 1.415-2.687 2.246-4.166 2.765-5.096l.094-.163-2.139-4.08z"
          />
          <path
            fill="url(#ADP__b)"
            d="m15.03 9.557-2.623 4.929a4.65 4.65 0 0 0 4.565 3.085c.793 0 1.405-.141 1.868-.343a.8.8 0 0 0-.073-.531z"
          />
          <defs>
            <linearGradient
              id="ADP__a"
              x1="8.269"
              x2="15.724"
              y1="5.334"
              y2="16.816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E64DF" />
              <stop offset="1" stopColor="#4587F1" />
            </linearGradient>
            <linearGradient
              id="ADP__b"
              x1="8.269"
              x2="15.724"
              y1="5.334"
              y2="16.816"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3E64DF" />
              <stop offset="1" stopColor="#4587F1" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconADP.displayName = 'ADP'
