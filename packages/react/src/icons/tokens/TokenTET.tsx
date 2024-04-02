import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenTET = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9.017 5.788a.97.97 0 0 0-.338.555v-.005L6.45 17.284a.96.96 0 0 0 .952 1.144h6.969a.97.97 0 0 0 .947-.771l2.237-10.941a.966.966 0 0 0-.956-1.145H9.63a.97.97 0 0 0-.613.217m2.515 3.64L10.2 15.69h-.009a1 1 0 0 0-.034.227c0 .09.15.369.835.369.682 0 .999-.129 1.085-.557.068-.343.904-4.397 1.315-6.3h1.826c.21-.03.634-.116.634-.844 0-.348-.201-.442-.33-.442H9.994c-.189.034-.57.129-.57.857 0 .223.137.429.351.429z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#487BFF"
            d="M9.017 5.788a.97.97 0 0 0-.338.555v-.005L6.45 17.284a.96.96 0 0 0 .952 1.144h6.969a.97.97 0 0 0 .947-.771l2.237-10.941a.966.966 0 0 0-.956-1.145H9.63a.97.97 0 0 0-.613.217m2.515 3.64L10.2 15.69h-.009a1 1 0 0 0-.034.227c0 .09.15.369.835.369.682 0 .999-.129 1.085-.557.068-.343.904-4.397 1.315-6.3h1.826c.21-.03.634-.116.634-.844 0-.348-.201-.442-.33-.442H9.994c-.189.034-.57.129-.57.857 0 .223.137.429.351.429z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenTET.displayName = 'TET'
