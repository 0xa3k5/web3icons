import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenANKRETH = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="#FFE81C"
        d="M5.143 8.859v5.905c0 .472.231.909.608 1.145l5.837 3.634c.386.236.853.227 1.23-.021l5.456-3.61a1.35 1.35 0 0 0 .583-1.126v-5.55c0-.463-.223-.892-.583-1.127l-5.485-3.63a1.12 1.12 0 0 0-1.183-.048L5.799 7.685a1.34 1.34 0 0 0-.656 1.175"
      />
      <path fill="#8C800F" d="M12 13.714 9.857 12.43 12 15.857z" />
      <path fill="#332E06" d="m12 13.714 2.143-1.285L12 15.857z" />
      <path fill="#8C800F" d="M12 10.714v-3L9.857 12z" />
      <path fill="#332E06" d="M12 10.714v-3L14.143 12z" />
      <path fill="#141302" d="M12 13.286v-2.572L14.143 12z" />
      <path fill="#383306" d="M12 13.286v-2.572L9.857 12z" />
    </BaseIcon>
  ),
)

TokenANKRETH.displayName = 'ANKRETH'
