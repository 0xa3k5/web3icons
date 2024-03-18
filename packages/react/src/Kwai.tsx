import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconKwai = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M1.714 8.571h3.591l.36.369.245-.369h4.354c.15.15.45.45.45.463l.171-.463h1.856l.454.463.227-.463h4.843l.497.506.206 3.407.703-3.913h2.019l.595.463-1.088 6.394H16.98l-.485-.488v-.369h-.3l-.33.857H11.4l-.472-.437v-.728l-.416 1.165H6.184l-.467-.437-.665-1.414-.342 1.851H2.554l-.45-.437L3 9.617zm5.143 3.527 1.071-1.842v3.728zm-4.61-3.312.985.724-.917 5.276h1.8l.415-2.653 1.303 2.653H8.04l-1.787-3.107 1.809-2.893h-2.04L4.74 11.173l.365-2.387zm7.632 0H8.143v6h1.894l1.106-3.42v3.42h2.346l1.357-2.43h-.909L15 8.786h-1.555l-1.102 3.548.112-3.548h-1.586l-1.114 3.548zm5.31 6h-1.676l3.253-3.472H15.48l1.535-2.528h.998l.364 6h-1.79v-.866h-1.098zm3.574 0h1.77l1.072-6H19.77z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#FE8302"
            d="M1.714 8.571h3.591l.36.369.245-.369h4.354c.15.15.45.45.45.463l.171-.463h1.856l.454.463.227-.463h4.843l.497.506.206 3.407.703-3.913h2.019l.595.463-1.088 6.394H16.98l-.485-.488v-.369h-.3l-.33.857H11.4l-.472-.437v-.728l-.416 1.165H6.184l-.467-.437-.665-1.414-.342 1.851H2.554l-.45-.437L3 9.617zm5.143 3.527 1.071-1.842v3.728zm-4.61-3.312.985.724-.917 5.276h1.8l.415-2.653 1.303 2.653H8.04l-1.787-3.107 1.809-2.893h-2.04L4.74 11.173l.365-2.387zm7.632 0H8.143v6h1.894l1.106-3.42v3.42h2.346l1.357-2.43h-.909L15 8.786h-1.555l-1.102 3.548.112-3.548h-1.586l-1.114 3.548zm5.31 6h-1.676l3.253-3.472H15.48l1.535-2.528h.998l.364 6h-1.79v-.866h-1.098zm3.574 0h1.77l1.072-6H19.77z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconKwai.displayName = 'Kwai'

export default IconKwai
