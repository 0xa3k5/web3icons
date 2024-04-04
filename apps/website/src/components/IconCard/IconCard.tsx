import cx from 'classnames'
import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { useAppContext } from '../../hooks'
import { TokenIcon } from '@token-icons/react'
import { CopyButton, DownloadButton } from '../buttons'
import { ITokenMetadata } from '@token-icons/utils'

interface Props {
  className?: string
  icon: ITokenMetadata
}

export default function IconCard({ className, icon }: Props): JSX.Element {
  const { size, variant, selectedIcons, setSelectedIcons, color } =
    useAppContext()

  const [hover, setHover] = useState(false)
  const isSelected = selectedIcons.includes(icon.symbol)

  const handleCheckboxChange = () => {
    setSelectedIcons((prevSelectedIcons) =>
      isSelected
        ? prevSelectedIcons.filter((icon) => icon !== icon)
        : [...prevSelectedIcons, icon.symbol],
    )
  }

  useEffect(() => {
    const spacedown = (e: KeyboardEvent) => {
      if (hover && e.key === ' ') {
        e.preventDefault()
        setSelectedIcons((selectedIcons) => {
          return isSelected
            ? selectedIcons.filter(
                (selectedIcon) => selectedIcon !== icon.symbol,
              )
            : [...selectedIcons, icon.symbol]
        })
      }
    }

    document.addEventListener('keydown', spacedown)
    return () => document.removeEventListener('keydown', spacedown)
  })

  return (
    <label
      className={cx(
        'relative flex flex-col items-center justify-center gap-4 border border-gray-lightest  p-8 duration-150',
        '[&:has(:focus-visible)]:focus-within:border-primary',
        className,
        isSelected ? 'bg-gray-light' : hover && 'bg-gray',
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <TokenIcon
        variant={variant}
        key={icon.symbol}
        size={size}
        color={color}
        symbol={icon.symbol}
      />
      <span
        className={cx(
          'text-white',
          isSelected ? 'text-opacity-100' : 'text-opacity-60',
        )}
      >
        {icon.symbol}
      </span>
      <input
        type="checkbox"
        id={`checkbox-${icon.id}`}
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      {(isSelected || hover) && (
        <span className="absolute left-3 top-3">
          <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
        </span>
      )}
      {hover && (
        <span className="absolute right-3 top-3 flex items-end gap-2">
          <CopyButton
            className="w-full rounded-sm p-[4px]"
            variant={variant}
            selectedIcons={[icon.symbol]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </CopyButton>
          <DownloadButton
            className="w-full rounded-sm p-[4px]"
            variant={variant}
            selectedIcons={[icon.symbol]}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
          </DownloadButton>
        </span>
      )}
    </label>
  )
}
