'use client'
import React, { memo } from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { useAppContext } from '../hooks'
import { Web3Icon } from './web3-icon'
import { TMetadata, ITokenMetadata, TType, TVariant } from '@web3icons/common'

interface Props {
  className?: string
  metadata: TMetadata
  type?: TType
  variant?: TVariant
  forceFullPage?: boolean
}

export const IconCard = memo(
  ({
    className,
    metadata,
    type: passedType,
    variant: passedVariant,
    forceFullPage = false,
  }: Props) => {
    const {
      variant: contextVariant,
      type: contextType,
      size,
      color,
    } = useAppContext()
    const type = passedType || contextType
    const variant = passedVariant || contextVariant

    const _label =
      type === 'token'
        ? (metadata as ITokenMetadata).symbol?.toUpperCase()
        : metadata.name

    const iconId =
      type === 'token'
        ? (metadata as ITokenMetadata).symbol?.toUpperCase() || metadata.id
        : metadata.id

    const href = `/${type}s/${iconId}`
    const LinkOrAnchor = forceFullPage ? 'a' : Link

    return (
      <LinkOrAnchor
        href={href}
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
        <span className="text-center text-white/40 group-hover/card:text-white">
          <span className="text-xs">{_label}</span>
        </span>
      </LinkOrAnchor>
    )
  },
)
