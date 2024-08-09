import cx from 'classnames'
import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { useAppContext } from '../../hooks'
import { NetworkIcon, TokenIcon, WalletIcon } from '@web3icons/react'
import { CopyButton, DownloadButton } from '../buttons'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
} from '@web3icons/core'
// import { WalletIcon } from './WalletIcon'

interface Props {
  className?: string
  metadata: ITokenMetadata | INetworkMetadata | IWalletMetadata
}

export default function IconCard({ className, metadata }: Props): JSX.Element {
  // prettier-ignore
  const { variant, selectedIcons, setSelectedIcons, type, color, size } = useAppContext()
  const [hover, setHover] = useState(false)
  const _label =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase()
      : metadata.name

  const isSelected = selectedIcons.includes(metadata)

  const handleCheckboxChange = () => {
    setSelectedIcons((prevSelectedIcons) =>
      isSelected
        ? prevSelectedIcons.filter((icon) => icon !== icon)
        : [...prevSelectedIcons, metadata],
    )
  }

  const handleRender = () => {
    if (type === 'token') {
      return (
        <TokenIcon
          symbol={(metadata as ITokenMetadata).symbol}
          {...{ variant, color, size }}
        />
      )
    } else if (type === 'network') {
      return (
        <NetworkIcon
          network={(metadata as INetworkMetadata).id}
          {...{ variant, color, size }}
        />
      )
    } else if (type === 'wallet') {
      return (
        <WalletIcon
          id={(metadata as IWalletMetadata).id}
          {...{ variant, color, size }}
        />
      )
    }
  }

  useEffect(() => {
    const spacedown = (e: KeyboardEvent) => {
      if (hover && e.key === ' ') {
        e.preventDefault()
        setSelectedIcons((selectedIcons) => {
          return isSelected
            ? selectedIcons.filter((selectedIcon) => selectedIcon !== metadata)
            : [...selectedIcons, metadata]
        })
      }
    }

    document.addEventListener('keydown', spacedown)
    return () => document.removeEventListener('keydown', spacedown)
  })

  return (
    <label
      id={metadata.id}
      className={cx(
        'relative flex flex-col items-center justify-center gap-4 border border-gray-lightest  p-8 duration-150',
        '[&:has(:focus-visible)]:focus-within:border-primary',
        className,
        isSelected ? 'bg-gray-light' : hover && 'bg-gray',
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {handleRender()}
      <span
        className={cx(
          'text-center text-white',
          isSelected ? 'text-opacity-100' : 'text-opacity-60',
        )}
      >
        <span className="text-xs">{_label}</span>
      </span>
      <input
        type="checkbox"
        id={`checkbox-${metadata.id}`}
        name={metadata.id}
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
            type={type}
            metadata={metadata}
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
            type={type}
            className="w-full rounded-sm p-[4px]"
            variant={variant}
            icons={[metadata]}
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
