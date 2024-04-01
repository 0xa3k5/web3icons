import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconEUNO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M7.312 9h8.691a.86.86 0 0 0 .626-.27l1.393-1.444.145-.15c.557-.575.163-1.56-.621-1.56H7.312a.87.87 0 0 0-.626.265.95.95 0 0 0-.257.648V8.09c0 .24.094.472.257.643.167.172.39.27.626.27zm10.234 1.714H7.312a.9.9 0 0 0-.626.257.87.87 0 0 0-.257.609v6.411a.86.86 0 0 0 .257.613c.167.163.39.253.626.253h5.374a.88.88 0 0 0 .626-.257l1.542-1.517c.558-.544.168-1.226-.621-1.226H9.857v-2.151H16a.9.9 0 0 0 .625-.258l1.398-1.11.145-.14c.557-.55.163-1.484-.621-1.484"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#EUNO__a)"
            d="M7.312 9h8.691a.86.86 0 0 0 .626-.27l1.393-1.444.145-.15c.557-.575.163-1.56-.621-1.56H7.312a.87.87 0 0 0-.626.265.95.95 0 0 0-.257.648V8.09c0 .24.094.472.257.643.167.172.39.27.626.27z"
          />
          <path
            fill="url(#EUNO__b)"
            d="M17.546 10.714H7.312a.9.9 0 0 0-.626.257.87.87 0 0 0-.257.609v6.411a.86.86 0 0 0 .257.613c.167.163.39.253.626.253h5.374a.88.88 0 0 0 .626-.257l1.542-1.517c.558-.544.168-1.226-.621-1.226H9.857v-2.151H16a.9.9 0 0 0 .625-.258l1.398-1.11.145-.14c.557-.55.163-1.484-.621-1.484"
          />
          <defs>
            <linearGradient
              id="EUNO__a"
              x1="18.429"
              x2="6.537"
              y1="17.944"
              y2="19.22"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7599F2" />
              <stop offset="1" stopColor="#562CDD" />
            </linearGradient>
            <linearGradient
              id="EUNO__b"
              x1="18.429"
              x2="8.173"
              y1="8.769"
              y2="13.033"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7599F2" />
              <stop offset="1" stopColor="#562CDD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconEUNO.displayName = 'EUNO'
