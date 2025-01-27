import { TVariant } from '@web3icons/common'

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
  shortName?: string
  nativeCoinId?: string
  chainId?: number | string
  variants: TVariant[]
}

export interface IWalletMetadata {
  id: string
  name: string
  variants: TVariant[]
}
