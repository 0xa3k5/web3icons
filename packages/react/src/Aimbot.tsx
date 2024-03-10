import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAimbot = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m8.143 11.85 3.84 1.864L15.857 12l-3.874-1.714"
          />
          <path fill="currentColor" d="m8.143 11.85 3.84 1.864v-3.428z" />
          <path
            fill="currentColor"
            d="M18.459 7.714H5.54l-2.113 2.43v3.712l2.113 2.43H18.46l2.112-2.43v-3.712zm.107 5.743s-.695 1.114-1.055 1.114H6.488c-.36 0-1.054-1.114-1.054-1.114s-.073-.741-.073-1.448.073-1.449.073-1.449L6.488 9.43h11.023l1.055 1.131s.073.742.073 1.449-.073 1.448-.073 1.448"
          />
        </>
      ) : (
        <>
          <g clipPath="url(#AIMBOT__a)">
            <path fill="url(#AIMBOT__b)" d="M0 0h24v24H0z" />
            <path
              fill="url(#AIMBOT__c)"
              d="m8.143 11.85 3.84 1.864L15.857 12l-3.874-1.714"
            />
            <path fill="url(#AIMBOT__d)" d="m8.143 11.85 3.84 1.864v-3.428z" />
            <path
              fill="url(#AIMBOT__e)"
              d="M18.459 7.714H5.54l-2.113 2.43v3.712l2.113 2.43H18.46l2.112-2.43v-3.712zm.107 5.743s-.695 1.114-1.055 1.114H6.488c-.36 0-1.054-1.114-1.054-1.114s-.073-.741-.073-1.448.073-1.449.073-1.449L6.488 9.43h11.023l1.055 1.131s.073.742.073 1.449-.073 1.448-.073 1.448"
            />
          </g>
          <defs>
            <linearGradient
              id="AIMBOT__b"
              x1="4.466"
              x2="29.207"
              y1="4.161"
              y2="32.58"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1A1E21" />
              <stop offset="1" stopColor="#06060A" />
            </linearGradient>
            <linearGradient
              id="AIMBOT__c"
              x1="1024.4"
              x2="879.866"
              y1="363.054"
              y2="606.23"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset="1" stopColor="#8F9196" />
            </linearGradient>
            <linearGradient
              id="AIMBOT__d"
              x1="5676"
              x2="7825.99"
              y1="581.657"
              y2="7339.38"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
            </linearGradient>
            <linearGradient
              id="AIMBOT__e"
              x1="34432.6"
              x2="34432.6"
              y1="581.314"
              y2="35995"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
            </linearGradient>
            <clipPath id="AIMBOT__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAimbot.displayName = 'Aimbot'

export default IconAimbot
