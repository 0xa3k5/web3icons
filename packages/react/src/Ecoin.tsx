import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconEcoin = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .428a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M11.939 6.43c-1.831 0-2.859.798-3.162.992l1.998.898c.507-.148 1.197-.172 1.479-.165 3.007.194 3.633 2.948 3.57 4.274H9.323c.36 1.721 1.455 2.142 2.789 2.142 1.159 0 2.035-.895 2.035-1.285H15.5c-.53 1.871-2.082 2.581-3.247 2.581-.675 0-1.211-.12-1.48-.204l-2.006.915c1.146.863 2.801 1.023 3.486.993 3.947 0 5.318-3.546 5.318-5.478 0-4.447-3.658-5.662-5.633-5.662"
          />
          <path
            fill="currentColor"
            d="M12.107 9.429c-1.716 0-2.5 1.416-2.678 2.142h5.143c-.106-.703-.954-2.142-2.465-2.142"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#ECOIN__a)"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .428a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#ECOIN__b)"
            d="M11.938 6.43c-1.83 0-2.858.798-3.161.992l1.998.898c.506-.148 1.197-.172 1.478-.165 3.008.194 3.633 2.948 3.57 4.274h-6.5c.36 1.721 1.455 2.142 2.788 2.142 1.159 0 2.035-.895 2.035-1.285h1.355c-.53 1.871-2.082 2.581-3.248 2.581a5.2 5.2 0 0 1-1.479-.204l-2.007.915c1.146.863 2.802 1.023 3.486.993 3.947 0 5.318-3.546 5.318-5.478 0-4.447-3.657-5.662-5.633-5.662"
          />
          <path
            fill="url(#ECOIN__c)"
            d="M12.107 9.429c-1.717 0-2.501 1.416-2.679 2.142h5.143c-.106-.703-.954-2.142-2.464-2.142"
          />
          <defs>
            <linearGradient
              id="ECOIN__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CDAE26" />
              <stop offset=".409" stopColor="#F9DA3B" />
              <stop offset=".757" stopColor="#EDC62D" />
              <stop offset="1" stopColor="#CEAF26" />
            </linearGradient>
            <linearGradient
              id="ECOIN__b"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CDAE26" />
              <stop offset=".409" stopColor="#F9DA3B" />
              <stop offset=".757" stopColor="#EDC62D" />
              <stop offset="1" stopColor="#CEAF26" />
            </linearGradient>
            <linearGradient
              id="ECOIN__c"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#CDAE26" />
              <stop offset=".409" stopColor="#F9DA3B" />
              <stop offset=".757" stopColor="#EDC62D" />
              <stop offset="1" stopColor="#CEAF26" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconEcoin.displayName = 'Ecoin'

export default IconEcoin
