import { TType, TMetadata, ITokenMetadata } from '@web3icons/common'
import fs from 'fs'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
} from '../constants'

const METADATA_PATHS = {
  token: TOKENS_METADATA_PATH,
  network: NETWORKS_METADATA_PATH,
  wallet: WALLETS_METADATA_PATH,
  exchange: EXCHANGES_METADATA_PATH,
}

/**
 * Finds the metadata for a given id and type (tokens, networks, or wallets)
 * @param id ID of the metadata to find
 * @param type Type of the metadata to find (tokens, networks, or wallets)
 * @returns Metadata for the given id and type
 */

export const findExistingMetadata = (id: string, type: TType): TMetadata | undefined => {
  const metadata = JSON.parse(fs.readFileSync(METADATA_PATHS[type], 'utf-8'))
  if (type === 'token') {
    return metadata.find((item: ITokenMetadata) => item.symbol.toUpperCase() === id)
  }
  return metadata.find((item: TMetadata) => item.id === id)
}
