import fs from 'fs'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
} from '../constants'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  IExchangeMetadata,
} from '@web3icons/common'

export const orderMetadata = () => {
  const networks: INetworkMetadata[] = JSON.parse(
    fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'),
  )
  const tokens: ITokenMetadata[] = JSON.parse(
    fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'),
  )
  const wallets: IWalletMetadata[] = JSON.parse(
    fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'),
  )
  const exchanges: IExchangeMetadata[] = JSON.parse(
    fs.readFileSync(EXCHANGES_METADATA_PATH, 'utf-8'),
  )

  const reorderFields = <T extends Record<string, any>>(
    items: T[],
    fields: (keyof T)[],
  ) => {
    return items.map((item) => {
      const ordered: Partial<T> = {}
      fields.forEach((field) => {
        if (field in item) {
          ordered[field] = item[field]
        }
      })
      return ordered as T
    })
  }

  const networkFields = Object.keys(
    networks[0] ?? {},
  ) as (keyof INetworkMetadata)[]
  const tokenFields = Object.keys(tokens[0] ?? {}) as (keyof ITokenMetadata)[]
  const walletFields = Object.keys(
    wallets[0] ?? {},
  ) as (keyof IWalletMetadata)[]
  const exchangeFields = Object.keys(
    exchanges[0] ?? {},
  ) as (keyof IExchangeMetadata)[]

  const networksOrdered = reorderFields(networks, networkFields)
  const tokensOrdered = reorderFields(tokens, tokenFields)
  const walletsOrdered = reorderFields(wallets, walletFields)
  const exchangesOrdered = reorderFields(exchanges, exchangeFields)

  fs.writeFileSync(
    NETWORKS_METADATA_PATH,
    JSON.stringify(networksOrdered, null, 2),
  )
  console.log(`✓ Ordered: networks metadata at ${NETWORKS_METADATA_PATH}`)
  fs.writeFileSync(TOKENS_METADATA_PATH, JSON.stringify(tokensOrdered, null, 2))
  console.log(`✓ Ordered: tokens metadata at ${TOKENS_METADATA_PATH}`)
  fs.writeFileSync(
    WALLETS_METADATA_PATH,
    JSON.stringify(walletsOrdered, null, 2),
  )
  console.log(`✓ Ordered: wallets metadata at ${WALLETS_METADATA_PATH}`)
  fs.writeFileSync(
    EXCHANGES_METADATA_PATH,
    JSON.stringify(exchangesOrdered, null, 2),
  )
  console.log(`✓ Ordered: exchanges metadata at ${EXCHANGES_METADATA_PATH}`)
}
