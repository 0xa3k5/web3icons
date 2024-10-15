import { confirm } from '@inquirer/prompts'

import { getShortName, getChainId, getNativeCoinId, getMarketCapRank } from './icon-add-prompts'
import { INetworkMetadata, ITokenMetadata, TType, TMetadata } from '@web3icons/common'

const hasMissingFields = (metadata: TMetadata, type: TType): TMetadata | false => {
  if (type === 'network') {
    const network = metadata as INetworkMetadata
    if (
      network.shortName === undefined ||
      network.chainId === undefined ||
      network.nativeCoinId === undefined
    ) {
      return metadata
    } else return false
  }
  if (type === 'token') {
    const token = metadata as ITokenMetadata
    if (token.marketCapRank === null || token.marketCapRank === undefined) {
      return metadata
    } else return false
  }

  return false
}

const promptForMissingFields = async (metadata: TMetadata, type: TType): Promise<TMetadata> => {
  if (type === 'network') {
    const network = metadata as INetworkMetadata

    if (
      network.shortName === undefined ||
      network.chainId === undefined ||
      network.nativeCoinId === undefined
    ) {
      const missingFieldNames = Object.entries(metadata).find((a) => {
        if (a[1] === undefined) {
          return a[0]
        }
      })
      console.log(`⚠️ missing: ${missingFieldNames} for ${metadata.name}`)
    }

    if (network.shortName === undefined) {
      network.shortName = await getShortName()
    }
    if (network.chainId === undefined) {
      network.chainId = await getChainId()
    }
    if (network.nativeCoinId === undefined) {
      network.nativeCoinId = await getNativeCoinId()
    }
  }
  if (type === 'token') {
    if ((metadata as ITokenMetadata).marketCapRank === null) {
      ;(metadata as ITokenMetadata).marketCapRank =
        (await getMarketCapRank('This field ranks the token by market capitalization.')) ?? null
    }
  }
  // Assuming all wallet metadata fields are required, no need for additional prompts.
  return metadata
}

export const confirmTheMetadata = async ({
  type,
  metadata,
}: {
  type: TType
  metadata: TMetadata
}): Promise<TMetadata | false> => {
  if (hasMissingFields(metadata, type)) {
    const updatedMetadata = await promptForMissingFields(metadata, type)
    const confirmed = await confirm({
      message: `Do you want to add ${updatedMetadata.name} to the metadata?\n\n${JSON.stringify(updatedMetadata, null, 2)}`,
    })
    return confirmed ? updatedMetadata : false
  }
  return metadata
}
