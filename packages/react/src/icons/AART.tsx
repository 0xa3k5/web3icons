import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconAART = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.34 5.143H9.66L5.143 17.57h4.144l.57-1.585a2.572 2.572 0 0 1 1.372-3.866L12 9.943l.772 2.177a2.57 2.57 0 0 1 1.375 3.866l.566 1.585h4.144z"
          />
          <path
            fill="currentColor"
            d="M12 16.286a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#AART__a)"
            d="M14.34 5.143H9.66L5.143 17.57h4.144l.57-1.585a2.572 2.572 0 0 1 1.371-3.866L12 9.943l.771 2.177a2.57 2.57 0 0 1 1.376 3.866l.566 1.585h4.144z"
          />
          <path
            fill="url(#AART__b)"
            d="M12 16.286a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429"
          />
          <defs>
            <linearGradient
              id="AART__a"
              x1="8.204"
              x2="14.103"
              y1="6.031"
              y2="17.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#51A7DC" />
              <stop offset=".19" stopColor="#3B578E" />
              <stop offset=".45" stopColor="#67BBCE" />
              <stop offset=".69" stopColor="#382F4A" />
              <stop offset=".79" stopColor="#A22B2C" />
              <stop offset=".9" stopColor="#E08C94" />
              <stop offset="1" stopColor="#CE7782" />
            </linearGradient>
            <linearGradient
              id="AART__b"
              x1="8.204"
              x2="14.103"
              y1="6.031"
              y2="17.19"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#51A7DC" />
              <stop offset=".19" stopColor="#3B578E" />
              <stop offset=".45" stopColor="#67BBCE" />
              <stop offset=".69" stopColor="#382F4A" />
              <stop offset=".79" stopColor="#A22B2C" />
              <stop offset=".9" stopColor="#E08C94" />
              <stop offset="1" stopColor="#CE7782" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAART.displayName = 'AART'
