import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenCGT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.429 18.982v-4.056a2.83 2.83 0 0 1-2.687-3.504 2.79 2.79 0 0 1 2.581-2.15A2.83 2.83 0 0 1 15.32 12h4.123c0-1.368-.469-2.644-1.23-3.782a6.92 6.92 0 0 0-12.31 1.64H4.285v4.289h1.576a6.92 6.92 0 0 0 2.754 3.67 6.8 6.8 0 0 0 3.813 1.165"
          />
          <path
            fill="currentColor"
            d="M18 18.513a2.571 2.571 0 1 1 .878-3.617l-1.12.64a1.285 1.285 0 1 0-.085 1.607h-.53v-.857h2.143v2.571H18z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F7B600"
            d="M12.429 18.982v-4.056a2.83 2.83 0 0 1-2.687-3.504 2.79 2.79 0 0 1 2.582-2.15A2.83 2.83 0 0 1 15.319 12h4.123c0-1.368-.468-2.644-1.229-3.782a6.92 6.92 0 0 0-12.311 1.64H4.286v4.289h1.576a6.92 6.92 0 0 0 2.754 3.67 6.8 6.8 0 0 0 3.813 1.165"
          />
          <path
            fill="#F7B600"
            d="M18 18.513a2.571 2.571 0 1 1 .879-3.617l-1.12.64a1.286 1.286 0 1 0-.086 1.607h-.53v-.857h2.143v2.571H18z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenCGT.displayName = 'CGT'
