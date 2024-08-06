import { ITokenMetadata, INetworkMetadata, TVariant } from '../types'
import tokenData from './tokens.json'
import networkData from './networks.json'

export const tokens: ITokenMetadata[] = tokenData.map((token) => ({
  ...token,
  variants: token.variants as TVariant[],
}))

export const networks: INetworkMetadata[] = networkData.map((network) => ({
  ...network,
  variants: network.variants as TVariant[],
}))
