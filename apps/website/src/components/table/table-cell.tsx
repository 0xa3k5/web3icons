import { PropsWithChildren } from 'react'
import cx from 'classnames'

interface Props {
  className?: string
}

export const TableCell = ({
  className,
  children,
}: PropsWithChildren<Props>) => {
  return <td className={cx('py-4', className)}>{children}</td>
}
