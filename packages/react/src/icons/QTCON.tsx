import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconQTCON = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M17.39 7.442a1.356 1.356 0 0 0-1.263-1.44 1.35 1.35 0 0 0-1.421 1.278c-.081 1.373-.666 2.693-1.575 3.852l-2.315-2.32a5.4 5.4 0 0 0 .721-2.105c.048-.39-.277-.707-.669-.707H6.717A.72.72 0 0 0 6 6.718v4.16c0 .392.317.718.706.67a5.4 5.4 0 0 0 2.13-.74l2.268 2.272c-1.32.97-2.757 1.573-3.916 1.72a1.357 1.357 0 0 0-1.166 1.52 1.35 1.35 0 0 0 1.502 1.181c1.8-.229 3.8-1.141 5.512-2.485l2.567 2.572A1.403 1.403 0 0 0 18 16.593c0-.373-.148-.73-.411-.995l-2.538-2.543c1.275-1.547 2.213-3.46 2.339-5.613"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.657 12.696q-.259.215-.527.41l1.92 1.924q.396-.309.77-.647.652-.592 1.218-1.266c-.428-.388-.989-.777-1.883-.777-.656 0-1.141.162-1.498.356"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconQTCON.displayName = 'QTCON'
