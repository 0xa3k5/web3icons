'use client'
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
  TType,
} from '@web3icons/common'

interface Props {
  metadata: TMetadata
  variant: TVariant
  type: TType
  size?: number
  className?: string
  color?: string
}

export const Web3Icon = (props: Props): JSX.Element => {
  switch (props.type) {
    case 'network':
      return (
        <NetworkIcon id={(props.metadata as INetworkMetadata)?.id} {...props} />
      )
    case 'wallet':
      return (
        <WalletIcon id={(props.metadata as IWalletMetadata)?.id} {...props} />
      )
    case 'exchange':
      return (
        <ExchangeIcon
          id={(props.metadata as IExchangeMetadata)?.id}
          {...props}
        />
      )
    default:
      return (
        <TokenIcon
          symbol={(props.metadata as ITokenMetadata)?.symbol}
          {...props}
        />
      )
  }
}
