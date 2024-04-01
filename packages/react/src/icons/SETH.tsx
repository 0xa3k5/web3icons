import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconSETH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M16.546 16.546a6.429 6.429 0 1 1-9.092-9.093 6.429 6.429 0 0 1 9.092 9.093m.606.606A7.285 7.285 0 1 1 6.849 6.849a7.285 7.285 0 0 1 10.303 10.303m.42-5.152a5.571 5.571 0 1 1-11.143 0 5.571 5.571 0 0 1 11.143 0M12 7.714 9.43 12 12 13.5l2.572-1.5zm0 6.429-2.57-1.714L12 16.286l2.572-3.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#SETH__a)"
            d="M12 18.429A6.429 6.429 0 1 0 12 5.57a6.429 6.429 0 0 0 0 12.858m0 .857a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#627EEA"
            d="M12 17.572a5.571 5.571 0 1 0 0-11.143 5.571 5.571 0 0 0 0 11.143"
          />
          <path fill="#fff" d="M12 10.929V7.714L9.43 12z" />
          <path
            fill="#C1CCF7"
            d="M12 10.929V7.714L14.572 12zm0 0L9.43 12 12 13.5z"
          />
          <path fill="#8198EE" d="M12 13.5v-2.57L14.572 12z" />
          <path fill="#fff" d="m12 14.143-2.57-1.714L12 16.286z" />
          <path fill="#C1CCF7" d="M14.572 12.429 12 14.143v2.143z" />
          <defs>
            <linearGradient
              id="SETH__a"
              x1="16.071"
              x2="7.714"
              y1="6.429"
              y2="17.786"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#269981" />
              <stop offset="1" stopColor="#142D44" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconSETH.displayName = 'SETH'
