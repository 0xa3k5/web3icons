import {
  TType,
  ITokenRaw,
  IWalletRaw,
  INetworkRaw,
  ITokenMetadata,
  INetworkMetadata,
  IWalletMetadata,
  TVariant,
} from '../types'

export const mapRawToMetadata = ({
  type,
  raw,
  variants,
  addresses,
}: {
  type: TType
  raw: INetworkRaw | ITokenRaw | IWalletRaw
  variants: TVariant[]
  addresses?: ITokenMetadata['addresses']
}): INetworkMetadata | ITokenMetadata | IWalletMetadata => {
  const baseMetadata = {
    id: raw.id,
    name: raw.name,
    variants,
  }

  if (type === 'network') {
    const mapped: INetworkMetadata = {
      ...baseMetadata,
      shortName: (raw as INetworkRaw).shortname,
      chainId: (raw as INetworkRaw).chain_identifier ?? (raw as any).chainId,
      nativeCoinId: (raw as INetworkRaw).native_coin_id ?? (raw as any).nativeCoinId,
    }
    return mapped
  }

  if (type === 'token') {
    const mapped: ITokenMetadata = {
      ...baseMetadata,
      symbol: (raw as ITokenRaw).symbol,
      marketCapRank: (raw as ITokenRaw).market_cap_rank ?? (raw as any).marketCapRank ?? null,
      addresses: addresses || {},
    }

    return mapped
  }

  if (type === 'wallet') {
    const mapped: IWalletMetadata = {
      ...baseMetadata,
    }
    console.log(mapped)

    return mapped
  }

  return baseMetadata as IWalletMetadata
}
