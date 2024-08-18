import { INetworkMetadata, INetworkRaw } from '../types'

export const mapRawNetworkToINetwork = (raw: INetworkRaw): INetworkMetadata => {
  const network: INetworkMetadata = {
    id: raw.id,
    name: raw.name,
    shortname: raw.shortname,
    chainId: raw.chain_identifier,
    nativeCoinId: raw.native_coin_id,
    variants: [],
  }

  return network
}

export const mapRawWalletToIWallet = (raw: INetworkRaw): INetworkMetadata => {
  const wallet: INetworkMetadata = {
    id: raw.id,
    name: raw.name,
    variants: [],
  }

  return wallet
}
