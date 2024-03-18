import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBnx = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m10.886 4.77-6.112 6.026A1.62 1.62 0 0 0 4.286 12c-.002.45.174.883.488 1.204l6.112 6.03c.347.343.784.48 1.221.48s.875-.137 1.222-.484l3.9-3.84c-1.003-.09-1.342.129-1.74.377a3.1 3.1 0 0 1-1.072.472c-.261.06-.48.098-.66.098-.441 0-.66-.15-.853-.283-.15-.107-.278-.197-.484-.197h-2.271c.368-.566.12-.745.12-.745s-.789-.19-.605-2.148C8.057 11.211 8.2 9.107 8.2 9.107s.535 1.732 2.931 2.653c-.103-1.32.261-1.843.429-2.074l.06-.099.081.172c.219.48.523 1.148 2.117 1.517.515-.643.716-.802 1.144-1.14l.082-.064c-.369-1.226-.304-1.908 0-2.413l.103.257c.343.857.891 2.237 3.283 1.881l-5.1-5.027a1.7 1.7 0 0 0-1.222-.484c-.437 0-.874.137-1.221.484"
          />
          <path
            fill="currentColor"
            d="M12.832 12.836c-.086.047-.172.085-.236.128.943.802 1.894-.698 1.466-.964a5.3 5.3 0 0 1-1.23.836"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#BNX__a)"
            d="m10.885 4.77-6.111 6.026A1.62 1.62 0 0 0 4.285 12c-.001.45.174.883.489 1.204l6.111 6.03c.347.343.784.48 1.222.48s.874-.137 1.221-.484l3.9-3.84c-1.003-.09-1.341.129-1.74.377a3.1 3.1 0 0 1-1.071.472c-.262.06-.48.098-.66.098-.442 0-.66-.15-.853-.283-.15-.107-.279-.197-.485-.197h-2.27c.368-.566.12-.745.12-.745s-.79-.19-.605-2.148c-1.607-1.753-1.466-3.857-1.466-3.857s.536 1.732 2.932 2.653c-.103-1.32.261-1.843.428-2.074l.06-.099.082.172c.218.48.522 1.148 2.117 1.517.514-.643.715-.802 1.144-1.14l.081-.064c-.368-1.226-.304-1.908 0-2.413l.103.257c.343.857.892 2.237 3.283 1.881l-5.1-5.027a1.7 1.7 0 0 0-1.221-.484c-.437 0-.875.137-1.222.484"
          />
          <path
            fill="url(#BNX__b)"
            d="M12.831 12.836c-.086.047-.171.085-.236.128.943.802 1.894-.698 1.466-.964a5.3 5.3 0 0 1-1.23.836"
          />
          <defs>
            <linearGradient
              id="BNX__a"
              x1="11.862"
              x2="12.102"
              y1="4.046"
              y2="20.199"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F15F3E" />
              <stop offset="1" stopColor="#EF2357" />
            </linearGradient>
            <linearGradient
              id="BNX__b"
              x1="11.862"
              x2="12.102"
              y1="4.046"
              y2="20.199"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F15F3E" />
              <stop offset="1" stopColor="#EF2357" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconBnx.displayName = 'Bnx'

export default IconBnx
