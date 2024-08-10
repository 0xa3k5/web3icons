import {
  ITokenMetadata,
  INetworkMetadata,
  IWalletMetadata,
  TVariant,
} from '@web3icons/core'
import { TokenIcon, NetworkIcon, WalletIcon } from '@web3icons/react'
import { useAppContext } from './AppContext'
import { useMemo } from 'react'

export const useWeb3Icon = ({
  metadata,
  variant,
  size: passedSize,
}: {
  metadata: ITokenMetadata | INetworkMetadata | IWalletMetadata
  variant: TVariant
  size?: number
}) => {
  const { type, color, size } = useAppContext()

  const component = useMemo(() => {
    if (type === 'token') {
      return (
        <TokenIcon
          symbol={(metadata as ITokenMetadata).symbol}
          size={passedSize ?? size}
          {...{ variant, color }}
        />
      )
    } else if (type === 'network') {
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
  }, [type, metadata, variant])

  return component
}
