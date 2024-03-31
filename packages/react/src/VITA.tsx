import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconVITA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.793 10.898c1.046-2.117.214-3.15-.57-3.681a2.26 2.26 0 0 0-1.239-.36c-1.813-.013-3 1.599-5.023 1.599-1.91 0-3.27-1.565-5.022-1.599a2.15 2.15 0 0 0-1.526.626c-1.046.848-.72 2.618-.287 3.415 1.307 2.645 4.02 7.959 6.835 7.959s5.786-5.846 6.832-7.959"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFDD35"
            d="M18.793 10.898c1.046-2.117.214-3.15-.57-3.681a2.26 2.26 0 0 0-1.239-.36c-1.813-.013-3 1.599-5.023 1.599-1.91 0-3.27-1.565-5.022-1.599a2.15 2.15 0 0 0-1.526.626c-1.046.848-.72 2.618-.287 3.415 1.307 2.645 4.02 7.959 6.835 7.959s5.786-5.846 6.832-7.959"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconVITA.displayName = 'VITA'
