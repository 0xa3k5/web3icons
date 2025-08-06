import cx from 'classnames'
import { PropsWithChildren } from 'react'

interface Props {
  className?: string
  placeholder: string
  value: string
  // eslint-disable-next-line no-unused-vars
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchInput({
  className,
  placeholder,
  value,
  onInput,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <div
      className={cx(
        className,
        'flex w-full items-center rounded-full border border-gray-lightest bg-gray-light px-4 py-2 duration-150',
        'focus-within:bg-gray-lightest focus-within:text-white',
      )}
    >
      <input
        placeholder={placeholder}
        value={value}
        onChange={onInput}
        className="h-8 w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
      />
      {children}
    </div>
  )
}
