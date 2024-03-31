import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconEOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M11.874 3.285a.214.214 0 0 1 .299.046l3.64 4.97a.2.2 0 0 1 .036.078l1.764 7.644a.21.21 0 0 1-.087.224l-5.365 3.749a.214.214 0 0 1-.283.033L6.48 16.247a.21.21 0 0 1-.086-.224L8.157 8.38a.2.2 0 0 1 .036-.078l3.612-4.933a.2.2 0 0 1 .069-.083m.129.539-3.4 4.645 2.35 7.388h2.094l2.356-7.391zm3.604 5.413-2.11 6.62h3.637zm1.116 7.049H13.36l-.963 3.021zm-4.724 2.857.911-2.857h-1.82zm-1.495-3.286L8.4 9.242l-1.526 6.615zm-3.22.429h3.357l.963 3.027z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </BaseIcon>
  ),
)

IconEOS.displayName = 'EOS'
