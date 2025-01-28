export type TVariant = 'branded' | 'mono' | 'background'
export type TType = 'network' | 'token' | 'wallet' | 'exchange'
export type TExchangeType = 'cex' | 'dex'

interface IMetadata {
  id: string
  fileName: string
  name: string
  variants: TVariant[]
}

export interface ITokenMetadata extends IMetadata {
  symbol: string
  marketCapRank: number | null
  addresses: { [key: string]: string | undefined }
}

export interface INetworkMetadata extends IMetadata {
  shortName?: string
  nativeCoinId?: string
  chainId?: number | string
  caip2id?: string
}

export interface IWalletMetadata extends IMetadata {}

export interface IExchangeMetadata extends IMetadata {
  type: TExchangeType
}

interface IRaw {
  id: string
  name: string
}
// gecko-networks.json & custom-networks.json
export interface INetworkRaw extends IRaw {
  shortname?: string
  native_coin_id?: string
  chain_identifier?: number
}

// gecko-coins.json & custom-tokens.json
export interface ITokenRaw extends IRaw {
  symbol: string
  market_cap_rank?: number | null
}

// wallets.json
export interface IWalletRaw extends IRaw {}

// exchanges.json
export interface IExchangeRaw extends IRaw {
  type: TExchangeType
}

export interface IconMap {
  [key: string]: string
}

export type TMetadata =
  | INetworkMetadata
  | IWalletMetadata
  | ITokenMetadata
  | IExchangeMetadata

export type TRaw = INetworkRaw | ITokenRaw | IWalletRaw | IExchangeRaw
