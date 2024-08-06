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
  shortname?: string
  nativeCoinId?: string
  variants: TVariant[]
}

export interface IWalletMetadata {
  id: string
  name: string
  variants: TVariant[]
}
