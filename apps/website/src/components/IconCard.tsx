'use client'
import cx from 'classnames'
import { useAppContext, useSvgContent } from '../hooks'
import { CopyButton, DownloadButton } from './buttons'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
} from '@web3icons/core'
import { InfoDrawer } from './InfoDrawer'
import { Web3Icon } from './Web3Icon'

interface Props {
  className?: string
  metadata: ITokenMetadata | INetworkMetadata | IWalletMetadata
}

export default function IconCard({ className, metadata }: Props): JSX.Element {
  // prettier-ignore
  const { variant, selectedIcons, setSelectedIcons, type } = useAppContext()

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

  const { svgContent, loading } = useSvgContent({
    metadata,
    variant,
    type,
  })

  return (
    <label
      id={metadata.id}
      data-selected={isSelected}
      className={cx(
        'group/card relative flex flex-col items-center justify-center gap-4 pb-4 pt-8 duration-150',
        'hover:bg-gray [&:has(:focus-visible)]:focus-within:border-primary',
        'data-[selected=true]:bg-gray-light',
        className,
      )}
    >
      <Web3Icon metadata={metadata} variant={variant} />
      <span
        className={cx(
          'text-center text-white/40 group-data-[selected=true]/card:text-white',
        )}
      >
        <span className="text-xs">{_label}</span>
      </span>
      <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
      <span className="absolute right-3 top-3 z-[5] hidden items-end gap-2 group-hover/card:flex group-focus-visible:focus-within/card:flex">
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
        <InfoDrawer metadata={metadata} />
      </span>
    </label>
  )
}

const Checkbox = ({
  checked,
  onChange,
}: {
  checked: boolean
  onChange: () => void
}) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={cx(
          'absolute left-3 top-3 hidden',
          'group-hover/card:block group-focus-visible:focus-within/card:block group-data-[selected=true]/card:block',
          'h-6 w-6 rounded border border-gray-lightest bg-gray-light group-data-[selected=true]/card:bg-primary',
        )}
      >
        <span className="absolute inset-0 hidden items-center justify-center group-data-[selected=true]/card:flex">
          <svg
            className="size-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </span>
    </label>
  )
}
