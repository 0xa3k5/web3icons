import * as fs from 'fs'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  ROOT_CORE,
} from '../../constants'
import { INetworkMetadata, ITokenMetadata, IWalletMetadata } from '../../types'
import * as path from 'path'

const mapTokensToMetadata = (): ITokenMetadata[] => {
  const rawTokens: any[] = JSON.parse(
    fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'),
  )

  return rawTokens.map((raw) => {
    const token: ITokenMetadata = {
      id: raw.id,
      name: raw.name,
      symbol: raw.symbol,
      marketCapRank: raw.marketCapRank,
      variants: raw.variants,
      addresses: raw.addresses,
    }
    return token
  })
}

const mapNetworksToMetadata = (): INetworkMetadata[] => {
  const rawNetworks: any[] = JSON.parse(
    fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'),
  )

  return rawNetworks.map((raw) => {
    const network: INetworkMetadata = {
      id: raw.id,
      name: raw.name,
      shortname: raw.shortname,
      nativeCoinId: raw.native_coin_id,
      chainId: raw.chain_identifier ?? raw.chainId,
      variants: raw.variants,
    }
    return network
  })
}

const mapWalletsToMetadata = (): IWalletMetadata[] => {
  const rawWallets: any[] = JSON.parse(
    fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'),
  )
  return rawWallets.map((raw) => {
    const wallet: IWalletMetadata = {
      id: raw.id,
      name: raw.name,
      variants: raw.variants,
    }
    return wallet
  })
}

export function generateMetadata() {
  const tokens = mapTokensToMetadata()
  const networks = mapNetworksToMetadata()
  const wallets = mapWalletsToMetadata()

  const METADATA_DIR = path.join(ROOT_CORE, 'src/metadata')

  const tokenContent = `import { ITokenMetadata } from '../types'\n\nexport const tokens: ITokenMetadata[] = ${JSON.stringify(tokens, null, 2)}`
  const networkContent = `import { INetworkMetadata } from '../types'\n\nexport const networks: INetworkMetadata[] = ${JSON.stringify(networks, null, 2)}`
  const walletContent = `import { IWalletMetadata } from '../types'\n\nexport const wallets: IWalletMetadata[] = ${JSON.stringify(wallets, null, 2)}`

  fs.writeFileSync(path.join(METADATA_DIR, 'tokens.ts'), tokenContent)
  console.log('✔ generated tokens metadata')
  fs.writeFileSync(path.join(METADATA_DIR, 'networks.ts'), networkContent)
  console.log('✔ generated networks metadata')
  fs.writeFileSync(path.join(METADATA_DIR, 'wallets.ts'), walletContent)
  console.log('✔ generated wallets metadata')

  const indexContent = `export { tokens } from './tokens'\nexport { networks } from './networks'\nexport { wallets } from './wallets'`
  fs.writeFileSync(path.join(METADATA_DIR, 'index.ts'), indexContent)
  console.log('✔ generated metadata index file')
}
