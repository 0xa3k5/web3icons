import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconDimo = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M7.783 8.143c-.733 0-1.354.66-1.354 1.414v7.157H5.143V9.557c0-1.491 1.183-2.7 2.64-2.7s2.503 1.209 2.503 2.7v5.122c0 .385.321.75.823.75.257 0 .497-.202.613-.442l3.313-6.981a2.02 2.02 0 0 1 1.808-1.149c1.114 0 2.014.922 2.014 2.057v7.8h-1.285v-7.8c0-.398-.343-.771-.729-.771-.27 0-.514.206-.634.454l-3.313 6.986a1.99 1.99 0 0 1-1.787 1.131C10.007 16.714 9 15.806 9 14.68V9.557c0-.754-.48-1.414-1.217-1.414"
      />
    </BaseIcon>
  ),
)

IconDimo.displayName = 'Dimo'

export default IconDimo
