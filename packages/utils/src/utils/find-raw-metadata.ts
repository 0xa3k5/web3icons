import fs from 'fs'
import { IExchangeRaw, INetworkRaw, ITokenRaw, IWalletRaw, TRaw, TType } from '@web3icons/common'
import { findByFileName } from './find-metadata-by-name'
import { WALLETS_METADATA_PATH, EXCHANGES_METADATA_PATH } from '../constants'
import _geckoNetworks from '../gecko/gecko-networks.json'
import _geckoCoins from '../gecko/gecko-coins.json'
import _customTokens from '../gecko/custom-tokens.json'
import _customNetworks from '../gecko/custom-networks.json'

/**
 * Finds the raw data for a given name and type (tokens or networks)
 * @param name Name of the data to find
 * @param type Type of the data to find (tokens, networks, or wallets)
 * @returns Raw data for the given name and type
 */
export const findRawData = (name: string, type: TType): TRaw[] | undefined => {
  if (type === 'token') {
    const geckoCoin = findByFileName(type, name, _geckoCoins as ITokenRaw[])
    const customCoin = findByFileName(type, name, _customTokens as ITokenRaw[])

    return customCoin ?? geckoCoin
  } else if (type === 'network') {
    const geckoNetworks = findByFileName(type, name, _geckoNetworks as INetworkRaw[])
    const customNetworks = findByFileName(type, name, _customNetworks as INetworkRaw[])

    return customNetworks ?? geckoNetworks
  } else if (type === 'wallet') {
    const walletsMetadata = JSON.parse(fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'))
    const customWallets = findByFileName(type, name, walletsMetadata as IWalletRaw[])

    return customWallets
  } else if (type === 'exchange') {
    const exchangesMetadata = JSON.parse(fs.readFileSync(EXCHANGES_METADATA_PATH, 'utf-8'))
    const customExchanges = findByFileName(type, name, exchangesMetadata as IExchangeRaw[])

    return customExchanges
  }
}
