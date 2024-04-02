import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenEUSD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 7.286H8.781c-.548.013-1.757.505-2.215 2.4 0 .103-.129.703-.3 1.457h-1.98l1.555 1.843-.24 1.011c-.265.904-.278 2.717 1.796 2.717H16a.93.93 0 0 0 .89-.651L17.217 15h-6.75c-.523 0-.887-.497-.887-1.003s.364-1.14.887-1.14h6.304c.386 0 .724 0 .84-.36l.45-1.354h-6.6a1.1 1.1 0 0 1-1.106-1.089A1.07 1.07 0 0 1 11.46 9h6.197a.94.94 0 0 0 .892-.669z"
          />
        </>
      ) : (
        <>
          <path
            fill="#90C31F"
            d="M18.858 7.286H8.782c-.549.013-1.757.505-2.216 2.4 0 .103-.128.703-.3 1.457h-1.98l1.556 1.843-.24 1.011c-.266.904-.279 2.717 1.796 2.717h8.601a.93.93 0 0 0 .891-.651L17.216 15h-6.75c-.523 0-.887-.497-.887-1.003s.364-1.14.887-1.14h6.304c.386 0 .725 0 .84-.36l.45-1.354h-6.6a1.1 1.1 0 0 1-1.105-1.089A1.07 1.07 0 0 1 11.46 9h6.198a.94.94 0 0 0 .891-.669z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenEUSD.displayName = 'EUSD'
