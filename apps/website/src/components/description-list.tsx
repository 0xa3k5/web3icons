import cx from 'classnames'

interface DescriptionListProps {
  children: React.ReactNode
  className?: string
}

export const DescriptionList = ({
  children,
  className,
}: DescriptionListProps): JSX.Element => {
  return <dl className={cx('flex flex-col text-sm', className)}>{children}</dl>
}

interface DescriptionListItemProps {
  label: string
  value: any
  className?: string
}

DescriptionList.Item = ({
  label,
  value,
  className,
}: DescriptionListItemProps): JSX.Element => {
  return (
    <span
      className={cx(
        'flex items-center justify-between border-b border-gray-lightest py-3 last-of-type:border-0',
        className,
      )}
    >
      <dt className="capitalize text-white/40">{label}</dt>
      <dd>{renderValue(value)}</dd>
    </span>
  )
}

const renderValue = (value: any): React.ReactNode => {
  if (Array.isArray(value)) {
    return value.map((v) => v.toString()).join(', ')
  }

  if (typeof value === 'object' && value !== null) {
    return renderObject(value)
  }

  return String(value)
}

const renderObject = (obj: Record<string, any>): React.ReactNode => {
  return Object.entries(obj).length
}
