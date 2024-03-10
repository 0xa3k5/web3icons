import { PropsWithChildren, ReactNode } from "react";

interface Props {
  placeholder: string;
  value: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
}

export default function SearchInput({
  placeholder,
  icon,
  value,
  onInput,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  return (
    <div className="flex items-center gap-2 border-b border-transparent focus-within:border-white/20">
      {icon && <span className="p-2">{icon}</span>}
      <input
        placeholder={placeholder}
        value={value}
        onInput={onInput}
        className="text-text placeholder:text-text-tertiary h-8 w-full bg-transparent focus:outline-none"
      />
      {children}
    </div>
  );
}
