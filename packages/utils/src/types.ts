export interface ITokenMetadata {
  id: string
  name: string
  symbol: string
  variants: string[]
  marketCapRank: number | null
  addresses: { [key: string]: string | undefined }
}

export interface INetworkMetadata {
  id: string
  name: string
  shortname?: string
  nativeCoinId?: string
  chain_identifier?: number
  variants: string[]
}

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
}

export interface IconMap {
  [key: string]: string
}
