import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBscpad = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M9 4.714h4.714A3.858 3.858 0 0 1 15.484 12a3.857 3.857 0 0 1-1.77 7.286H9a2.57 2.57 0 0 1-2.571-2.572V7.286A2.57 2.57 0 0 1 9 4.714M8.786 6a1.07 1.07 0 0 0-1.072 1.072.86.86 0 0 0 .858.857h1.285v-.857A1.07 1.07 0 0 0 8.786 6m3.386 1.929a1.286 1.286 0 1 1 0 1.285h-1.029v2.143h2.464a2.679 2.679 0 1 0 0-5.357h-2.511c-.069 0-.116.086-.086.146.056.141.133.386.133.711V7.93zM9.857 9.214H8.572c-.429 0-.858-.283-.858-.283v6.07s.429-.215.858-.215h1.285zM7.714 16.93a.86.86 0 0 1 .858-.857h1.285v.857a1.072 1.072 0 0 1-2.143 0m3.429.214V16.07h1.029a1.286 1.286 0 1 0 0-1.285h-1.029v-2.143h2.464a2.678 2.678 0 1 1 0 5.357h-2.524c-.069 0-.111-.077-.086-.137.065-.146.146-.399.146-.72"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M7.714 7.072v1.86s.429.282.858.282V7.93a.857.857 0 0 1-.858-.857m3.429 2.142H9.857v.643h1.286zm.643 2.143v1.286h-.643v-1.286zm-1.929 5.357h1.286v-.642H9.857zm-1.285-1.928v1.286a.86.86 0 0 0-.832.642h-.026V15s.429-.214.858-.214m2.142 4.5H8.893A2.43 2.43 0 0 0 10.937 18h.677a4.8 4.8 0 0 1-.9 1.286"
          />
        </>
      ) : (
        <>
          <path
            fill="#F1B90C"
            d="M9 4.714h4.714A3.858 3.858 0 0 1 15.484 12a3.857 3.857 0 0 1-1.77 7.286H9a2.57 2.57 0 0 1-2.571-2.572V7.286A2.57 2.57 0 0 1 9 4.714M8.786 6a1.07 1.07 0 0 0-1.072 1.072.86.86 0 0 0 .858.857h1.285v-.857A1.07 1.07 0 0 0 8.786 6m3.386 1.929a1.286 1.286 0 1 1 0 1.285h-1.029v2.143h2.464a2.679 2.679 0 1 0 0-5.357h-2.511c-.069 0-.116.086-.086.146.056.141.133.386.133.711V7.93zM9.857 9.214H8.572c-.429 0-.858-.283-.858-.283v6.07s.429-.215.858-.215h1.285zM7.714 16.93a.86.86 0 0 1 .858-.857h1.285v.857a1.072 1.072 0 0 1-2.143 0m3.429.214V16.07h1.029a1.286 1.286 0 1 0 0-1.285h-1.029v-2.143h2.464a2.678 2.678 0 1 1 0 5.357h-2.524c-.069 0-.111-.077-.086-.137.065-.146.146-.399.146-.72"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#A98203"
            d="M7.714 7.072v1.86s.429.282.858.282V7.93a.857.857 0 0 1-.858-.857m3.429 2.142H9.857v.643h1.286zm.643 2.143v1.286h-.643v-1.286zm-1.929 5.357h1.286v-.642H9.857zm-1.285-1.928v1.286a.86.86 0 0 0-.832.642h-.026V15s.429-.214.858-.214m2.142 4.5H8.893A2.43 2.43 0 0 0 10.937 18h.677a4.8 4.8 0 0 1-.9 1.286"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBscpad.displayName = 'Bscpad'

export default IconBscpad
