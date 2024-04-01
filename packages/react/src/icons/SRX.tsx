import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconSRX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M8.572 10.071V6.214L5.143 8.143z" />
          <path fill="currentColor" d="M8.572 13.929V10.07L5.143 12z" />
          <path
            fill="currentColor"
            d="M8.572 17.786v-3.858l-3.429 1.93zm10.285-1.929V12l-3.428 1.928zM15.43 13.93v-3.86L12 12zm0 3.857v-3.858L12 15.859zM12 19.714v-3.857l-3.428 1.929zM18.857 12V8.143L15.43 10.07zM12 8.143V4.286L8.572 6.214z"
          />
          <path fill="currentColor" d="M8.572 10.071V6.214L12 8.143z" />
          <path
            fill="currentColor"
            d="M8.572 13.929V10.07L12 12zM12 19.714v-3.857l3.429 1.929zM5.143 12V8.143l3.429 1.928zm0 3.857V12l3.429 1.928zM12 8.143V4.286l3.429 1.928zm3.429 1.928V6.214l3.428 1.929zm0 3.858V10.07L18.857 12z"
          />
          <path fill="currentColor" d="M15.429 17.786v-3.858l3.428 1.93z" />
        </>
      ) : (
        <>
          <path fill="#A62222" d="M8.571 10.071V6.214L5.143 8.143z" />
          <path fill="#EE8622" d="M8.571 13.929V10.07L5.143 12z" />
          <path fill="#A62222" d="M8.571 17.786v-3.858l-3.428 1.93z" />
          <path
            fill="#E23C25"
            d="M18.857 15.857V12l-3.429 1.928zm-3.429-1.928V10.07L12 12zm0 3.857v-3.858L12 15.859z"
          />
          <path fill="#EE8622" d="M12 19.714v-3.857l-3.43 1.929z" />
          <path fill="#FAC211" d="M18.857 12V8.143l-3.429 1.928z" />
          <path fill="#EE8622" d="M12 8.143V4.286L8.57 6.214z" />
          <path fill="#E23C25" d="M8.571 10.071V6.214L12 8.143z" />
          <path
            fill="#FAC211"
            d="M8.571 13.929V10.07L12 12zM12 19.714v-3.857l3.428 1.929z"
          />
          <path
            fill="#E23C25"
            d="M5.143 12V8.143L8.57 10.07zm0 3.857V12l3.428 1.928z"
          />
          <path fill="#FAC211" d="M12 8.143V4.286l3.428 1.928z" />
          <path
            fill="#EE8622"
            d="M15.428 10.071V6.214l3.429 1.929zm0 3.858V10.07L18.857 12z"
          />
          <path fill="#A62222" d="M15.428 17.786v-3.858l3.429 1.93z" />
        </>
      )}
    </BaseIcon>
  ),
)

IconSRX.displayName = 'SRX'
