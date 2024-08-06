import {
  ITokenMetadata,
  INetworkMetadata,
  IWalletMetadata,
  TVariant,
} from '../types'
import _tokens from './tokens.json'
import _networks from './networks.json'
import _wallets from './wallets.json'

export const tokens: ITokenMetadata[] = _tokens.map((token) => ({
  ...token,
  variants: token.variants as TVariant[],
}))

export const networks: INetworkMetadata[] = _networks.map((network) => ({
  ...network,
  variants: network.variants as TVariant[],
}))

export const wallets: IWalletMetadata[] = _wallets.map((wallet) => ({
  ...wallet,
  variants: wallet.variants as TVariant[],
}))
