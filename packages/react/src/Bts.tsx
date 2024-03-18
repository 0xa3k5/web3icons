import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconBts = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.083 13.556-3.369-3.45v4.037h3.176q.046-.317.192-.587m1.346-.927c-.34.043-.66.183-.92.403l-3.795-3.88V3.428l4.715 4.186zm1.365.402a1.77 1.77 0 0 0-.937-.404V9.641c1.085.076 2.235.513 3.039 1.238zm.619 1.112a1.8 1.8 0 0 0-.196-.593l2.147-2.19c.715.839 1.139 1.687 1.207 2.783zm-.249 1.188c.138-.22.228-.473.257-.744h3.15a5.1 5.1 0 0 1-1.207 2.989zm-1.307.83a1.77 1.77 0 0 0 .862-.343l2.177 2.23c-.804.726-1.954 1.161-3.039 1.238zm-1.273-.343c.247.185.538.303.845.342v3.126c-1.088-.075-2.225-.51-3.03-1.238zm-.701-1.23c.029.268.117.518.253.738l-2.198 2.241a5.1 5.1 0 0 1-1.224-2.972l.009-.008z"
          />
        </>
      ) : (
        <>
          <path
            fill="#35BAEB"
            d="m11.082 13.556-3.368-3.45v4.037h3.176q.046-.317.192-.587m1.346-.927c-.34.043-.659.183-.92.403l-3.794-3.88V3.428l4.714 4.186zm1.366.402a1.77 1.77 0 0 0-.937-.404V9.641c1.084.076 2.234.513 3.038 1.238zm.618 1.112a1.8 1.8 0 0 0-.195-.593l2.146-2.19c.716.839 1.14 1.687 1.208 2.783zm-.248 1.188a1.76 1.76 0 0 0 .256-.744h3.151a5.1 5.1 0 0 1-1.208 2.989zm-1.307.83a1.76 1.76 0 0 0 .861-.343l2.177 2.23c-.804.726-1.954 1.161-3.038 1.238zm-1.274-.343c.247.185.539.303.845.342v3.126c-1.088-.075-2.224-.51-3.03-1.238zm-.7-1.23c.028.268.117.518.252.738l-2.197 2.241a5.1 5.1 0 0 1-1.224-2.972l.008-.008z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconBts.displayName = 'Bts'

export default IconBts
