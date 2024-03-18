import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGns = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.962 8.276a.94.94 0 0 1 .467.81v5.828c0 .523-.326.943-.857.943-.532 0-.858-.42-.858-.943v-3.63c0-.287-.514-.467-.771-.334l-3.386 1.787a.97.97 0 0 1-1.298-.386.93.93 0 0 1 .39-1.272l5.37-2.825a.98.98 0 0 1 .942.022"
          />
          <path
            fill="currentColor"
            d="M9.429 10.65c.771-.227 1.328-.248 1.95-.248.912 0 1.585.23 1.83.514.162.043.505.184.505.368v3.63c0 .523.326.943.857.943.532 0 .858-.42.858-.943V9.086a.94.94 0 0 0-.472-.81.99.99 0 0 0-.947-.022z"
          />
          <path
            fill="currentColor"
            d="M12.467 9.06c.484.129 1.247.467 1.247 1.226v.973c0 .008 0-.009 0 0v3.634c0 .514.326.964.857.964.532 0 .858-.42.858-.943V9.086a.94.94 0 0 0-.472-.81.99.99 0 0 0-.947-.022zm-1.453 4.847-1.071.626c-.154.09-.227.274-.133.428.124.206.334.468.634.66.309.202.639.245.879.236.163-.013.248-.154.248-.317v-1.31c0-.287-.3-.472-.557-.317z"
          />
          <path
            fill="currentColor"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GNS__a)"
            d="M14.961 8.276a.94.94 0 0 1 .467.81v5.828c0 .523-.326.943-.857.943s-.857-.42-.857-.943v-3.63c0-.287-.514-.467-.772-.334l-3.385 1.787a.97.97 0 0 1-1.299-.386.93.93 0 0 1 .39-1.272l5.37-2.825a.98.98 0 0 1 .943.022"
          />
          <path
            fill="url(#GNS__b)"
            d="M9.428 10.65c.772-.227 1.329-.248 1.95-.248.913 0 1.586.23 1.83.514.163.043.506.184.506.368v3.63c0 .523.326.943.857.943s.857-.42.857-.943V9.086a.93.93 0 0 0-.471-.81.99.99 0 0 0-.947-.022z"
          />
          <path
            fill="url(#GNS__c)"
            d="M12.467 9.06c.484.129 1.247.467 1.247 1.226v.973c0 .008 0-.009 0 0v3.634c0 .514.326.964.857.964s.857-.42.857-.943V9.086a.93.93 0 0 0-.471-.81.99.99 0 0 0-.947-.022z"
          />
          <path
            fill="url(#GNS__d)"
            d="m11.014 13.907-1.072.626c-.154.09-.227.274-.132.428.124.206.334.468.634.66.308.202.638.245.878.236.163-.013.249-.154.249-.317v-1.31c0-.287-.3-.472-.557-.317z"
          />
          <path
            fill="url(#GNS__e)"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="GNS__a"
              x1="18.137"
              x2="7.382"
              y1="4.712"
              y2="14.763"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".45" stopColor="#266E84" />
              <stop offset="1" stopColor="#56DBAE" />
            </linearGradient>
            <linearGradient
              id="GNS__b"
              x1="13.28"
              x2="12.351"
              y1="5.069"
              y2="19.333"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".18" stopColor="#2F778D" />
              <stop offset=".27" stopColor="#43B39C" />
            </linearGradient>
            <linearGradient
              id="GNS__c"
              x1="11.82"
              x2="11.82"
              y1="4.713"
              y2="19.286"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CFB8F" />
              <stop offset="1" stopColor="#1FC3F1" />
            </linearGradient>
            <linearGradient
              id="GNS__d"
              x1="11.737"
              x2="16.749"
              y1="8.052"
              y2="19.444"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#34D6C1" />
              <stop offset="1" stopColor="#38BFD2" />
            </linearGradient>
            <linearGradient
              id="GNS__e"
              x1="8.142"
              x2="16.285"
              y1="6.429"
              y2="18.214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CFB8F" />
              <stop offset="1" stopColor="#28CEDD" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGns.displayName = 'Gns'

export default IconGns
