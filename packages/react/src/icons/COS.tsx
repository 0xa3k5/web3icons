import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconCOS = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.022 5.143c2.73 0 4.62 1.667 5.271 2.563-.527.733-1.963.99-3.09.39a4.7 4.7 0 0 0-2.181-.575c-2.383 0-3.746 1.813-4.132 2.765H5.404C6.36 7.2 8.872 5.143 12.022 5.143m.017 13.714c2.73 0 4.62-1.667 5.271-2.563-.527-.737-1.967-.99-3.094-.39a4.7 4.7 0 0 1-2.177.575c-2.383 0-3.746-1.813-4.132-2.765H5.422c.951 3.086 3.467 5.143 6.617 5.143"
          />
          <path
            fill="currentColor"
            d="M7.963 16.389A3.8 3.8 0 0 1 5.4 13.714h2.5A4.58 4.58 0 0 0 12 16.48c-.643.171-2.331.42-4.037-.09m-.017-8.779a3.8 3.8 0 0 0-2.559 2.675h2.499C8.914 8.027 11.057 7.49 12 7.52c-.643-.171-2.344-.42-4.054.09m-1.089 5.676a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
          <path
            fill="currentColor"
            d="M6.429 13.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#COS__a)"
            d="M12.021 5.143c2.73 0 4.62 1.667 5.272 2.563-.528.733-1.963.99-3.09.39a4.7 4.7 0 0 0-2.182-.575c-2.383 0-3.746 1.813-4.131 2.765H5.404C6.36 7.2 8.871 5.143 12.021 5.143"
          />
          <path
            fill="url(#COS__b)"
            d="M12.038 18.857c2.73 0 4.62-1.667 5.272-2.563-.527-.737-1.967-.99-3.095-.39a4.7 4.7 0 0 1-2.177.575c-2.383 0-3.745-1.813-4.131-2.765H5.42c.952 3.086 3.467 5.143 6.617 5.143"
          />
          <path
            fill="url(#COS__c)"
            d="M7.963 16.389A3.8 3.8 0 0 1 5.4 13.714h2.498A4.58 4.58 0 0 0 12 16.48c-.643.171-2.332.42-4.037-.09"
          />
          <path
            fill="url(#COS__d)"
            d="M7.945 7.611a3.8 3.8 0 0 0-2.558 2.675h2.498C8.914 8.027 11.057 7.49 12 7.52c-.643-.171-2.345-.42-4.055.09"
          />
          <path
            fill="url(#COS__e)"
            d="M6.857 13.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
          <path
            fill="url(#COS__f)"
            d="M6.428 13.286a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572"
          />
          <defs>
            <linearGradient
              id="COS__a"
              x1="12.599"
              x2="11.662"
              y1="5.143"
              y2="11.796"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0DC4FA" />
              <stop offset="1" stopColor="#2797FD" />
            </linearGradient>
            <linearGradient
              id="COS__b"
              x1="11.84"
              x2="11.84"
              y1="18.857"
              y2="12.091"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0DC4FA" />
              <stop offset="1" stopColor="#2797FD" />
            </linearGradient>
            <linearGradient
              id="COS__c"
              x1="15.153"
              x2="4.736"
              y1="18.899"
              y2="15.82"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6619D1" />
              <stop offset="1" stopColor="#2A71F6" />
            </linearGradient>
            <linearGradient
              id="COS__d"
              x1="15.993"
              x2="4.968"
              y1="5.101"
              y2="7.989"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6619D1" />
              <stop offset="1" stopColor="#2A71F6" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="COS__e"
              x1="15.302"
              x2="9.352"
              y1="7.497"
              y2="18.294"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#F7D037" />
              <stop offset="1" stopColor="#F36F43" />
            </linearGradient>
            <linearGradient
              id="COS__f"
              x1="7.367"
              x2="5.541"
              y1="11.121"
              y2="12.801"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5F24D6" />
              <stop offset="1" stopColor="#3069F4" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconCOS.displayName = 'COS'
