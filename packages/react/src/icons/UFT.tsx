import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconUFT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.77 9.428c0 .002.672-.012 2.99 0 .293.018.526.284.526.59a.58.58 0 0 1-.138.377l-.938 1.67-.023.042-2.323 4.143a1.72 1.72 0 0 1-1.466.893h-.072l-6.872-.036h-.766v-.014a1.74 1.74 0 0 0 1.32-.988h.005l3.367-6.03a1.14 1.14 0 0 1 1.02-.645h-.031 3.401"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M10.392 6.434h6.065a.57.57 0 0 1 .526.574.6.6 0 0 1-.101.33l-3.377 6.059h.015l-.556.996c-.911.84-.648 1.909.143 2.417l.05.03c.197.118 0 .118.557.303H6.43c-.283-.006-.54-.105-.804-.257-.853-.489-1.162-1.6-.69-2.481L8.71 7.369a1.75 1.75 0 0 1 1.682-.935"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.448 9.43h3.264l-2.7 4.988c-.988 1.806.158 2.722 1.31 2.722h-2.81v.003H6.857a1.72 1.72 0 0 0 1.292-.852l.033-.058 3.443-6.346a1.1 1.1 0 0 1 .835-.459z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#2BBDF7"
            d="M15.77 9.428c0 .002.671-.012 2.99 0 .293.018.525.284.525.59a.58.58 0 0 1-.137.377l-.939 1.67-.023.042-2.322 4.143a1.72 1.72 0 0 1-1.467.893h-.072l-6.871-.036h-.766v-.014a1.74 1.74 0 0 0 1.319-.988h.006l3.366-6.03a1.14 1.14 0 0 1 1.022-.646h-.032z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#2B6DEF"
            d="M10.391 6.434h6.066a.57.57 0 0 1 .525.574.6.6 0 0 1-.1.33l-3.378 6.059h.015l-.556.996c-.91.84-.647 1.909.144 2.417l.049.03c.198.118 0 .118.558.303H6.428c-.282-.006-.539-.105-.804-.257-.853-.489-1.161-1.6-.689-2.481L8.71 7.369a1.75 1.75 0 0 1 1.682-.935"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#003CB2"
            d="M12.448 9.43h3.264l-2.7 4.988c-.988 1.806.157 2.722 1.31 2.722h-2.81l-.001.003H6.857a1.72 1.72 0 0 0 1.292-.852l.033-.058 3.442-6.346a1.1 1.1 0 0 1 .836-.459z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconUFT.displayName = 'UFT'
