import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSWTH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M6.857 13.286H5.571c.686.857 1.573 1.213 1.929 1.286z"
          />
          <path
            fill="currentColor"
            d="M7.328 14.614a4.03 4.03 0 0 0 2.1.386c2.572-.214 4.286-2.357 4.286-3 .771.129 2.507.129 3.849-.741a5.571 5.571 0 1 0-10.23 3.355z"
          />
          <path
            fill="currentColor"
            d="M17.537 10.864c-1.354.557-3.437.707-4.457.707a8.44 8.44 0 0 1-3.677 3.43h.034c2.571-.215 4.286-2.358 4.286-3 .771.128 2.507.128 3.848-.742a6 6 0 0 0-.034-.395"
          />
          <path
            fill="currentColor"
            d="M11.858 18c3.866 0 6.999-2.987 6.999-6.668v-.19c-1.243 1.094-2.644 1.68-4.5 1.5-.287 1.115-1.5 3.215-4.067 3.215-2.199 0-4.114-1.465-5.143-2.635C6 15.986 8.678 18 11.854 18z"
          />
        </>
      ) : (
        <>
          <path
            fill="#0D4947"
            d="M6.857 13.286H5.572c.685.857 1.573 1.213 1.928 1.286z"
            fillOpacity=".53"
          />
          <path
            fill="url(#SWTH__a)"
            d="M7.329 14.614a4.03 4.03 0 0 0 2.1.386c2.571-.214 4.286-2.357 4.286-3 .771.129 2.507.129 3.848-.741a5.573 5.573 0 1 0-11.094.979c.102.848.398 1.66.864 2.376z"
          />
          <path
            fill="url(#SWTH__b)"
            d="M17.538 10.864c-1.355.557-3.438.707-4.458.707a8.44 8.44 0 0 1-3.677 3.43h.034c2.572-.215 4.286-2.358 4.286-3 .772.128 2.507.128 3.849-.742a6 6 0 0 0-.034-.395"
          />
          <path
            fill="url(#SWTH__c)"
            d="M11.859 18c3.866 0 6.999-2.987 6.999-6.668v-.19c-1.243 1.094-2.645 1.68-4.5 1.5-.288 1.115-1.5 3.215-4.068 3.215-2.198 0-4.114-1.465-5.143-2.635C6 15.986 8.68 18 11.855 18z"
          />
          <defs>
            <linearGradient
              id="SWTH__a"
              x1="15.966"
              x2="5.536"
              y1="7.141"
              y2="15.746"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#D1FAFE" />
              <stop offset=".12" stopColor="#E9FDFE" />
              <stop offset=".28" stopColor="#A6EAED" />
              <stop offset=".43" stopColor="#77D4D7" />
              <stop offset=".65" stopColor="#5DC8C8" />
              <stop offset=".84" stopColor="#439CBA" />
              <stop offset="1" stopColor="#3B7DB2" />
            </linearGradient>
            <linearGradient
              id="SWTH__b"
              x1="18.498"
              x2="2.733"
              y1="6.187"
              y2="10.747"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#55A6AD" />
              <stop offset=".16" stopColor="#9CB6BA" />
              <stop offset=".57" stopColor="#4092A0" />
              <stop offset="1" stopColor="#35729F" />
            </linearGradient>
            <linearGradient
              id="SWTH__c"
              x1="18.493"
              x2="7.509"
              y1="11.559"
              y2="16.535"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#8CF2FC" />
              <stop offset=".39" stopColor="#A6F3FB" />
              <stop offset=".86" stopColor="#46A7BA" />
              <stop offset="1" stopColor="#3B7CB2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSWTH.displayName = 'SWTH'
