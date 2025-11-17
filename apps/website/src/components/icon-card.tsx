'use client'
import cx from 'classnames'
import Link from 'next/link'
import { useAppContext } from '../hooks'
import { Web3Icon } from './web3-icon'
import { TMetadata, ITokenMetadata, TType } from '@web3icons/common'

interface Props {
  className?: string
  metadata: TMetadata
  type?: TType
}

export default function IconCard({
  className,
  metadata,
  type: passedType,
}: Props): JSX.Element {
  const { variant, type: contextType, size, color } = useAppContext()
  const type = passedType || contextType

  const _label =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase()
      : metadata.name

  const iconId =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase() || metadata.id
      : metadata.id

  return (
    <Link
      href={`/${type}s/${iconId}`}
      id={metadata.id}
      className={cx(
        'group/card relative flex flex-col items-center justify-center gap-4 pb-4 pt-8 duration-150',
        'hover:bg-gray',
        className,
      )}
    >
      <Web3Icon
        metadata={metadata}
        variant={variant}
        type={type}
        size={size}
        color={color}
      />
      <span
        className={cx(
          'text-center text-white/40 group-data-[selected=true]/card:text-white',
        )}
      >
        <span className="text-xs">{_label}</span>
      </span>
    </Link>
  )
}
