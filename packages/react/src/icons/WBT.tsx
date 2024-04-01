import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconWBT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.154 17.142A7.277 7.277 0 1 1 6.863 6.85a7.277 7.277 0 0 1 10.291 10.292M12.348 9.83c.144.06.27.159.364.284h-.004l1.114 1.457 2.271-5.597c.519.352.99.77 1.402 1.243l-2.623 6.463a.882.882 0 0 1-1.521.197l-1.11-1.457-1.462 3.595a.88.88 0 0 1-.776.553H9.96a.88.88 0 0 1-.78-.471l-2.048-3.87a.884.884 0 0 1 1.564-.823l1.162 2.19 1.328-3.278a.88.88 0 0 1 1.162-.486"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#WBT__a)"
            d="M17.154 17.142A7.277 7.277 0 1 1 6.863 6.85a7.277 7.277 0 0 1 10.291 10.292M12.348 9.83c.144.06.27.159.364.284h-.004l1.114 1.457 2.271-5.597c.519.352.99.77 1.402 1.243l-2.623 6.463a.882.882 0 0 1-1.521.197l-1.11-1.457-1.462 3.595a.88.88 0 0 1-.776.553H9.96a.88.88 0 0 1-.78-.471l-2.048-3.87a.884.884 0 0 1 1.564-.823l1.162 2.19 1.328-3.278a.88.88 0 0 1 1.162-.486"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="WBT__a"
              x1="4.727"
              x2="19.286"
              y1="11.996"
              y2="11.996"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E9C570" />
              <stop offset="1" stopColor="#F7B839" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconWBT.displayName = 'WBT'
