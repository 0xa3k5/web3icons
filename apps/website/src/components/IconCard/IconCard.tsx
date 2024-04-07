import cx from 'classnames'
import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { useAppContext } from '../../hooks'
import { NetworkIcon, TokenIcon } from '@token-icons/react'
import { CopyButton, DownloadButton } from '../buttons'
import { INetworkMetadata, ITokenMetadata } from '@token-icons/core'

interface Props {
  className?: string
  icon: ITokenMetadata | INetworkMetadata
}

export default function IconCard({ className, icon }: Props): JSX.Element {
  const { size, variant, selectedIcons, setSelectedIcons, color, type } =
    useAppContext()

  const [hover, setHover] = useState(false)
  const symbolOrId =
    type === 'tokens'
      ? (icon as ITokenMetadata).symbol
      : (icon as INetworkMetadata).id

  const isSelected = selectedIcons.includes(symbolOrId)

  const handleCheckboxChange = () => {
    setSelectedIcons((prevSelectedIcons) =>
      isSelected
        ? prevSelectedIcons.filter((icon) => icon !== icon)
        : [...prevSelectedIcons, symbolOrId],
    )
  }

  useEffect(() => {
    const spacedown = (e: KeyboardEvent) => {
      if (hover && e.key === ' ') {
        e.preventDefault()
        setSelectedIcons((selectedIcons) => {
          return isSelected
            ? selectedIcons.filter(
                (selectedIcon) => selectedIcon !== symbolOrId,
              )
            : [...selectedIcons, symbolOrId]
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
      {type === 'tokens' && (
        <TokenIcon
          variant={variant}
          key={symbolOrId}
          size={size}
          color={color}
          symbol={symbolOrId}
        />
      )}
      {type === 'networks' && (
        <NetworkIcon
          variant={variant}
          key={symbolOrId}
          size={size}
          color={color}
          network={symbolOrId}
        />
      )}
      <span
        className={cx(
          'text-center text-white',
          isSelected ? 'text-opacity-100' : 'text-opacity-60',
        )}
      >
        {type === 'tokens' && (
          <span className="text-xs">{(icon as ITokenMetadata).symbol}</span>
        )}
        {type === 'networks' && (
          <span className="text-xs">{(icon as INetworkMetadata).name}</span>
        )}
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
            selectedIcons={[symbolOrId]}
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
            selectedIcons={[symbolOrId]}
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
