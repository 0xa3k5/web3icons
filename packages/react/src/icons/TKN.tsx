import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTKN = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.857 6.453 3-1.31v3.429h3.857v2.571h-3.857v4.025c0 1.262 2.21 1.406 3 .987l.71 2.18c-1.741 1.036-6.71.79-6.71-3.147zM7.32 11.657c-.73 0-1.319-.733-1.319-1.639 0-.905.596-1.632 1.326-1.632.736 0 1.326.727 1.326 1.633 0 .898-.59 1.631-1.326 1.631z"
          />
        </>
      ) : (
        <>
          <path
            fill="#24DD7B"
            d="m9.857 6.453 3-1.31v3.429h3.857v2.571h-3.857v4.025c0 1.262 2.21 1.406 3 .987l.71 2.18c-1.741 1.036-6.71.79-6.71-3.147zM7.32 11.657c-.73 0-1.319-.733-1.319-1.639 0-.905.596-1.632 1.326-1.632.736 0 1.326.727 1.326 1.633 0 .898-.59 1.631-1.326 1.631z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconTKN.displayName = 'TKN'
