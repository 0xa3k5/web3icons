import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconWAXP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m20.272 10.286-.986.844 1.007.87 1.993-1.714zM14.142 9l3.815 3.407-1.457.879-2.571-3h-1.715l-4.5 5.571H9.43l3.643-4.286 1.14 1.286h-1.355l-.857.857h2.854l.789.857h1.714l1.715-1.285 1.5 1.285h1.714L15.857 9zm-5.57 1.286-.858 2.571-.857-2.571H5.143l-.857 2.571-.857-2.571H1.714L3.43 14.57h1.714L6 12l.857 2.571h1.715l1.714-4.285z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F78E1E"
            d="m20.271 10.286-.986.844 1.007.87 1.993-1.714zM14.142 9l3.815 3.407-1.457.879-2.572-3h-1.714l-4.5 5.571h1.714l3.643-4.286 1.14 1.286h-1.354l-.857.857h2.854l.788.857h1.715l1.714-1.285 1.5 1.285h1.714L15.857 9zm-5.571 1.286-.857 2.571-.857-2.571H5.142l-.857 2.571-.857-2.571H1.714l1.714 4.285h1.714L6 12l.857 2.571H8.57l1.714-4.285z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconWAXP.displayName = 'WAXP'
