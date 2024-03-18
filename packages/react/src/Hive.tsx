import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconHive = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.944 12.857c.017 0 .039.026.043.043.013.013.013.039.004.056L12.12 17.97a.1.1 0 0 1-.022.022.1.1 0 0 1-.03.008h-1.727c-.008 0-.017 0-.025-.008a.1.1 0 0 1-.022-.022.06.06 0 0 1 0-.06l2.871-5.014c.009-.017.035-.039.052-.039zm-1.731-1.714a.06.06 0 0 1-.047-.03L10.294 6.09a.06.06 0 0 1-.008-.047.06.06 0 0 1 .03-.039L10.34 6h1.727c.013 0 .022 0 .03.009l.022.021 2.871 5.023a.07.07 0 0 1 0 .06.06.06 0 0 1-.051.03z"
          />
          <path
            fill="currentColor"
            d="M13.564 6.09a.06.06 0 0 1 0-.06.06.06 0 0 1 .056-.03h1.783a.06.06 0 0 1 .051.03l3.394 5.94a.06.06 0 0 1 0 .06l-3.394 5.94a.06.06 0 0 1-.051.03H13.62a.06.06 0 0 1-.052-.03.06.06 0 0 1 0-.06L16.941 12zm-1.577 5.88A.04.04 0 0 1 12 12a.05.05 0 0 1-.013.034L8.623 17.97a.06.06 0 0 1-.052.03c-.017 0-.038-.013-.051-.03l-3.37-5.94a.06.06 0 0 1 0-.064l3.373-5.932c.009-.012.03-.034.047-.034.022 0 .043.017.056.034z"
          />
        </>
      ) : (
        <>
          <path
            fill="#DD1235"
            d="M14.944 12.857c.017 0 .039.026.043.043.013.013.013.039.004.056L12.12 17.97a.1.1 0 0 1-.022.022.1.1 0 0 1-.03.008h-1.727c-.008 0-.017 0-.025-.008a.1.1 0 0 1-.022-.022.06.06 0 0 1 0-.06l2.871-5.014c.009-.017.035-.039.052-.039zm-1.731-1.714a.06.06 0 0 1-.047-.03L10.294 6.09a.06.06 0 0 1-.008-.047.06.06 0 0 1 .03-.039L10.34 6h1.727c.013 0 .022 0 .03.009l.022.021 2.871 5.023a.07.07 0 0 1 0 .06.06.06 0 0 1-.051.03z"
          />
          <path
            fill="#DD1235"
            d="M13.564 6.09a.06.06 0 0 1 0-.06.06.06 0 0 1 .056-.03h1.783a.06.06 0 0 1 .051.03l3.394 5.94a.06.06 0 0 1 0 .06l-3.394 5.94a.06.06 0 0 1-.051.03H13.62a.06.06 0 0 1-.052-.03.06.06 0 0 1 0-.06L16.941 12zm-1.577 5.88A.04.04 0 0 1 12 12a.05.05 0 0 1-.013.034L8.623 17.97a.06.06 0 0 1-.052.03c-.017 0-.038-.013-.051-.03l-3.37-5.94a.06.06 0 0 1 0-.064l3.373-5.932c.009-.012.03-.034.047-.034.022 0 .043.017.056.034z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconHive.displayName = 'Hive'

export default IconHive
