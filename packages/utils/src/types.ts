export interface ITokenMetadata {
  id: string
  symbol: string
  name: string
  variants: string[]
  marketCapRank: number | null
  addresses: { [key: string]: string | undefined }
}

export interface INetworkMetadata {
  id?: string
  name?: string
  shortname?: string
  nativeCoinId?: string
  variants?: string[]
}

export interface GeckoNetworks {
  id?: string
  chain_identifier?: string
  name: string
  shortname?: string
  native_coin_id?: string
}

export interface GeckoCoins {
  id: string
  name: string
  symbol: string
}
