import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSAKAI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M8.572 10.071V6.214L5.143 8.143zM12 8.143 8.572 10.07v3.858L12 15.857z"
          />
          <path
            fill="currentColor"
            d="m5.143 8.143 3.429 1.928v3.858l-3.429 1.928zm3.429-1.929L12 8.143 8.572 10.07z"
          />
          <path
            fill="currentColor"
            d="m5.143 15.857 3.429-1.928L12 15.857v3.857zm10.286-9.643L12 8.143 8.572 6.214 12 4.286zM12 8.143l3.429 1.928v3.858L12 15.857zm6.857 0L15.43 10.07v3.858l3.428 1.928z"
          />
          <path
            fill="currentColor"
            d="M15.429 6.214 12 8.143l3.429 1.928zm3.428 9.643L15.43 13.93 12 15.857v3.857zm-3.428-5.786V6.214l3.428 1.929z"
          />
        </>
      ) : (
        <>
          <path fill="#348AA7" d="M8.571 10.071V6.214L5.143 8.143z" />
          <path fill="#55CF98" d="M12 8.143 8.57 10.07v3.858L12 15.857z" />
          <path
            fill="#1A6882"
            d="M5.143 8.143 8.57 10.07v3.858l-3.428 1.928z"
          />
          <path fill="#76E8B5" d="M8.571 6.214 12 8.143 8.57 10.07z" />
          <path fill="#12556B" d="M5.143 15.857 8.57 13.93 12 15.857v3.857z" />
          <path
            fill="#BCE784"
            d="M15.428 6.214 12 8.143 8.57 6.214 12 4.286z"
          />
          <path fill="#48B081" d="m12 8.143 3.428 1.928v3.858L12 15.857z" />
          <path
            fill="#1A6882"
            d="m18.857 8.143-3.429 1.928v3.858l3.429 1.928z"
          />
          <path fill="#57C795" d="M15.428 6.214 12 8.143l3.428 1.928z" />
          <path
            fill="#0D3E4F"
            d="m18.857 15.857-3.429-1.928L12 15.857v3.857z"
          />
          <path fill="#348AA7" d="M15.428 10.071V6.214l3.429 1.929z" />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSAKAI.displayName = 'SAKAI'
