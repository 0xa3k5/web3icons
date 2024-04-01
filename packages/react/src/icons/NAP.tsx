import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconNAP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m13.616 16.886-.12.038a5.145 5.145 0 1 1 .12-.038M10.856 9H9v.424h.197l.232.251v4.468s0 .428-.429.428V15h1.286v-.429s-.429-.021-.429-.428V10.14L14.34 15h.231V9.857s0-.428.429-.428V9h-1.286v.429s.429 0 .429.428v2.756z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M17.151 6.848A7.286 7.286 0 1 0 6.848 17.152 7.286 7.286 0 0 0 17.15 6.848m-3.019.006a5.574 5.574 0 1 0-4.27 10.297 5.574 5.574 0 0 0 4.27-10.297"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#03A7E4"
            d="m13.616 16.886-.12.038a5.145 5.145 0 1 1 .12-.038M10.856 9H9v.424h.197l.232.251v4.468s0 .428-.429.428V15h1.286v-.429s-.429-.021-.429-.428V10.14L14.34 15h.231V9.857s0-.428.429-.428V9h-1.286v.429s.429 0 .429.428v2.756z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#03A7E4"
            d="M17.151 6.848A7.286 7.286 0 1 0 6.848 17.152 7.286 7.286 0 0 0 17.15 6.848m-3.019.006a5.574 5.574 0 1 0-4.27 10.297 5.574 5.574 0 0 0 4.27-10.297"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconNAP.displayName = 'NAP'
