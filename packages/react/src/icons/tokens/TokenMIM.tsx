import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMIM = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path fill="#5552FD" d="M9.857 5.143h4.285V6.43H9.857z" />
      <path fill="#9695F8" d="M9.857 16.715h4.285V18H9.857z" />
      <path
        fill="#5552FD"
        d="M8.571 6.429h1.286v1.285H8.57zM7.285 7.714h1.286V9H7.285zm2.572 2.572h1.285v1.286H9.857zm3 0h1.285v1.286h-1.285zM6 9h1.285v1.286H6z"
      />
      <path fill="#9695F8" d="M7.285 14.143h1.286v1.286H7.285z" />
      <path fill="#5552FD" d="M7.285 15.429h1.286v1.286H7.285z" />
      <path fill="#9695F8" d="M8.571 15.429h1.286v1.286H8.57z" />
      <path
        fill="#5552FD"
        d="M8.571 16.715h1.286V18H8.57zM6 14.143h1.285v1.286H6z"
      />
      <path fill="#9695F8" d="M16.714 14.143h-1.286v1.286h1.286z" />
      <path fill="#5552FD" d="M16.714 15.429h-1.286v1.286h1.286z" />
      <path fill="#9695F8" d="M15.428 15.429h-1.286v1.286h1.286z" />
      <path
        fill="#5552FD"
        d="M15.428 16.715h-1.286V18h1.286zM18 14.143h-1.286v1.286H18zM8.57 9h1.286v6.429H8.57zm5.571 0h1.286v6.429h-1.286zm2.572 0H18v1.286h-1.286zm-2.571-2.57h1.286v1.285h-1.286zm1.286 1.285h1.286V9h-1.286z"
      />
      <path fill="#9695F8" d="M9.857 6.429h4.285v1.285H9.857z" />
      <path fill="#5552FD" d="M9.857 18h4.285v1.286H9.857z" />
      <path fill="#9695F8" d="M8.571 7.714h1.286V9H8.57z" />
      <path fill="#FED955" d="M7.285 10.286h1.286v3.857H7.285z" />
      <path
        fill="#9695F8"
        d="M7.285 9h1.286v1.286H7.285zM6 10.286h1.285v3.857H6zm12 0h-1.286v3.857H18z"
      />
      <path
        fill="#5552FD"
        d="M4.714 10.286H6v3.857H4.714zm14.571 0H18v3.857h1.285z"
      />
      <path
        fill="#FED955"
        d="M15.428 10.286h1.286v3.857h-1.286zm-4.286 0h1.715v1.286h-1.715z"
      />
      <path
        fill="#9695F8"
        d="M15.428 9h1.286v1.286h-1.286zm-1.286-1.286h1.286V9h-1.286z"
      />
      <path
        fill="#FED955"
        d="M9.857 7.714h4.285V9H9.857zm0 1.286h4.285v1.286H9.857zm4.285 2.572v5.143H9.857v-5.143z"
      />
      <path fill="#5552FD" d="M11.142 11.572h1.715v1.285h-1.715z" />
    </BaseIcon>
  ),
)

TokenMIM.displayName = 'MIM'
