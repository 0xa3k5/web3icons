import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconGLINK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.429 6.857 12.004 3.43 8.572 6.857zM14.066 6.3l-2.062-2.07-2.07 2.066h4.132zm1.363 10.843-3.425 3.429-3.432-3.429zm-1.363.557-2.062 2.07-2.07-2.066h4.132zM6.857 8.572 3.43 11.996l3.428 3.433zM6.3 9.934l-2.07 2.062 2.066 2.07V9.934zm10.843-1.345 3.429 3.424-3.429 3.429V8.584zm.557 1.363 2.07 2.061-2.066 2.07V9.952z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M6.857 15.399v1.744h1.745zm8.542 1.744h1.744v-1.744zm1.744-8.541V6.857h-1.744zM8.602 6.857H6.857v1.745zm2.1 5.927.257.253a1.547 1.547 0 0 0 2.185 0l1.402-1.401A1.546 1.546 0 0 0 12.36 9.45l-.741.742c.231-.043.767-.065 1.075.145l.27-.27a.694.694 0 0 1 .982.982l-1.432 1.423a.64.64 0 0 1-.895 0c-.06-.065-.193-.258-.215-.399l-.702.707zm2.597-1.568-.257-.253a1.547 1.547 0 0 0-2.186 0l-1.402 1.401a1.546 1.546 0 0 0 2.186 2.186l.742-.741c-.232.043-.768.064-1.076-.146l-.27.27a.694.694 0 0 1-.982-.981l1.432-1.428a.634.634 0 0 1 .896 0c.06.065.192.258.214.399z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#GLINK__a)"
            d="M15.429 6.857 12.004 3.43 8.572 6.857zM14.066 6.3l-2.062-2.07-2.07 2.066h4.132z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#GLINK__b)"
            d="m15.429 17.143-3.425 3.429-3.432-3.429zm-1.363.557-2.062 2.07-2.07-2.066h4.132z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#GLINK__c)"
            d="M6.857 8.572 3.43 11.996l3.428 3.433zM6.3 9.934l-2.07 2.062 2.066 2.07V9.934z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#GLINK__d)"
            d="m17.143 8.589 3.429 3.424-3.429 3.429V8.584zm.557 1.363 2.07 2.061-2.066 2.07V9.952z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="url(#GLINK__e)"
            d="M6.857 15.399v1.744h1.745zm8.542 1.744h1.744v-1.744zm1.744-8.541V6.857h-1.744zM8.602 6.857H6.857v1.745z"
          />
          <path
            fill="url(#GLINK__f)"
            d="m10.702 12.784.257.253a1.547 1.547 0 0 0 2.185 0l1.402-1.401A1.546 1.546 0 0 0 12.36 9.45l-.741.742c.231-.043.767-.065 1.075.145l.27-.27a.694.694 0 0 1 .982.982l-1.432 1.423a.64.64 0 0 1-.895 0c-.06-.065-.193-.258-.215-.399l-.702.707zm2.597-1.568-.257-.253a1.547 1.547 0 0 0-2.186 0l-1.402 1.401a1.546 1.546 0 0 0 2.186 2.186l.742-.741c-.232.043-.768.064-1.076-.146l-.27.27a.694.694 0 0 1-.982-.981l1.432-1.428a.634.634 0 0 1 .896 0c.06.065.192.258.214.399z"
          />
          <defs>
            <linearGradient
              id="GLINK__a"
              x1="12"
              x2="12"
              y1="3.429"
              y2="20.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BD8E3C" />
              <stop offset="1" stopColor="#EBCF66" />
            </linearGradient>
            <linearGradient
              id="GLINK__b"
              x1="12"
              x2="12"
              y1="20.572"
              y2="3.429"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#EBC759" />
              <stop offset="1" stopColor="#C78B35" />
            </linearGradient>
            <linearGradient
              id="GLINK__c"
              x1="18.15"
              x2="18.15"
              y1="7.2"
              y2="19.522"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C98B36" />
              <stop offset="1" stopColor="#E5C651" />
            </linearGradient>
            <linearGradient
              id="GLINK__d"
              x1="3.429"
              x2="3.429"
              y1="4.468"
              y2="18.611"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C6883B" />
              <stop offset="1" stopColor="#E8CA63" />
            </linearGradient>
            <linearGradient
              id="GLINK__e"
              x1="2.8"
              x2="19.9"
              y1="4.7"
              y2="20.572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C18843" />
              <stop offset="1" stopColor="#E9D055" />
            </linearGradient>
            <linearGradient
              id="GLINK__f"
              x1="9.686"
              x2="14.37"
              y1="14.434"
              y2="9.973"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C68E3B" />
              <stop offset="1" stopColor="#E4C247" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconGLINK.displayName = 'GLINK'
