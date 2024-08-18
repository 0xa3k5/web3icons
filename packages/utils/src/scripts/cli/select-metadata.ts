import { select } from '@inquirer/prompts'
import {
  INetworkRaw,
  ITokenRaw,
  IWalletRaw,
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
} from '../../types'
import { addManualMetadata } from './get-manual-metadata'

export const selectAMetadata = async (
  rawMetadata:
    | INetworkRaw[]
    | ITokenRaw[]
    | IWalletRaw[]
    | INetworkMetadata[]
    | ITokenMetadata[]
    | IWalletMetadata[],
  type: TType,
) => {
  const choices = rawMetadata.map((raw) => ({
    name: raw.name,
    description: `${JSON.stringify(raw, null, 2)}`,
    value: raw,
  }))

  const custom = {
    name: 'Other (custom metadata)',
    description: 'Please enter the metadata manually',
    value: null,
  }

  const answer = await select({
    message: 'We found multiple matches. Please select a metadata',
    choices: [...choices, custom],
  })

  if (answer === null) {
    return await addManualMetadata(type)
  }

  return answer
}
