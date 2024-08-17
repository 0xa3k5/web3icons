import {
  ITokenMetadata,
  IWalletMetadata,
  INetworkMetadata,
  wallets,
  networks,
  tokens,
} from '@web3icons/core'
import { toKebabCase } from './naming-conventions'

export const findWallet = ({
  wallet,
}: {
  wallet: string
}): IWalletMetadata | undefined => {
  const walletObj = wallets.find(
    (w) =>
      w.id.toLowerCase() === toKebabCase(wallet) ||
      w.name.toLowerCase() === wallet.toLowerCase(),
  )
  return walletObj
}

export const findToken = ({
  symbol,
  address,
  network,
}: {
  symbol?: string
  address?: string
  network?: string
}): ITokenMetadata | undefined => {
  if (symbol) {
    return tokens.find(
      (token) => token.symbol.toLowerCase() === symbol.toLowerCase(),
    )
  } else if (address && network) {
    return tokens.find(
      (token) =>
        token.addresses[network]?.toLowerCase() === address.toLowerCase(),
    )
  }
  return undefined
}

export const findNetwork = ({
  network,
}: {
  network: string
}): INetworkMetadata | undefined => {
  const networkObj = networks.find(
    (net) =>
      net.id.toLowerCase() === toKebabCase(network) ||
      net.name.toLowerCase() === network.toLowerCase() ||
      net.shortname?.toLowerCase() === network.toLowerCase(),
  )
  return networkObj
}
