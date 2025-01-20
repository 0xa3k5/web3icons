'use client'
import cx from 'classnames'
import { useAppContext } from '../hooks'
import { CopyButton, DownloadButton } from './buttons'
import { Web3Icon } from './Web3Icon'
import { TMetadata, ITokenMetadata } from '@web3icons/common'
import { fetchSvgContent } from '../utils'
import { useEffect, useState } from 'react'

interface Props {
  className?: string
  metadata: TMetadata
  onClick: () => void
}

export default function IconCard({
  className,
  metadata,
  onClick,
}: Props): JSX.Element {
  const { variant, type } = useAppContext()
  const [svgContent, setSvgContent] = useState<string>('')

  const _label =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase()
      : metadata.name

  useEffect(() => {
    ;(async () => {
      const { svg } = await fetchSvgContent({
        metadata,
        variant,
        type,
      })
      setSvgContent(svg)
    })()
  }, [variant])

  return (
    <div
      id={metadata.id}
      className={cx(
        'group/card relative flex flex-col items-center justify-center gap-4 pb-4 pt-8 duration-150',
        'hover:bg-gray',
        className,
      )}
      onClick={onClick}
    >
      <Web3Icon metadata={metadata} variant={variant} />
      <span
        className={cx(
          'text-center text-white/40 group-data-[selected=true]/card:text-white',
        )}
      >
        <span className="text-xs">{_label}</span>
      </span>
      <span className="absolute right-3 top-3 hidden items-end gap-2 group-hover/card:flex group-focus-visible:focus-within/card:flex">
        <CopyButton
          className="w-full rounded-sm p-1"
          copyContent={svgContent}
          disabled={!svgContent}
        />
        <DownloadButton
          type={type}
          className="w-full rounded-sm p-1"
          variant={variant}
          metadata={metadata}
        />
      </span>
    </div>
  )
}
