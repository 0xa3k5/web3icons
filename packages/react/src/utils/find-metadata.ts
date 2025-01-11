import { toKebabCase } from './naming-conventions'
import { IExchangeMetadata } from '../../../common/dist/types'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  networks,
  tokens,
  wallets,
  exchanges,
} from '@web3icons/common'

/**
 * Finds a metadata object based on the provided search criteria.
 *
 * @param metadata - The array of metadata objects to search.
 * @param searchCriteria - The search criteria to use.
 * @returns The metadata object if found, otherwise undefined.
 */
const findMetadata = <T>(
  metadata: T[],
  searchCriteria: { [key: string]: any },
): T | undefined => {
  return metadata.find((item) => {
    return Object.keys(searchCriteria).some((key) => {
      const value = searchCriteria[key]
      if (value === undefined) return false
      if (typeof value === 'object') {
        return Object.entries(value).every(
          ([k, v]) => (item[key as keyof T] as any)?.[k] === v,
        )
      }
      if (typeof value === 'string') {
        const itemValue = item[key as keyof T]
        return (
          typeof itemValue === 'string' &&
          itemValue.toLowerCase() === value.toLowerCase()
        )
      } else {
        return item[key as keyof T] === value
      }
    })
  })
}

/**
 * Finds a wallet metadata object based on the provided wallet name or ID.
 *
 * @param wallet - The wallet name or ID to search for.
 * @returns The wallet metadata object if found, otherwise undefined.
 */
export const findWallet = ({
  wallet,
}: {
  wallet: string
}): IWalletMetadata | undefined => {
  return findMetadata(wallets, { id: toKebabCase(wallet), name: wallet })
}

/**
 * Finds a token metadata object based on the provided symbol or address and network.
 *
 * @param symbol - The token symbol to search for.
 * @param address - The token address to search for.
 * @param network - The network to search the address on.
 * @returns The token metadata object if found, otherwise undefined.
 */
export const findToken = ({
  symbol,
  address,
  network,
}: {
  symbol?: string
  address?: string
  network?: string
}): ITokenMetadata | undefined => {
  if (symbol) {
    return findMetadata(tokens, { symbol })
  } else if (address && network) {
    return findMetadata(tokens, { addresses: { [network]: address } })
  }
  return undefined
}

/**
 * Finds a network metadata object based on the provided network name or chain ID.
 *
 * @param network - The network name to search for.
 * @param chainId - The chain ID to search for.
 * @returns The network metadata object if found, otherwise undefined.
 */
export const findNetwork = ({
  network,
  chainId,
}: {
  network?: string
  chainId?: number | string
}): INetworkMetadata | undefined => {
  if (network) {
    return findMetadata(networks, {
      id: toKebabCase(network),
      name: network,
      shortName: network,
    })
  }
  if (chainId) {
    return findMetadata(networks, { chainId })
  }
  return undefined
}

/**
 * Finds an exchange metadata object based on the provided exchange name or ID.
 *
 * @param name - The exchange name to search for.
 * @param id - The exchange ID to search for.
 * @returns The exchange metadata object if found, otherwise undefined.
 */
export const findExchange = ({
  name,
  id,
}: {
  name?: string
  id?: string
}): IExchangeMetadata | undefined => {
  if (id) {
    return findMetadata(exchanges, { id: toKebabCase(id), name: id })
  }
  if (name) {
    return findMetadata(exchanges, { id: toKebabCase(name), name })
  }
}
