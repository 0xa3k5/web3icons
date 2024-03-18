import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconGrin = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.857 12a6.857 6.857 0 1 1-13.715 0 6.857 6.857 0 0 1 13.715 0m-3.803-2.992c.038.108.073.209.109.292l.06-.218c.188-.682.44-1.6 1.123-1.796.248 1.075-.082 2.305-.472 3.304l-.03.076c-.174.446-.357.913-.835 1.055l-.63-1.937h-.082c-.055.647-.343 1.564-.943 1.856-.561-1.093-1.157-2.452-.865-3.707.632.184.813 1.015.941 1.606l.002.005h.081c.073-.343.403-1.71.93-1.5.319.126.48.59.611.964m-7.445 2.87-.002.002.005.004zm1.104-2.094c-.107.72-.428 1.764-1.104 2.095-.445-1.097.159-3.969 1.263-4.508L9.497 9.3h.082l.005-.026c.089-.405.37-1.697.856-1.697.269 0 .44.477.536.742l.034.094c.334.883.592 1.881.377 2.824-.549-.274-.743-.977-.905-1.564l-.038-.133h-.081c-.039.39-.317 1.616-.857 1.543-.42-.056-.634-.952-.716-1.299zm5.743 7.269c-3.416 1.551-7.204-.532-8.027-4.205a1.1 1.1 0 0 1 .964.163c.208.164.34.44.464.697q.046.1.093.19a5.1 5.1 0 0 0 1.312 1.573c2.352 1.959 5.691.875 6.93-1.572l-.686-.056a.3.3 0 0 1-.223-.12.34.34 0 0 1-.069-.253.19.19 0 0 1 .108-.142c.407-.184 2.031-.882 2.198-.454.158.406-.09.957-.241 1.291l-.025.055a5.63 5.63 0 0 1-2.798 2.833"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#F8F24F"
            d="M18.857 12a6.857 6.857 0 1 1-13.715 0 6.857 6.857 0 0 1 13.715 0m-3.803-2.992c.038.108.073.209.109.292l.06-.218c.188-.682.44-1.6 1.123-1.796.248 1.075-.082 2.305-.472 3.304l-.03.076c-.174.446-.357.913-.835 1.055l-.63-1.937h-.082c-.055.647-.343 1.564-.943 1.856-.561-1.093-1.157-2.452-.865-3.707.632.184.813 1.015.941 1.606l.002.005h.081c.073-.343.403-1.71.93-1.5.319.126.48.59.611.964m-7.445 2.87-.002.002.005.004zm1.104-2.094c-.107.72-.428 1.764-1.104 2.095-.445-1.097.159-3.969 1.263-4.508L9.497 9.3h.082l.005-.026c.089-.405.37-1.697.856-1.697.269 0 .44.477.536.742l.034.094c.334.883.592 1.881.377 2.824-.549-.274-.743-.977-.905-1.564l-.038-.133h-.081c-.039.39-.317 1.616-.857 1.543-.42-.056-.634-.952-.716-1.299zm5.743 7.269c-3.416 1.551-7.204-.532-8.027-4.205a1.1 1.1 0 0 1 .964.163c.208.164.34.44.464.697q.046.1.093.19a5.1 5.1 0 0 0 1.312 1.573c2.352 1.959 5.691.875 6.93-1.572l-.686-.056a.3.3 0 0 1-.223-.12.34.34 0 0 1-.069-.253.19.19 0 0 1 .108-.142c.407-.184 2.031-.882 2.198-.454.158.406-.09.957-.241 1.291l-.025.055a5.63 5.63 0 0 1-2.798 2.833"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGrin.displayName = 'Grin'

export default IconGrin