import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconMF = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.673 5.143H8.327c-1.77 0-3.184 1.47-3.184 3.313v7.089c0 1.838 1.444 3.312 3.184 3.312h7.346c1.77 0 3.184-1.504 3.184-3.312v-7.09c0-1.838-1.444-3.312-3.184-3.312M9.54 10.085a1.205 1.205 0 0 1-.956-1.372 1.16 1.16 0 0 1 1.333-.986l5.829 1.046a1.204 1.204 0 0 1 .956 1.372 1.16 1.16 0 0 1-1.333.985zm-.467 3.342a1.144 1.144 0 0 1-.909-1.337 1.127 1.127 0 0 1 1.312-.926l3.732.694c.63.116 1.029.73.913 1.338a1.13 1.13 0 0 1-1.311.925zM7.916 16c.173.254.44.429.741.487l1.179.21c.617.116 1.178-.325 1.29-.973a1.166 1.166 0 0 0-.926-1.354l-1.179-.21c-.617-.116-1.178.326-1.29.973-.055.302.011.614.185.867"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#F0F3FA"
            d="M8.327 5.143h7.346c1.74 0 3.184 1.474 3.184 3.313v7.089c0 1.808-1.414 3.312-3.184 3.312H8.327c-1.74 0-3.184-1.474-3.184-3.312v-7.09c0-1.842 1.414-3.312 3.184-3.312"
          />
          <path
            fill="url(#MF__a)"
            d="M9.54 10.085a1.204 1.204 0 0 1-.956-1.372 1.16 1.16 0 0 1 1.333-.986l5.828 1.046a1.204 1.204 0 0 1 .956 1.372 1.16 1.16 0 0 1-1.333.985z"
          />
          <path
            fill="url(#MF__b)"
            d="M9.073 13.427a1.145 1.145 0 0 1-.909-1.337 1.127 1.127 0 0 1 1.311-.925l3.733.694c.63.116 1.029.728.913 1.337a1.13 1.13 0 0 1-1.311.926z"
          />
          <path
            fill="url(#MF__c)"
            d="M8.657 16.487a1.166 1.166 0 0 1-.926-1.354c.112-.647.673-1.088 1.29-.973l1.179.21a1.166 1.166 0 0 1 .925 1.355c-.111.647-.672 1.088-1.29.972z"
          />
          <defs>
            <linearGradient
              id="MF__a"
              x1="4.786"
              x2="20.035"
              y1="8.575"
              y2="9.828"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5B5D" />
              <stop offset="1" stopColor="#FE38A3" />
            </linearGradient>
            <linearGradient
              id="MF__b"
              x1="5.139"
              x2="20.754"
              y1="9.054"
              y2="10.562"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2FF3F9" />
              <stop offset="1" stopColor="#0ABCFE" />
            </linearGradient>
            <linearGradient
              id="MF__c"
              x1="7.715"
              x2="11.572"
              y1="15"
              y2="15.643"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BA74FF" />
              <stop offset="1" stopColor="#6D6BFA" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconMF.displayName = 'MF'
