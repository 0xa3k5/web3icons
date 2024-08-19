import { confirm } from '@inquirer/prompts'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
} from '../../types'
import {
  getShortName,
  getChainId,
  getNativeCoinId,
  getMarketCapRank,
} from './icon-add-prompts'

type Metadata = INetworkMetadata | ITokenMetadata | IWalletMetadata

const promptForMissingFields = async (
  metadata: Metadata,
  type: TType,
): Promise<Metadata> => {
  const updatedMetadata = { ...metadata }

  if (type === 'network') {
    if (
      (updatedMetadata as INetworkMetadata).shortname === undefined ||
      (updatedMetadata as INetworkMetadata).chainId === undefined ||
      (updatedMetadata as INetworkMetadata).nativeCoinId === undefined
    ) {
      console.log(
        `⚠️ some fields are missing for ${updatedMetadata.name}\n\n${JSON.stringify(updatedMetadata, null, 2)}`,
      )
    }

    if ((updatedMetadata as INetworkMetadata).shortname === undefined) {
      ;(updatedMetadata as INetworkMetadata).shortname = await getShortName()
    }
    if ((updatedMetadata as INetworkMetadata).chainId === undefined) {
      ;(updatedMetadata as INetworkMetadata).chainId = await getChainId()
    }
    if ((updatedMetadata as INetworkMetadata).nativeCoinId === undefined) {
      ;(updatedMetadata as INetworkMetadata).nativeCoinId =
        await getNativeCoinId()
    }
  }

  if (type === 'token') {
    if ((updatedMetadata as ITokenMetadata).marketCapRank === null) {
      ;(updatedMetadata as ITokenMetadata).marketCapRank =
        await getMarketCapRank(
          'This field ranks the token by market capitalization.',
        )
    }
  }

  // Assuming all wallet metadata fields are required, no need for additional prompts.
  return updatedMetadata
}

export const confirmTheMetadata = async ({
  type,
  metadata,
}: {
  type: TType
  metadata: Metadata
}): Promise<Metadata | false> => {
  const updatedMetadata = await promptForMissingFields(metadata, type)

  const confirmed = await confirm({
    message: `Do you want to add ${updatedMetadata.name} to the metadata?\n\n${JSON.stringify(updatedMetadata, null, 2)}`,
  })

  return confirmed ? updatedMetadata : false
}
