import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconCXO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 6h-1.285v1.286h1.285zm-1.285 1.286h-1.288V8.57h1.288zm1.285 8.143h-1.285v1.286h1.285zm-1.285-2.143h-1.286v1.285h1.286zM15 10.715h-1.286V12H15zm1.286-1.286H15v1.286h1.286zm2.571 1.286h-1.285V12h1.285z"
          />
          <path
            fill="currentColor"
            d="M16.286 17.143v-1.286H15v1.286h-1.286v-1.286H15v-2.571h-1.286V12H12.43v-1.286h1.285V9.43H12.43V8.143h1.285v1.286H15V7.286h1.286V6h-3.429L10.93 9.429 8.764 6h-3.62L9 12.214 5.143 18.43h3.545l2.24-3.858 1.93 3.858h4.714v-1.286zm-3.857-2.572v-1.285h-1.286V12l-1.286.005v-1.29h1.286V12h1.286v1.286h1.285v1.285z"
          />
        </>
      ) : (
        <>
          <path
            fill="#8DDB2E"
            d="M18.857 6H17.57v1.286h1.286zM17.57 7.286h-1.287V8.57h1.287zm1.286 8.143H17.57v1.286h1.286zm-1.286-2.143h-1.286v1.285h1.286zM15 10.715h-1.286V12H15zm1.285-1.286H15v1.286h1.285zm2.572 1.286H17.57V12h1.286z"
          />
          <path
            fill="#8DDB2E"
            d="M16.285 17.143v-1.286H15v1.286h-1.286v-1.286H15v-2.571h-1.286V12h-1.286v-1.286h1.286V9.43h-1.286V8.143h1.286v1.286H15V7.286h1.285V6h-3.428l-1.929 3.429L8.764 6H5.143L9 12.214 5.143 18.43h3.545l2.24-3.858 1.929 3.858h4.714v-1.286zm-3.857-2.572v-1.285h-1.285V12l-1.286.005v-1.29h1.286V12h1.285v1.286h1.286v1.285z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconCXO.displayName = 'CXO'
