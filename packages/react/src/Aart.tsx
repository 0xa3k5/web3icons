import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconAart = forwardRef<SVGSVGElement, IconComponentProps>(
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
          <g clipPath="url(#AART__a)">
            <path fill="url(#AART__b)" d="M0 0h24v24H0z" />
            <path
              fill="#fff"
              d="M14.34 5.143H9.66L5.143 17.57h4.144l.57-1.585a2.572 2.572 0 0 1 1.372-3.866L12 9.943l.772 2.177a2.57 2.57 0 0 1 1.375 3.866l.566 1.585h4.144z"
            />
            <path
              fill="#fff"
              d="M12 16.286a1.714 1.714 0 1 0 0-3.429 1.714 1.714 0 0 0 0 3.429"
            />
          </g>
          <defs>
            <linearGradient
              id="AART__b"
              x1="5.357"
              x2="17.357"
              y1="1.714"
              y2="22.286"
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
            <clipPath id="AART__a">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconAart.displayName = 'Aart'

export default IconAart
