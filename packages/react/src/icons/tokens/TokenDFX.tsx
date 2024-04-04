import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenDFX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 5.147v6.883L9.304 9.287c-.87.746-1.135 2.156-1.174 2.743 0 2.336 2.332 3.964 3.87 3.797v3.03C6.592 18.6 5.173 14.2 5.143 12.03c0-4.817 4.153-6.994 6.857-6.883m0 13.706V11.97l2.696 2.743c.87-.746 1.136-2.156 1.174-2.743 0-2.336-2.331-3.964-3.87-3.797v-3.03c5.409.257 6.827 4.658 6.857 6.827 0 4.817-4.152 6.994-6.857 6.883"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DFX__a)"
            d="M12 5.147v6.883L9.304 9.287c-.87.746-1.136 2.156-1.174 2.743 0 2.336 2.331 3.964 3.87 3.797v3.03C6.59 18.6 5.173 14.2 5.143 12.03c0-4.817 4.152-6.994 6.857-6.883"
          />
          <path
            fill="url(#DFX__b)"
            d="M12 18.853V11.97l2.695 2.743c.87-.746 1.136-2.156 1.175-2.743 0-2.336-2.332-3.964-3.87-3.797v-3.03c5.408.257 6.827 4.658 6.857 6.827 0 4.817-4.153 6.994-6.857 6.883"
          />
          <defs>
            <linearGradient
              id="DFX__a"
              x1="12"
              x2="12"
              y1="5.143"
              y2="18.857"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".32" stopColor="#00E8F2" />
              <stop offset="1" stopColor="#3F28F7" />
            </linearGradient>
            <linearGradient
              id="DFX__b"
              x1="15.428"
              x2="15.428"
              y1="18.857"
              y2="5.143"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".46" stopColor="#EA00D1" />
              <stop offset="1" stopColor="#6401F2" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenDFX.displayName = 'DFX'
