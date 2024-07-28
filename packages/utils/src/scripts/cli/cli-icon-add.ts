import { input, select, confirm } from '@inquirer/prompts'
import {
  INetworkMetadata,
  INetworkRaw,
  ITokenMetadata,
  ITokenRaw,
} from '../../types'

export const confirmTheMetadata = async (
  metadata: INetworkMetadata | ITokenMetadata,
) => {
  return await confirm({
    message: `Do you want to add ${metadata.name} to the metadata?\n\n${JSON.stringify(metadata, null, 2)}`,
  })
}

export const getUserInputSlug = async (fileName: string) => {
  return await input({
    message: `Please enter the gecko api id of the network/token for ${fileName}`,
  })
}

export const selectAMetadata = async (
  rawMetadata: INetworkRaw[] | ITokenRaw[],
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
    const manualMetadata = await addManualMetadata()

    return {
      ...manualMetadata,
      symbol: (rawMetadata[0] as ITokenRaw).symbol ?? undefined,
    }
  }

  return answer
}

export const addManualMetadata = async (): Promise<INetworkRaw | ITokenRaw> => {
  const id = await input({
    message: 'id',
    validate: (value) => value.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) !== null,
  })
  const name = await input({
    message: 'name',
    validate: (value) => value.length > 0,
  })

  return { id, name }
}
