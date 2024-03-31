import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTROVE = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.207 16.414a2.16 2.16 0 0 0 1.916 1.157h1.654c.81 0 1.329-.857.956-1.573l-5.777-11.13a1.08 1.08 0 0 0-1.912 0l-5.777 11.13a1.076 1.076 0 0 0 .956 1.573h1.47c.776 0 1.496-.42 1.877-1.093l1.633-2.888a1.6 1.6 0 0 1-.617-.621 1.714 1.714 0 1 1 2.828 0c-.154.275-.384.5-.664.647z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TROVE__a)"
            d="M14.207 16.414a2.16 2.16 0 0 0 1.916 1.157h1.654c.81 0 1.329-.857.956-1.573l-5.777-11.13a1.08 1.08 0 0 0-1.912 0l-5.777 11.13a1.076 1.076 0 0 0 .956 1.573h1.47c.776 0 1.496-.42 1.877-1.093l1.633-2.888a1.6 1.6 0 0 1-.617-.621 1.714 1.714 0 1 1 2.828 0c-.154.275-.384.5-.664.647z"
          />
          <defs>
            <linearGradient
              id="TROVE__a"
              x1="12"
              x2="12"
              y1="4.286"
              y2="17.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6036EF" />
              <stop offset="1" stopColor="#746E89" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTROVE.displayName = 'TROVE'
