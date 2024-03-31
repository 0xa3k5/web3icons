import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconTRIAS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <g clipPath="url(#TRIAS__a)">
            <mask
              id="TRIAS__b"
              width="24"
              height="24"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path fill="currentColor" d="M0 0h24v24H0z" />
            </mask>
            <g mask="url(#TRIAS__b)">
              <path
                fill="currentColor"
                d="M12.635 5.208a.32.32 0 0 0-.429.04l-6.997 8.09a.267.267 0 0 0 .058.402l7.503 5.063a.32.32 0 0 0 .378-.017l4.751-3.934a.27.27 0 0 0 .09-.284l-2.044-6.802zm-6.819 8.174 7.349.666.529-4.772-1.396-3.389zm7.297 1.13L6.359 13.9l6.347 4.283zm.5.045 3.505.317-3.897 3.227zm3.813-.124-3.761-.34.514-4.636 1.399-1.175zm-2.12-6.552L14.082 8.91l-1.195-2.9z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <clipPath id="TRIAS__a">
              <path fill="currentColor" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      ) : (
        <>
          <g clipPath="url(#TRIAS__a)">
            <mask
              id="TRIAS__b"
              width="24"
              height="24"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
            >
              <path fill="#fff" d="M0 0h24v24H0z" />
            </mask>
            <g mask="url(#TRIAS__b)">
              <path
                fill="url(#TRIAS__c)"
                d="M12.634 5.208a.32.32 0 0 0-.428.04l-6.997 8.09a.267.267 0 0 0 .058.402l7.502 5.063c.115.078.273.07.379-.017l4.75-3.934a.27.27 0 0 0 .09-.284l-2.043-6.802zm-6.818 8.174 7.348.666.53-4.772-1.397-3.389zm7.297 1.13L6.359 13.9l6.346 4.283zm.5.045 3.504.317-3.897 3.227zm3.813-.124-3.761-.34.514-4.636 1.398-1.175zm-2.12-6.552L14.081 8.91l-1.195-2.9z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </g>
          </g>
          <defs>
            <linearGradient
              id="TRIAS__c"
              x1="6.721"
              x2="14.979"
              y1="6.24"
              y2="15.314"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#79DCE5" />
              <stop offset=".807" stopColor="#12ABA9" />
            </linearGradient>
            <clipPath id="TRIAS__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTRIAS.displayName = 'TRIAS'
