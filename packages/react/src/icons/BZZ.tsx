import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconBZZ = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m14.143 5.674 1.714-.96 1.715.969v1.929l-1.715.96-.004-.01-1.71-.96zM8.357 18l-3.214-1.714v-3.429l3.214-1.714 3.215 1.714v3.429zm10.5-5.143-3.214-1.714-3.214 1.714v3.429L15.643 18l3.214-1.714zM9 6.96l2.996-1.607 1.29.647v1.89L15 9v1.17l-3 1.607-3-1.607V6.956z"
          />
        </>
      ) : (
        <>
          <path
            fill="#D66700"
            d="m14.143 5.674 1.714-.96 1.714.969v1.929l-1.714.96-.004-.01-1.71-.96zM8.357 18l-3.214-1.714v-3.429l3.214-1.714 3.214 1.714v3.429zm10.5-5.143-3.214-1.714-3.215 1.714v3.429L15.643 18l3.214-1.714zM9 6.96l2.995-1.607 1.29.647v1.89L15 9v1.17l-3 1.607-3-1.607V6.956z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBZZ.displayName = 'BZZ'
