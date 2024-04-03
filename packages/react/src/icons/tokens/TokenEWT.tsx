import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenEWT = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M18.276 7.891a8 8 0 0 0-.55-1.09c-.183-.295-.394-.576-.626-.769a.08.08 0 0 0-.086-.012l-.836.362a.086.086 0 0 0-.03.135c.165.194.554.656.684.867.163.262.325.585.47.934 1.042 2.505.602 8.316-2.973 8.165-.825-.035-1.514-.45-2.066-1.101-.557-.658-.955-1.542-1.169-2.44-.215-.904-.23-1.766-.076-2.37.078-.301.187-.504.3-.624a.48.48 0 0 1 .373-.163c.364 0 .59.137.748.348.177.233.3.599.338 1.079.076.944-.245 2.313-.7 3.15a.09.09 0 0 0 .005.093l.56.76a.084.084 0 0 0 .143-.01c.552-1.036 1.14-2.932 1.047-4.083-.048-.599-.21-1.196-.556-1.655-.364-.482-.902-.768-1.585-.768-.454 0-.84.183-1.132.492-.281.297-.459.69-.565 1.106-.211.828-.171 1.881.071 2.902.245 1.027.707 2.078 1.398 2.895.697.824 1.642 1.425 2.822 1.475 4.458.188 5.32-6.483 3.991-9.678M6.215 15.879c-.957-1.37-1.367-2.962-1.495-4.244a.085.085 0 0 1 .053-.087l.885-.361a.1.1 0 0 1 .077.006.1.1 0 0 1 .041.065c.127 1.214.511 2.876 1.302 4.008.401.575.884.98 1.46 1.152.56.167 1.348.056 2.287-.37a.09.09 0 0 1 .103.024l.64.806a.085.085 0 0 1-.03.13c-1.038.564-2.448.684-3.299.43-.87-.26-1.531-.854-2.024-1.56"
          />
        </>
      ) : (
        <>
          <path
            fill="#A25CF8"
            d="M18.276 7.891a8 8 0 0 0-.55-1.09c-.183-.295-.394-.576-.626-.769a.08.08 0 0 0-.086-.012l-.836.362a.086.086 0 0 0-.03.135c.165.194.554.656.684.867.163.262.325.585.47.934 1.042 2.505.602 8.316-2.973 8.165-.825-.035-1.514-.45-2.066-1.101-.557-.658-.955-1.542-1.169-2.44-.215-.904-.23-1.766-.076-2.37.078-.301.187-.504.3-.624a.48.48 0 0 1 .373-.163c.364 0 .59.137.748.348.177.233.3.599.338 1.079.076.944-.245 2.313-.7 3.15a.09.09 0 0 0 .005.093l.56.76a.084.084 0 0 0 .143-.01c.552-1.036 1.14-2.932 1.047-4.083-.048-.599-.21-1.196-.556-1.655-.364-.482-.902-.768-1.585-.768-.454 0-.84.183-1.132.492-.281.297-.459.69-.565 1.106-.211.828-.171 1.881.071 2.902.245 1.027.707 2.078 1.398 2.895.697.824 1.642 1.425 2.822 1.475 4.458.188 5.32-6.483 3.991-9.678M6.215 15.879c-.957-1.37-1.367-2.962-1.495-4.244a.085.085 0 0 1 .053-.087l.885-.361a.1.1 0 0 1 .077.006.1.1 0 0 1 .041.065c.127 1.214.511 2.876 1.302 4.008.401.575.884.98 1.46 1.152.56.167 1.348.056 2.287-.37a.09.09 0 0 1 .103.024l.64.806a.085.085 0 0 1-.03.13c-1.038.564-2.448.684-3.299.43-.87-.26-1.531-.854-2.024-1.56"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenEWT.displayName = 'EWT'