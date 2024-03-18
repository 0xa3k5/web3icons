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
        'flex h-fit w-full items-center border-b border-transparent py-2 duration-150 focus-within:border-gray-lightest',
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
