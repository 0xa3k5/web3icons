import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAdco = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.143 18.532v-1.333c-.514.274-2.327.801-4.736.801-3.017 0-6.193-1.496-6.193-5.82C6.214 7.852 9.043 6 12.056 6s5.73 1.804 5.73 5.4c0 1.963-.892 3.172-1.826 3.172-.531 0-.531-.245-.531-.746v-3.283c-.03-.857-.759-2.4-3.275-2.4-1.05 0-2.241.163-2.725.334v1.474c.407-.18 1.422-.522 2.374-.522 1.196 0 1.684.643 1.684 1.242v.502c-.274-.103-.831-.244-1.611-.244-1.174 0-2.876.407-2.876 2.588 0 1.354.742 2.34 2.374 2.34a3.6 3.6 0 0 0 2.422-.998 1.81 1.81 0 0 0 1.693.998c1.967 0 3.797-1.307 3.797-4.731 0-3.42-2.825-6.412-7.132-6.412s-7.44 2.919-7.44 7.316 2.915 7.256 7.693 7.256c1.606-.03 3.2-.285 4.736-.755m-3.656-4.826V12.6a5 5 0 0 0-1.315-.171c-1.243 0-1.453.505-1.453.977 0 .471.33 1.165 1.157 1.165.587 0 1.256-.535 1.616-.865z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2B2A29"
            d="M17.142 18.532v-1.333c-.514.274-2.327.801-4.735.801-3.017 0-6.193-1.496-6.193-5.82C6.214 7.852 9.042 6 12.055 6s5.73 1.804 5.73 5.4c0 1.963-.891 3.172-1.825 3.172-.532 0-.532-.245-.532-.746v-3.283c-.03-.857-.758-2.4-3.274-2.4-1.05 0-2.242.163-2.726.334v1.474c.407-.18 1.423-.522 2.374-.522 1.196 0 1.685.643 1.685 1.242v.502c-.275-.103-.832-.244-1.612-.244-1.174 0-2.875.407-2.875 2.588 0 1.354.741 2.34 2.374 2.34a3.6 3.6 0 0 0 2.421-.998 1.81 1.81 0 0 0 1.693.998c1.967 0 3.797-1.307 3.797-4.731 0-3.42-2.824-6.412-7.131-6.412s-7.44 2.919-7.44 7.316 2.914 7.256 7.693 7.256c1.606-.03 3.2-.285 4.735-.755m-3.655-4.826V12.6a5 5 0 0 0-1.316-.171c-1.243 0-1.453.505-1.453.977 0 .471.33 1.165 1.157 1.165.587 0 1.256-.535 1.616-.865z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconAdco.displayName = 'Adco'

export default IconAdco
