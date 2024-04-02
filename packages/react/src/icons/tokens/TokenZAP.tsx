import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenZAP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.879 9.857V5.684c.02-.103-.019-.347-.339-.497-.279-.131-.583.062-.674.188-1.39 2.222-3.988 6.896-4.089 7.13-.128.297-.04.482.08.618.092.102.308.163.424.163h2.823l-.602 5.105a.53.53 0 0 0 .43.45c.323.078.546-.155.617-.282l4.615-7.808c.066-.103.206-.377.058-.617a.6.6 0 0 0-.534-.277z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ZAP__a)"
            d="M12.879 9.857V5.684c.02-.103-.019-.347-.339-.497-.279-.131-.583.062-.674.188-1.39 2.222-3.988 6.896-4.089 7.13-.128.297-.04.482.08.618.092.102.308.163.424.163h2.823l-.602 5.105a.53.53 0 0 0 .43.45c.323.078.546-.155.617-.282l4.615-7.808c.066-.103.206-.377.058-.617a.6.6 0 0 0-.534-.277z"
          />
          <defs>
            <linearGradient
              id="ZAP__a"
              x1="12.001"
              x2="12.001"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#087FFE" />
              <stop offset="1" stopColor="#50C0FE" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenZAP.displayName = 'ZAP'
