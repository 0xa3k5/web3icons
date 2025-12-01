import cx from 'classnames'
import { PropsWithChildren } from 'react'

interface Props {
  className?: string
  placeholder: string
  value: string
  // eslint-disable-next-line no-unused-vars
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void
  // eslint-disable-next-line no-unused-vars
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  role?: string
  'aria-autocomplete'?: 'list' | 'none' | 'inline' | 'both'
  'aria-expanded'?: boolean
  'aria-controls'?: string
  'aria-activedescendant'?: string
}

export const SearchInput = ({
  className,
  placeholder,
  value,
  onInput,
  children,
  ...ariaProps
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={cx(
        className,
        'border-gray-lightest flex items-center rounded-md border px-4 py-2 duration-150',
        'group focus-within:border-white/20 focus-within:text-white',
      )}
    >
      <input
        placeholder={placeholder}
        value={value}
        type="search"
        onChange={onInput}
        className={cx(
          'h-7 w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none',
          '[&::-webkit-search-cancel-button]:h-4 [&::-webkit-search-cancel-button]:w-4 [&::-webkit-search-cancel-button]:cursor-pointer [&::-webkit-search-cancel-button]:appearance-none',
          "[&::-webkit-search-cancel-button]:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTggNkw2IDE4Ii8+PHBhdGggZD0ibTYgNiAxMiAxMiIvPjwvc3ZnPg==')]",
          '[&::-webkit-search-cancel-button]:bg-contain [&::-webkit-search-cancel-button]:bg-center [&::-webkit-search-cancel-button]:bg-no-repeat',
          '[&::-webkit-search-cancel-button]:opacity-40 hover:[&::-webkit-search-cancel-button]:opacity-100',
        )}
        {...ariaProps}
      />
      {children}
    </div>
  )
}
