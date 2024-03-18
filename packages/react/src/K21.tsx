import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

const IconK21 = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M4.854 10.744h7.87v-.188h-7.83zm.206-.788h9.349V9.59H5.187q-.069.18-.128.365m.332-.848h9.022V8.74H5.575a7 7 0 0 0-.184.368m.619-1.081h10.811v-.364H6.281q-.143.178-.27.364m.688-.848H9.95V6.81H7.072a7 7 0 0 0-.373.369m.503-.485h5.762v-.24H7.491a7 7 0 0 0-.29.24m-.369-.24-.138.128v-.128zm1.791-.732v.012h2.413V5.25h-1.29a7.3 7.3 0 0 0-1.123.472m5.627-.472h-2.73v.484h3.857v-.01a7.3 7.3 0 0 0-1.127-.474m4.509 9.643H5.236l.08.193h4.755v.291h6.27v-.291h2.337q.042-.096.08-.193M8 18.27h3.52v-.484H7.345q.315.26.655.484m-1.452-1.256h3.523v.292h4.342v-.485h-8.03q.08.099.165.193m-.723-.964h5.18v-.193h-5.27v.044q.044.075.09.149m-1.002-2.601h8.621v-.485H4.77v.133q.023.177.053.352m1.64-6.639-.009.01v-.01zm7.354.056v.313h-3.266v-.313zM4.77 11.52h7.714v.189H4.77zm9.159.48v.484H4.765V12zM5.01 13.929h5.061v.192H5.01zm5.546 0h2.893v.484h-2.893zm5.301 1.928v.484h-4.341v-.484z"
          />
        </>
      ) : (
        <>
          <path
            fill="#2B2A29"
            d="M4.854 10.744h7.87v-.188h-7.83zm.206-.788h9.349V9.59H5.187q-.069.18-.128.365m.332-.848h9.022V8.74H5.575a7 7 0 0 0-.184.368m.619-1.081h10.811v-.364H6.281q-.143.178-.27.364m.688-.848H9.95V6.81H7.072a7 7 0 0 0-.373.369m.503-.485h5.762v-.24H7.491a7 7 0 0 0-.29.24m-.369-.24-.138.128v-.128zm1.791-.732v.012h2.413V5.25h-1.29a7.3 7.3 0 0 0-1.123.472m5.627-.472h-2.73v.484h3.857v-.01a7.3 7.3 0 0 0-1.127-.474m4.509 9.643H5.236l.08.193h4.755v.291h6.27v-.291h2.337q.042-.096.08-.193M8 18.27h3.52v-.484H7.345q.315.26.655.484m-1.452-1.256h3.523v.292h4.342v-.485h-8.03q.08.099.165.193m-.723-.964h5.18v-.193h-5.27v.044q.044.075.09.149m-1.002-2.601h8.621v-.485H4.77v.133q.023.177.053.352m1.64-6.639-.009.01v-.01zm7.354.056v.313h-3.266v-.313zM4.77 11.52h7.714v.189H4.77zm9.159.48v.484H4.765V12zM5.01 13.929h5.061v.192H5.01zm5.546 0h2.893v.484h-2.893zm5.301 1.928v.484h-4.341v-.484z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconK21.displayName = 'K21'

export default IconK21
