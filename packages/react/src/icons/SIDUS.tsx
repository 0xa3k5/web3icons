import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSIDUS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M7.745 9.188a1.37 1.37 0 0 1 1.135-.617h10.886c.317 0 .437.129.347.386a.8.8 0 0 1-.128.24l-.455.621c-.253.343-.703.468-1.144.468H8.85c-.21 0-.407.261-.574.475a.4.4 0 0 0-.06.112c-.047.137.009.27.18.27h9.193c.471 0 .643.12.514.501a1.5 1.5 0 0 1-.189.356l-2.074 2.803a1.52 1.52 0 0 1-1.14.625H3.802c-.313 0-.433-.128-.343-.385a.8.8 0 0 1 .128-.24l1.38-1.865c.279-.377.665-.471 1.136-.51h8.859c.205 0 .402-.222.57-.428a.4.4 0 0 0 .06-.12c.042-.129-.009-.309-.172-.309H6.917c-.484 0-.66-.073-.531-.445q.057-.153.206-.365l1.157-1.573z"
      />
    </BaseIcon>
  ),
)

IconSIDUS.displayName = 'SIDUS'
