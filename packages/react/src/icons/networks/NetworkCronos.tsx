import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkCronos = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12.003 4 5 8.001v8L12.003 20 19 16.001v-8zm4.924 10.816-4.924 2.813-4.927-2.813V9.184l4.927-2.813 4.924 2.813z"
          />
          <path
            fill="currentColor"
            d="M15.268 13.87 12 15.735l-3.271-1.867v-3.736L12 8.264l3.268 1.87-1.36.777L12 9.82l-1.908 1.091v2.178L12 14.18l1.908-1.091z"
          />
        </>
      ) : (
        <>
          <path
            fill="#051221"
            d="M12.003 4 5 8.001v8L12.003 20 19 16.001v-8zm4.924 10.816-4.924 2.813-4.927-2.813V9.184l4.927-2.813 4.924 2.813z"
          />
          <path
            fill="#051221"
            d="M15.268 13.87 12 15.735l-3.271-1.867v-3.736L12 8.264l3.268 1.87-1.36.777L12 9.82l-1.908 1.091v2.178L12 14.18l1.908-1.091z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkCronos.displayName = 'cronos'
