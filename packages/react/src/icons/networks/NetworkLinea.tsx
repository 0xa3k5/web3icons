import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkLinea = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.583 20H4V6.596h2.88v10.806h9.703zm0-10.807c1.419 0 2.569-1.163 2.569-2.597S18.002 4 16.583 4c-1.418 0-2.568 1.162-2.568 2.596s1.15 2.597 2.568 2.597"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M16.583 20H4V6.596h2.88v10.806h9.703zm0-10.807c1.419 0 2.569-1.163 2.569-2.597S18.002 4 16.583 4c-1.418 0-2.568 1.162-2.568 2.596s1.15 2.597 2.568 2.597"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkLinea.displayName = 'linea'
