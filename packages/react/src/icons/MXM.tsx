import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMXM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.223 5.571h-2.502l-5.578 9.776 1.26 2.224h11.139l1.315-2.224zM6.322 15l4.862-8.572h1.07l-4.276 7.715h4.915l.57.857zm3.132-1.714 3.56-6.41 4.85 8.414-.541.997-4.31-7.431-2.425 4.43zm2.118 0 .428-.858.429.858zm1.454-2.742 3.572 6.168H6.884l-.527-.855h8.672l-2.502-4.403z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#MXM__a)"
            d="M13.223 5.571H10.72l-5.578 9.776 1.26 2.224H17.54l1.316-2.224zM6.32 15l4.862-8.572h1.071l-4.277 7.715h4.916l.57.857zm3.133-1.714 3.559-6.41 4.85 8.414-.54.997-4.31-7.431-2.425 4.43zm2.117 0 .429-.858.428.858zm1.455-2.742 3.571 6.168H6.884l-.527-.855h8.671l-2.502-4.403z"
          />
          <defs>
            <linearGradient
              id="MXM__a"
              x1="8.48"
              x2="13.288"
              y1="6.36"
              y2="17.05"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#18DBEB" />
              <stop offset="1" stopColor="#4AF2CF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMXM.displayName = 'MXM'
