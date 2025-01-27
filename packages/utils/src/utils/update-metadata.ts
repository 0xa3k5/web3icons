import * as fs from 'fs'
import { TMetadata, TType } from '@web3icons/common'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
} from '../constants'

export const updateMetadataJson = async (metadata: TMetadata, type: TType): Promise<void> => {
  const jsonPaths = {
    token: TOKENS_METADATA_PATH,
    network: NETWORKS_METADATA_PATH,
    wallet: WALLETS_METADATA_PATH,
    exchange: EXCHANGES_METADATA_PATH,
  }

  if (!jsonPaths[type]) {
    throw new Error('Invalid type')
  }

  const current = JSON.parse(fs.readFileSync(jsonPaths[type], 'utf-8'))

  const JSONFILE = JSON.stringify(
    Array.from(new Map([...current, metadata].map((item) => [item['id'], item])).values()),
  )

  fs.writeFileSync(jsonPaths[type], JSONFILE)

  console.info(`✔ ${type} metadata updated for: ${metadata.id}`)
}

// export const updateCustomJson = async (metadata: TRaw[], type: TType) => {
//   const jsonPaths = {
//     token: CUSTOM_TOKENS_METADATA_PATH,
//     network: CUSTOM_NETWORKS_METADATA_PATH,
//     wallet: WALLETS_METADATA_PATH,
//     exchange: EXCHANGES_METADATA_PATH,
//   }

//   if (!jsonPaths[type]) {
//     console.log(metadata)
//     throw new Error('wrong type')
//   }

//   const customJson = JSON.parse(fs.readFileSync(jsonPaths[type], 'utf-8'))

//   const JSONFILE = JSON.stringify(
//     Array.from(new Map([...customJson, ...metadata].map((item) => [item.id, item])).values()),
//   )

//   fs.writeFileSync(jsonPaths[type], JSONFILE)
//   console.info(`✔ custom ${type} added: ${metadata.id}`)
// }
