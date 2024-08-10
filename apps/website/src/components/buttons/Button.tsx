import cx from 'classnames'
import { PropsWithChildren } from 'react'

interface Props {
  className?: string
  disabled?: boolean
  onClick?: () => void
  icon?: React.ReactNode
}

export default function Button({
  className,
  disabled,
  children,
  onClick,
  icon,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-disabled={disabled}
      className={cx(
        className,
        'items-center rounded-sm aria-disabled:pointer-events-none aria-disabled:text-opacity-20',
        'text-opacity-60 hover:bg-gray-lightest hover:text-opacity-100',
        'relative flex gap-2 p-2 text-white duration-150',
      )}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  )
}
