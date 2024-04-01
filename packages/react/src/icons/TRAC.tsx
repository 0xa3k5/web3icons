import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTRAC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 5.143v3.411a3.446 3.446 0 1 0 2.636 5.666l2.61 2.194A6.83 6.83 0 0 1 12 18.858a6.857 6.857 0 0 1 0-13.714m3.236 8.049 3.201 1.182a7 7 0 0 1-.514 1.08l-2.944-1.718q.152-.261.257-.544m3.514-2.383q.108.58.107 1.191h-3.411a3.5 3.5 0 0 0-.051-.6l3.36-.591zm-2.323-4.042q.462.386.845.849l-2.623 2.181a3.5 3.5 0 0 0-.42-.428z"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#TRAC__a)"
            d="M12 5.143v3.411a3.446 3.446 0 1 0 2.635 5.666l2.61 2.194A6.83 6.83 0 0 1 12 18.858a6.857 6.857 0 0 1 0-13.714m3.235 8.049 3.202 1.182a7 7 0 0 1-.514 1.08l-2.945-1.718q.153-.261.257-.544m3.515-2.383q.108.58.107 1.191h-3.412a3.5 3.5 0 0 0-.051-.6l3.36-.591zm-2.323-4.042q.46.386.844.849l-2.623 2.181a3.5 3.5 0 0 0-.42-.428z"
          />
          <defs>
            <linearGradient
              id="TRAC__a"
              x1="6.561"
              x2="17.52"
              y1="8.275"
              y2="15.238"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4CCB88" />
              <stop offset="1" stopColor="#30C7B4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconTRAC.displayName = 'TRAC'
