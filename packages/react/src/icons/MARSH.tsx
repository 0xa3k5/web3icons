import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconMARSH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m9.857 10.243-1.286-.755v4.226c0 1.659 1.535 3 3.429 3s3.429-1.341 3.429-3v-6h-4.693l2.215 1.243h1.192v4.757c0 .943-.96 1.714-2.143 1.714s-2.143-.771-2.143-1.714zM7.286 8.734v5.623C7.286 16.371 9.394 18 12 18s4.714-1.629 4.714-3.643v-7.5H9.206L6.909 5.571H18v8.572c0 2.841-2.687 5.143-6 5.143s-6-2.302-6-5.143V7.98z"
          />
        </>
      ) : (
        <>
          <path
            fill="#34D399"
            d="m9.857 10.243-1.286-.755v4.226c0 1.659 1.535 3 3.429 3s3.429-1.341 3.429-3v-6h-4.693l2.215 1.243h1.192v4.757c0 .943-.96 1.714-2.143 1.714s-2.143-.771-2.143-1.714zM7.286 8.734v5.623C7.286 16.371 9.394 18 12 18s4.714-1.629 4.714-3.643v-7.5H9.206L6.909 5.571H18v8.572c0 2.841-2.687 5.143-6 5.143s-6-2.302-6-5.143V7.98z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconMARSH.displayName = 'MARSH'
