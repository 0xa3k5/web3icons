export interface ITokenMetadata {
  id: string
  symbol: string
  name: string
  variants: string[]
  marketCapRank: number
  addresses: {
    [key: string]: string
  }
}

export interface INetworkMetadata {
  id: string
  name: string
  variants: string[]
}
