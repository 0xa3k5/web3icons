export type TVariant = 'mono' | 'branded'
export type TType = 'networks' | 'tokens' | 'wallets'
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
  shortname?: string
  nativeCoinId?: string
  variants: TVariant[]
}
