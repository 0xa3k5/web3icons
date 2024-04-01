import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconIDEX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.303 6h9.343L18 7.727l-3.317 4.307L18 16.311 16.663 18h-9.36L6 16.311l3.296-4.277L6 7.727zm.034.596 8.572 10.971H7.406l-.652-.848h6.39c.086 0 .137-.103.086-.172L6.416 7.75l.924-1.16zm3.309 7.165 1.324 1.668H9.947a.309.309 0 0 1-.244-.502zm3.793-2.052-1.123-1.41.96-1.2c.167-.202.021-.528-.245-.528h-2.044l-.176-.257c-.085-.137.009-.171.172-.171h5.366l-2.915 3.566z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#IDEX__a)"
            d="M7.303 6h9.343L18 7.727l-3.317 4.307L18 16.311 16.663 18h-9.36L6 16.311l3.296-4.277L6 7.727zm.034.596 8.572 10.971H7.406l-.652-.848h6.39c.086 0 .137-.103.086-.172L6.416 7.75l.924-1.16zm3.309 7.165 1.324 1.668H9.947a.309.309 0 0 1-.244-.502zm3.793-2.052-1.123-1.41.96-1.2c.167-.202.021-.528-.245-.528h-2.044l-.176-.257c-.085-.137.009-.171.172-.171h5.366l-2.915 3.566z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="IDEX__a"
              x1="8.023"
              x2="16.487"
              y1="18"
              y2="7.419"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9722AD" />
              <stop offset=".78" stopColor="#592E9C" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconIDEX.displayName = 'IDEX'
