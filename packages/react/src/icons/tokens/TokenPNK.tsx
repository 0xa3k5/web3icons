import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenPNK = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.227 11.674 5.002-2.151-.729 5.408zm.424-4.924 3.995 1.693-4.83 1.868zm-1.358 5.944 4.341 3.051L8.4 16.83zm6.913-3.249 2.957 2.958-3.737 2.725zM9.99 17.357l3.66-.943h.004l.643 1.213zm4.393-1.264 3.201-2.349h.005l-2.572 3.574zm1.063-7.676.626-1.26 1.692 3.579zm-.153-1.86-4.069-.163 3.36 1.444zM5.721 10.68l2.85-3.545-.942 3.943zm-.124.694 1.916.399h-.004l.085 4.238z"
          />
        </>
      ) : (
        <>
          <path
            fill="#3B3B3D"
            d="m9.171 6 6.896.3 2.79 6.12L14.918 18l-6.934-.437-2.841-6.622z"
          />
          <path
            fill="url(#PNK__a)"
            d="m9.171 6 6.896.3 2.79 6.12L14.918 18l-6.934-.437-2.841-6.622zm5.057 3.523-5.001 2.151 4.273 3.257zm-.583-1.08L9.651 6.75l-.836 3.561zm-1.011 7.303-4.341-3.052.107 4.136zm5.529-3.343-2.958-2.957-.78 5.683zm-4.513 4.011-3.66.943 4.307.27-.643-1.213zm3.934-2.67-3.201 2.349.634 1.226 2.571-3.575zm-1.513-6.587-.626 1.26 2.319 2.319zm-.776-.6-4.071-.163 3.36 1.445.711-1.286zm-6.724.579-2.85 3.544 1.907.399zm-1.058 4.637-1.916-.399 1.997 4.637-.086-4.238z"
          />
          <defs>
            <linearGradient
              id="PNK__a"
              x1="17.785"
              x2="4.058"
              y1="3.214"
              y2="14.537"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".08" stopColor="#3E3E40" />
              <stop offset=".29" stopColor="#5B5B5D" />
              <stop offset=".74" stopColor="#9D9D9F" />
              <stop offset=".89" stopColor="#606061" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenPNK.displayName = 'PNK'
