import { NETWORKS_METADATA_PATH, TOKENS_METADATA_PATH, WALLETS_METADATA_PATH } from '../constants'
import * as fs from 'fs'
import { mapRawToMetadata } from '../utils'
import { INetworkRaw, ITokenRaw, IWalletRaw } from '@web3icons/common'

const main = () => {
  const _tokens: any[] = JSON.parse(fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'))
  const _networks: any[] = JSON.parse(fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'))
  const _wallets: any[] = JSON.parse(fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'))

  const tokens = _tokens.map((raw) =>
    mapRawToMetadata({
      type: 'token',
      raw: raw as ITokenRaw,
      variants: raw.variants,
      addresses: raw.addresses,
    }),
  )

  const networks = _networks.map((raw) =>
    mapRawToMetadata({
      type: 'network',
      raw: raw as INetworkRaw,
      variants: raw.variants,
    }),
  )

  const wallets = _wallets.map((raw) =>
    mapRawToMetadata({
      type: 'wallet',
      raw: raw as IWalletRaw,
      variants: raw.variants,
    }),
  )

  fs.writeFileSync(TOKENS_METADATA_PATH, JSON.stringify(tokens, null, 2))
  fs.writeFileSync(NETWORKS_METADATA_PATH, JSON.stringify(networks, null, 2))
  fs.writeFileSync(WALLETS_METADATA_PATH, JSON.stringify(wallets, null, 2))

  console.log('tokens', tokens.length)
  console.log('networks', networks.length)
  console.log('wallets', wallets.length)
}

main()
