import { h } from 'preact'
import { PropsWithChildren, ReactNode, ChangeEvent } from 'preact/compat'
interface Props {
  placeholder: string
  value: string
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
    <div className="border focus-within:border-primary border-gray-lightest relative flex items-center gap-2 bg-transparent px-2">
      {icon && <span className="p-2">{icon}</span>}
      <input
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        className="text-white placeholder:text-white/40 focus:outline-none h-8 w-full bg-transparent"
      />
      {children}
    </div>
  )
}
