'use client'

import { TokenIcon, NetworkIcon, WalletIcon } from '@web3icons/react'
import { useAppContext } from '../hooks'
import {
  TMetadata,
  TVariant,
  INetworkMetadata,
  IWalletMetadata,
  ITokenMetadata,
} from '@web3icons/common'

export const Web3Icon = ({
  metadata,
  variant,
  size: passedSize,
}: {
  metadata: TMetadata
  variant: TVariant
  size?: number
}): JSX.Element => {
  const { type, color, size } = useAppContext()
  if (type === 'network') {
    return (
      <NetworkIcon
        network={(metadata as INetworkMetadata).id}
        size={passedSize ?? size}
        {...{ variant, color }}
      />
    )
  } else if (type === 'wallet') {
    return (
      <WalletIcon
        id={(metadata as IWalletMetadata).id}
        size={passedSize ?? size}
        {...{ variant, color }}
      />
    )
  }
  return (
    <TokenIcon
      symbol={(metadata as ITokenMetadata).symbol}
      size={passedSize ?? size}
      {...{ variant, color }}
    />
  )
}
