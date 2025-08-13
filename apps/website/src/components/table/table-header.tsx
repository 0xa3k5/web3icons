import { PropsWithChildren } from 'react'
import cx from 'classnames'

interface Props {
  className?: string
}

export const TableHeader = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <th className={cx('py-2 font-mono text-sm text-white/60', className)}>
      {children}
    </th>
  )
}
