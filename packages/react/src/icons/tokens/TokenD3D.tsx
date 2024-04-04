import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenD3D = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m5.156 9.652.398 4.19 2.16 3.704 1.342-1.659-1.727-5.395zm13.671 0-.394 4.19-2.16 3.704-1.358-1.672 1.744-5.382zm-3.972 6.291H9.202L7.869 17.61l4.204 1.247 4.072-1.247zm-7.539-5.619L5.143 9.54 8.04 6.37l3.9-1.655v2.358l-4.628 3.252zm9.369 0 2.172-.784-2.897-3.17-3.9-1.655v2.358l4.629 3.252z"
          />
          <path
            fill="currentColor"
            d="m16.569 10.56-4.56-3.274-4.56 3.274 1.74 5.297h5.64l1.744-5.297zm-8.04 2.576 3.48 2.554 3.48-2.554L14.16 9H9.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#46B5E0"
            d="m5.155 9.652.399 4.19 2.16 3.704 1.341-1.659-1.727-5.395z"
          />
          <path
            fill="#0196DA"
            d="m18.827 9.652-.394 4.19-2.16 3.704-1.359-1.672 1.744-5.382z"
          />
          <path
            fill="#87C9EB"
            d="M14.854 15.943H9.201L7.868 17.61l4.205 1.247 4.071-1.247z"
          />
          <path
            fill="#E3F4FC"
            d="M7.315 10.324 5.143 9.54 8.04 6.37l3.9-1.655v2.358l-4.63 3.251z"
          />
          <path
            fill="#82CEF0"
            d="m16.684 10.324 2.173-.784-2.897-3.17-3.9-1.655v2.358l4.628 3.252z"
          />
          <path
            fill="#B9E2FE"
            d="m16.568 10.56-4.56-3.274-4.56 3.274 1.74 5.297h5.64l1.745-5.297zm-8.04 2.576 3.48 2.554 3.48-2.554L14.16 9H9.857z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenD3D.displayName = 'D3D'
