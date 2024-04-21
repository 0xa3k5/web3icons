import { h } from 'preact'
import { PropsWithChildren, ReactNode, ChangeEvent } from 'preact/compat'
interface Props {
  placeholder: string
  value: string
  // eslint-disable-next-line no-unused-vars
  onInput: (event: ChangeEvent<HTMLInputElement>) => void
  icon?: ReactNode
}

export default function TextInput({
  placeholder,
  icon,
  value,
  onInput,
  children,
}: PropsWithChildren<Props>): h.JSX.Element {
  return (
    <div className="relative flex w-full items-center gap-2 rounded-full border border-gray-lightest bg-gray-light px-4 focus-within:border-primary">
      {icon && <span className="p-2">{icon}</span>}
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
