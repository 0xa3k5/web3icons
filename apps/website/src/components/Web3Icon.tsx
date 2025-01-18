'use client'
import { useAppContext } from '../hooks'
import {
  TokenIcon,
  NetworkIcon,
  WalletIcon,
  ExchangeIcon,
} from '@web3icons/react'
import {
  TMetadata,
  TVariant,
  INetworkMetadata,
  IWalletMetadata,
  ITokenMetadata,
  IExchangeMetadata,
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

  const props = {
    size: passedSize ?? size,
    variant,
    color,
  }

  switch (type) {
    case 'network':
      return (
        <NetworkIcon network={(metadata as INetworkMetadata).id} {...props} />
      )
    case 'wallet':
      return <WalletIcon id={(metadata as IWalletMetadata).id} {...props} />
    case 'exchange':
      return <ExchangeIcon id={(metadata as IExchangeMetadata).id} {...props} />
    default:
      return (
        <TokenIcon symbol={(metadata as ITokenMetadata).symbol} {...props} />
      )
  }
}
