import { input, select, confirm } from '@inquirer/prompts'
import {
  INetworkMetadata,
  INetworkRaw,
  ITokenMetadata,
  ITokenRaw,
  IWalletRaw,
  TType,
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
    const manualMetadata = await addManualMetadata(type)

    return {
      ...manualMetadata,
      symbol: (rawMetadata[0] as ITokenRaw).symbol ?? undefined,
    }
  }

  return answer
}

export const addManualMetadata = async (
  type: TType,
): Promise<INetworkRaw | ITokenRaw | IWalletRaw> => {
  const id = await input({
    message: 'id',
    required: true,
    validate: (value) => value.match(/^[a-z0-9]+(?:-[a-z0-9]+)*$/) !== null,
  })

  const name = await input({
    message: 'name',
    required: true,
    validate: (value) => value.length > 0,
  })

  const getSymbol = async () => {
    const answer = await input({
      message: 'symbol',
      validate: (value) => value.length > 0,
    })
    return answer.trim()
  }

  const getMarketCapRank = async () => {
    const answer = await input({
      message: 'marketCapRank',
      validate: (value) => value.match(/^[0-9]+$/) !== null,
    })
    return parseInt(answer)
  }

  const getShortName = async () => {
    const answer = await input({
      message: 'shortName',
    })
    return answer.trim() || undefined
  }

  const getNativeCoinId = async () => {
    const answer = await input({
      message: 'nativeCoinId',
    })
    return answer.trim() || undefined
  }

  switch (type) {
    case 'token':
      return {
        id: id.trim(),
        name: name.trim(),
        symbol: await getSymbol(),
        marketCapRank: await getMarketCapRank(),
      } as ITokenRaw
    case 'network':
      return {
        id: id.trim(),
        name: name.trim(),
        shortname: await getShortName(),
        native_coin_id: await getNativeCoinId(),
      } as INetworkRaw
    case 'wallet':
      return {
        id: id.trim(),
        name: name.trim(),
      } as IWalletRaw
    default:
      throw new Error('Invalid type')
  }
}
