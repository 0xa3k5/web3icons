import { PropsWithChildren } from 'react'
import cx from 'classnames'

interface Props {
  className?: string
}

export const TableRow = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <tr
      className={cx(
        'border-gray-lightest/30 hover:bg-gray-lightest/20 h-12 border-b px-4 transition-colors',
        className,
      )}
    >
      {children}
    </tr>
  )
}
