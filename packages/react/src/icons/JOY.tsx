import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconJOY = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M5.571 15.347v1.796h12.857v-1.796c0-.428-.334-.775-.745-.775H6.317c-.411 0-.746.347-.746.775M11 10h2v4h-2z"
          />
          <path
            fill="currentColor"
            d="M9 13.62v.952h6v-.952a.343.343 0 0 0-.347-.334h-5.31a.343.343 0 0 0-.347.334zm3-2.906a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
          />
          <path
            fill="currentColor"
            d="M13.637 5.679a2.15 2.15 0 0 0-1.14-.39c-.197.013-.587.111-.587.39 0 .351.343.694.557.882.21.19.716.528 1.273.528s.617-.335.617-.429-.06-.557-.72-.981"
          />
        </>
      ) : (
        <>
          <path
            fill="#FFFFFD"
            d="M5.571 15.347v1.796h12.857v-1.796c0-.428-.334-.775-.745-.775H6.317c-.411 0-.746.347-.746.775M11 10h2v4h-2z"
          />
          <path
            fill="#EBC5FE"
            d="M9 13.62v.952h6v-.952a.343.343 0 0 0-.347-.334h-5.31a.343.343 0 0 0-.347.334z"
          />
          <path fill="#E85754" d="M12 10.714a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
          <path
            fill="#FAEADD"
            d="M13.637 5.679a2.15 2.15 0 0 0-1.14-.39c-.197.013-.587.111-.587.39 0 .351.343.694.557.882.21.19.716.528 1.273.528s.617-.335.617-.429-.06-.557-.72-.981"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconJOY.displayName = 'JOY'
