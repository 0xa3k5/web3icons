import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAury = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#00EADB"
        d="M12 18.857a6.857 6.857 0 1 0 0-13.714 6.857 6.857 0 0 0 0 13.714"
      />
      <path fill="#E756CB" d="M5.155 12.429a6.857 6.857 0 0 0 13.689 0z" />
      <path
        fill="url(#AURY__a)"
        d="M17.674 8.147c.257.386.484.797.664 1.23-.6.12-1.243.322-1.555.789-.035.051.004.12.068.12.407 0 1.136.008 1.809.077.128.527.197 1.071.197 1.637h-3.742l1.758-3.883a2.7 2.7 0 0 1 .801.03"
      />
      <path
        fill="url(#AURY__b)"
        d="M16.17 6.557a6.83 6.83 0 0 0-6.76-.907c1.633.321 2.52.638 2.816.78.038.017.03.068-.013.072-1.17.283-2.906.343-4.307.193l.827 1.839a.24.24 0 0 1 .116.051c.223.193.625.369 1.2.373.008 0 .021.013.021.026q-.002.013-.017.021A7 7 0 0 1 9 9.13l.137.3h5.743l.248-.558c-.235.056-.583.12-.934.129-.009 0-.013-.013 0-.017a6.5 6.5 0 0 0 1.136-.562z"
      />
      <path
        fill="url(#AURY__c)"
        d="M6.848 7.474a7 7 0 0 0-.527.682c.227.214.557.377 1.016.411z"
      />
      <path fill="url(#AURY__d)" d="m13.705 12 .583-1.286H9.715L10.294 12z" />
      <path fill="url(#AURY__e)" d="M10.491 12.429h3.017L12 15.75z" />
      <path
        fill="url(#AURY__f)"
        d="m8.884 12-1.17-2.571h.013l-.026-.06.013.06a4.18 4.18 0 0 0-2.537 1.868 7 7 0 0 0-.034.703z"
      />
      <path
        fill="url(#AURY__g)"
        d="M9.077 12.429 12 18.857a6.857 6.857 0 0 1-6.845-6.428z"
      />
      <path
        fill="url(#AURY__h)"
        d="M14.923 12.429h3.921A6.857 6.857 0 0 1 12 18.857z"
      />
      <defs>
        <linearGradient
          id="AURY__a"
          x1="-6.278"
          x2="-6.278"
          y1="-5.274"
          y2="43.006"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E756CC" />
          <stop offset=".47" stopColor="#8F79D4" />
          <stop offset=".6" stopColor="#668AD7" />
        </linearGradient>
        <linearGradient
          id="AURY__b"
          x1="11.936"
          x2="11.936"
          y1="5.154"
          y2="49.032"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E756CC" />
          <stop offset=".47" stopColor="#8F79D4" />
        </linearGradient>
        <linearGradient
          id="AURY__c"
          x1="81.815"
          x2="81.815"
          y1="-24.149"
          y2="148.127"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E756CC" />
          <stop offset=".47" stopColor="#8F79D4" />
        </linearGradient>
        <linearGradient
          id="AURY__d"
          x1="11.993"
          x2="11.993"
          y1="-54.352"
          y2="92.084"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E756CC" />
          <stop offset=".47" stopColor="#8F79D4" />
          <stop offset=".6" stopColor="#668AD7" />
        </linearGradient>
        <linearGradient
          id="AURY__e"
          x1="12"
          x2="12"
          y1="-24.976"
          y2="31.709"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".47" stopColor="#8F79D4" />
          <stop offset=".6" stopColor="#668AD7" />
          <stop offset="1" stopColor="#01E9C9" />
        </linearGradient>
        <linearGradient
          id="AURY__f"
          x1="30.278"
          x2="30.278"
          y1="-16.908"
          y2="54.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E756CC" />
          <stop offset=".47" stopColor="#8F79D4" />
          <stop offset=".6" stopColor="#668AD7" />
        </linearGradient>
        <linearGradient
          id="AURY__g"
          x1="18.857"
          x2="18.857"
          y1="-10.421"
          y2="18.866"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".47" stopColor="#8F79D4" />
          <stop offset=".6" stopColor="#668AD7" />
          <stop offset="1" stopColor="#01E9C9" />
        </linearGradient>
        <linearGradient
          id="AURY__h"
          x1="11.999"
          x2="11.999"
          y1="5.143"
          y2="18.857"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".47" stopColor="#8F79D4" />
          <stop offset=".6" stopColor="#668AD7" />
          <stop offset="1" stopColor="#01E9C9" />
        </linearGradient>
      </defs>
    </BaseIcon>
  ),
)

IconAury.displayName = 'Aury'

export default IconAury
