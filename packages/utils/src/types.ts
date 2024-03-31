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
