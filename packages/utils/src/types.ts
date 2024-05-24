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
  name: string
  shortname?: string
  nativeCoinId?: string
  variants: string[]
}

// gecko-networks.json & custom-networks.json
export interface INetworkRaw {
  id: string
  chain_identifier?: string
  name: string
  shortname?: string
  native_coin_id: string
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
