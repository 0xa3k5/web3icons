import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconGEEQ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.428 5.571h-.857v3h.857zm0 9.857h-.857v3h.857z"
          />
          <path
            fill="currentColor"
            d="M12 18.857a6.857 6.857 0 0 0 5.846-10.444l-.645.594a6 6 0 1 1-.486-.718l.632-.582A6.85 6.85 0 0 0 12 5.143a6.857 6.857 0 1 0 0 13.714"
          />
          <path
            fill="currentColor"
            d="m16.877 9.304-.652.601a4.714 4.714 0 1 1-.459-.742l.633-.583A5.56 5.56 0 0 0 12 6.43a5.571 5.571 0 1 0 4.877 2.875"
          />
          <path
            fill="currentColor"
            d="M12 8.143a3.85 3.85 0 0 1 3.131 1.604l-.637.586a3 3 0 1 0 .382 2.524h-2.447V12H15q-.002-.446-.123-.854l.684-.63a3.857 3.857 0 1 1-3.56-2.373"
          />
        </>
      ) : (
        <>
          <path
            fill="#254280"
            d="M12.428 5.571h-.857v3h.857zm0 9.857h-.857v3h.857z"
          />
          <path
            fill="#254280"
            d="M12 18.857a6.857 6.857 0 0 0 5.845-10.444l-.645.594a6 6 0 1 1-.486-.718l.633-.582A6.85 6.85 0 0 0 12 5.143a6.857 6.857 0 1 0 0 13.714"
          />
          <path
            fill="#254280"
            d="m16.877 9.304-.652.601a4.714 4.714 0 1 1-.459-.742l.633-.583A5.56 5.56 0 0 0 12 6.43a5.571 5.571 0 1 0 4.877 2.875"
          />
          <path
            fill="#254280"
            d="M12 8.143a3.85 3.85 0 0 1 3.13 1.604l-.636.586a3 3 0 1 0 .381 2.524h-2.447V12H15q-.001-.446-.124-.854l.685-.63A3.857 3.857 0 1 1 12 8.143"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconGEEQ.displayName = 'GEEQ'
