'use client'
import cx from 'classnames'
import { useAppContext } from '../hooks'
import { Web3Icon } from './Web3Icon'
import { TMetadata, ITokenMetadata } from '@web3icons/common'

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

  const _label =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol?.toUpperCase()
      : metadata.name

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
    </div>
  )
}
