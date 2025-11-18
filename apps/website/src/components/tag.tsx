import { PropsWithChildren } from 'react'
import cx from 'classnames'

interface Props {
  className?: string
  // @default 'muted'
  variant?: 'blue' | 'yellow' | 'orange' | 'green' | 'muted'
}

export const Tag = ({
  className,
  variant = 'muted',
  children,
}: PropsWithChildren<Props>) => {
  return (
    <span
      data-variant={variant}
      className={cx(
        'data-[variant=blue]:bg-blue-200/10',
        'data-[variant=green]:bg-green-200/10',
        'data-[variant=muted]:bg-transparent',
        'data-[variant=orange]:bg-primary/10',
        'data-[variant=yellow]:bg-yellow-200/10',

        'data-[variant=blue]:border-blue-800',
        'data-[variant=green]:border-green-800',
        'data-[variant=muted]:border-gray-lightest',
        'data-[variant=orange]:border-primary/20',
        'data-[variant=yellow]:border-yellow-800',

        'data-[variant=blue]:text-white',
        'data-[variant=green]:text-white',
        'data-[variant=muted]:text-white',
        'data-[variant=orange]:text-white',
        'data-[variant=yellow]:text-white',
        'border-gray-lightest rounded-lg border px-2 py-1 text-sm',
        className,
      )}
    >
      {children}
    </span>
  )
}
