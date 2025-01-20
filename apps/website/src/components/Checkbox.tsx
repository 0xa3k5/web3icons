import cx from 'classnames'

interface Props {
  checked: boolean
  onChange: () => void
  className?: string
}
export const Checkbox = ({ checked, onChange, className }: Props) => {
  return (
    <label className={cx('inline-flex cursor-pointer items-center', className)}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={cx(
          'absolute left-3 top-3 hidden',
          'group-hover/card:block group-focus-visible:focus-within/card:block group-data-[selected=true]/card:block',
          'h-6 w-6 rounded border border-gray-lightest bg-gray-light group-data-[selected=true]/card:bg-primary',
        )}
      >
        <span className="absolute inset-0 hidden items-center justify-center group-data-[selected=true]/card:flex">
          <svg
            className="size-4"
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
      </span>
    </label>
  )
}
