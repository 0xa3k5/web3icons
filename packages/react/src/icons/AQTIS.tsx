import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconAQTIS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m12.107 4.286 7.179 12.857H4.714zM11.65 5.91l3.094 3.938-2.64-4.727zm2.228 3.501L11.43 6.296l-.24.415 2.683 2.7zM10.976 7.08l-.056.098 1.157 1.008zm2.443 2.816-2.705-2.358-.205.37 2.914 1.988zm-3.892-.292-4.101 7.132h1.971zM7.83 16.736h1.196l.733-6.472zm2.271-5.825.138 5.058-.772.54zm1.573 5.825h6.913l-.591-1.055zm6.112-1.436-.6-1.08-5.863 2.156zm-6.073.497 5.271-1.937-.407-.729zm4.667-3.021-.244-.437-3.75 2.622zm-5.734 2.91.531-.369-.651-4.157zm-.137-7.277 1.045 6.642 4.286-3z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AQTIS__a)"
            d="m12.107 4.286 7.178 12.857H4.714zm-.459 1.624 3.094 3.938-2.64-4.727zm2.229 3.501L11.43 6.296l-.24.415 2.682 2.7zM10.975 7.08l-.055.098 1.157 1.008zm2.443 2.816-2.704-2.358-.206.37 2.914 1.988zm-3.891-.292-4.102 7.132h1.972zM7.83 16.736h1.195l.733-6.472zm2.27-5.826.137 5.058-.771.54zm1.573 5.825h6.913l-.592-1.055zm6.111-1.436-.6-1.08-5.863 2.156zm-6.073.497 5.272-1.937-.407-.729zm4.668-3.021-.245-.437-3.75 2.622zm-5.735 2.91.532-.369-.652-4.157zm-.137-7.277 1.046 6.642 4.286-3z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="AQTIS__a"
              x1="12"
              x2="12"
              y1="4.286"
              y2="17.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#BDDC78" />
              <stop offset="1" stopColor="#5AD9E6" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAQTIS.displayName = 'AQTIS'
