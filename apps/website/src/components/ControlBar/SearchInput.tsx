import cx from 'classnames'
import { PropsWithChildren } from 'react'

interface Props {
  className?: string
  placeholder: string
  value: string
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
        'flex w-full items-center gap-2 rounded-full border border-transparent bg-gray-light px-4 py-2 focus-within:border-gray-lightest',
      )}
    >
      <input
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        className="h-8 w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
      />
      {children}
    </div>
  )
}
