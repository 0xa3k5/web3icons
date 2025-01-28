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
 * @param id - The wallet ID to search for.
 * @param name - The wallet name to search for.
 * @returns The wallet metadata object if found, otherwise undefined.
 */
export const findWallet = ({
  id,
  name,
}: {
  id?: string
  name?: string
}): IWalletMetadata | undefined => {
  if (id) {
    return findMetadata(wallets, { id: toKebabCase(id), name: id })
  }
  if (name) {
    return findMetadata(wallets, { id: toKebabCase(name), name })
  }
  return undefined
}

/**
 * Finds a token metadata object based on the provided symbol or address and network.
 *
 * @param id - The token ID to search for.
 * @param name - The token name to search for.
 * @param symbol - The token symbol to search for.
 * @param address - The token address to search for.
 * @param network - The network to search the address on.
 * @returns The token metadata object if found, otherwise undefined.
 */
export const findToken = ({
  id,
  name,
  symbol,
  address,
  network,
}: {
  id?: string
  name?: string
  symbol?: string
  address?: string
  network?: string
}): ITokenMetadata | undefined => {
  if (id) {
    return findMetadata(tokens, { id })
  }
  if (name) {
    return findMetadata(tokens, { name })
  }
  if (symbol) {
    return findMetadata(tokens, { symbol })
  }
  if (address && network) {
    return findMetadata(tokens, { addresses: { [network]: address } })
  }
  return undefined
}

/**
 * Finds a network metadata object based on the provided network name or chain ID.
 *
 * @param id - The network ID to search for.
 * @param name - The network name to search for.
 * @param chainId - The chain ID to search for.
 * @param caip2id - The CAIP-2 ID to search for.
 * @returns The network metadata object if found, otherwise undefined.
 */
export const findNetwork = ({
  id,
  name,
  chainId,
  caip2id,
}: {
  id?: string
  name?: string
  chainId?: number | string
  caip2id?: string
}): INetworkMetadata | undefined => {
  if (name) {
    return findMetadata(networks, {
      id: toKebabCase(name),
      name,
      shortName: name,
    })
  }
  if (chainId) {
    return findMetadata(networks, { chainId })
  }
  if (caip2id) {
    return findMetadata(networks, { caip2id })
  }
  if (id) {
    return findMetadata(networks, { id: toKebabCase(id), name: id })
  }
  return undefined
}

/**
 * Finds an exchange metadata object based on the provided exchange name or ID.
 *
 * @param id - The exchange ID to search for.
 * @param name - The exchange name to search for.
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
