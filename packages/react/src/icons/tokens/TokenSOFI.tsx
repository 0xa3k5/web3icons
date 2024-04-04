import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSOFI = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 4.286 4.286 12 12 19.714 19.714 12zm1.744 3.231-1.71-1.706-6.197 6.198 3.771 3.77 3.438-3.432.651.652-3.437 3.432 1.731 1.732 6.198-6.197-3.772-3.772-3.458 3.454-.673-.672z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#A950FE"
            d="M12 4.286 4.286 12 12 19.714 19.715 12zm1.745 3.231-1.71-1.706-6.197 6.198 3.771 3.77 3.437-3.432.652.652-3.438 3.432 1.732 1.732 6.197-6.197-3.771-3.772-3.459 3.454-.673-.672z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenSOFI.displayName = 'SOFI'
