export type TVariant = 'mono' | 'branded'
export type TType = 'network' | 'token' | 'wallet'

export interface ITokenMetadata {
  id: string
  symbol: string
  name: string
  variants: TVariant[]
  marketCapRank: number | null
  addresses: { [key: string]: string | undefined }
}

export interface INetworkMetadata {
  id: string
  name: string
  chainId?: number | string
  shortName?: string
  nativeCoinId?: string
  variants: TVariant[]
}

export interface IWalletMetadata {
  id: string
  name: string
  variants: TVariant[]
}

export type TMetadata = INetworkMetadata | IWalletMetadata | ITokenMetadata
export type TRaw = INetworkRaw | ITokenRaw | IWalletRaw

// gecko-networks.json & custom-networks.json
export interface INetworkRaw {
  id: string
  name: string
  shortname?: string
  native_coin_id?: string
  chain_identifier?: number
}

// gecko-coins.json & custom-tokens.json
export interface ITokenRaw {
  id: string
  name: string
  symbol: string
  market_cap_rank?: number | null
}

// wallets.json
export interface IWalletRaw {
  id: string
  name: string
}

export interface IconMap {
  [key: string]: string
}
