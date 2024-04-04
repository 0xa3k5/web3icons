import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenHAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6 6.429h.857v5.143h.429V6.429h.857v5.143h9v-.429H8.57V6.429h.858v3.857h7.714v-.429H9.857V6.43h.857V9h2.572V6.43h.857V9h.428V6.43h.858V9h.428V6.43h.857V9h.429V6.43H18v11.143h-.857V12.43h-.429v5.143h-.857V12.43h-9v.428h8.572v4.715h-.858v-3.858H6.857v.429h7.286v3.429h-.857V15h-2.572v2.572h-.857V15H9.43v2.572h-.86V15h-.428v2.572h-.857V15h-.429v2.572H6z"
          />
        </>
      ) : (
        <>
          <path
            fill="#45E2BA"
            d="M6 6.429h.857v5.143h.429V6.429h.857v5.143h9v-.429H8.57V6.429h.858v3.857h7.714v-.429H9.857V6.43h.857V9h2.572V6.43h.857V9h.428V6.43h.858V9h.428V6.43h.857V9h.429V6.43H18v11.143h-.857V12.43h-.429v5.143h-.857V12.43h-9v.428h8.572v4.715h-.858v-3.858H6.857v.429h7.286v3.429h-.857V15h-2.572v2.572h-.857V15H9.43v2.572h-.86V15h-.428v2.572h-.857V15h-.429v2.572H6z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenHAI.displayName = 'HAI'
