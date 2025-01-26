import fs from 'fs'
import { TType, TMetadata } from '@web3icons/common'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
} from '../constants'

export const deleteMetadata = async (fileName: string, type: TType): Promise<void> => {
  const paths = {
    token: TOKENS_METADATA_PATH,
    network: NETWORKS_METADATA_PATH,
    wallet: WALLETS_METADATA_PATH,
    exchange: EXCHANGES_METADATA_PATH,
  }

  const metadataPath = paths[type]
  const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'))

  const updatedMetadata = metadata.filter((item: TMetadata) => item.id !== fileName)

  fs.writeFileSync(metadataPath, JSON.stringify(updatedMetadata, null, 2))
}
