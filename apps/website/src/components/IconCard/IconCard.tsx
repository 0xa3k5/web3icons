import cx from 'classnames'
import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { useAppContext } from '../../hooks'
import { CodeButton, CopyButton, DownloadButton } from '../buttons'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
} from '@web3icons/core'
import { InfoDrawer } from '../InfoDrawer'
import { Drawer } from 'vaul'
import { useSvgContent } from '../../hooks/useSvgContent'
import { useWeb3Icon } from '../../hooks/useWeb3Icon'

interface Props {
  className?: string
  metadata: ITokenMetadata | INetworkMetadata | IWalletMetadata
}

export default function IconCard({ className, metadata }: Props): JSX.Element {
  // prettier-ignore
  const { variant, selectedIcons, setSelectedIcons, type } = useAppContext()
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

  const { svgContent, error, loading } = useSvgContent({
    metadata,
    variant,
    type,
  })

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
  }, [metadata])

  return (
    <>
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
        {useWeb3Icon({ metadata, variant })}
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
        {hover ? (
          <span className="absolute right-3 top-3 flex items-end gap-2">
            <CopyButton
              className="w-full rounded-sm p-1"
              copyContent={svgContent}
              disabled={loading}
            />
            <DownloadButton
              type={type}
              className="w-full rounded-sm p-1"
              variant={variant}
              icons={[metadata]}
            />
            <CodeButton className="w-full rounded-sm p-1" metadata={metadata} />
          </span>
        ) : null}
      </label>
    </>
  )
}
