import cx from 'classnames'

interface Props {
  className?: string
  checked: boolean
  onChange: () => void
}

export default function Checkbox({
  className,
  checked,
  onChange,
}: Props): JSX.Element {
  return (
    <label className={cx(className, 'inline-flex cursor-pointer items-center')}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={cx(
          'relative mr-2 inline-block h-6 w-6 rounded border border-gray-lightest',
          checked ? 'bg-primary' : 'bg-gray-light',
        )}
      >
        {checked && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="size-4 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}
      </span>
    </label>
  )
}
