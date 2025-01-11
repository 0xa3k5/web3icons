import * as fs from 'fs'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
  ROOT_COMMON,
} from '../constants'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  IExchangeMetadata,
} from '@web3icons/common'
import * as path from 'path'

export function generateMetadataTs() {
  const tokens: ITokenMetadata[] = JSON.parse(fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'))
  const networks: INetworkMetadata[] = JSON.parse(fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'))
  const wallets: IWalletMetadata[] = JSON.parse(fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'))
  // prettier-ignore
  const exchanges: IExchangeMetadata[] = JSON.parse(fs.readFileSync(EXCHANGES_METADATA_PATH, 'utf-8'))

  const tokenContent = `import { ITokenMetadata } from '../types'\n\nexport const tokens: ITokenMetadata[] = ${JSON.stringify(tokens, null, 2)}`
  const networkContent = `import { INetworkMetadata } from '../types'\n\nexport const networks: INetworkMetadata[] = ${JSON.stringify(networks, null, 2)}`
  const walletContent = `import { IWalletMetadata } from '../types'\n\nexport const wallets: IWalletMetadata[] = ${JSON.stringify(wallets, null, 2)}`
  const exchangeContent = `import { IExchangeMetadata } from '../types'\n\nexport const exchanges: IExchangeMetadata[] = ${JSON.stringify(exchanges, null, 2)}`

  const METADATA_DIR = path.join(ROOT_COMMON, 'src/metadata')
  fs.writeFileSync(path.join(METADATA_DIR, 'tokens.ts'), tokenContent)
  console.log('common: ✔ tokens metadata')
  fs.writeFileSync(path.join(METADATA_DIR, 'networks.ts'), networkContent)
  console.log('common: ✔ networks metadata')
  fs.writeFileSync(path.join(METADATA_DIR, 'wallets.ts'), walletContent)
  console.log('common: ✔ wallets metadata')
  fs.writeFileSync(path.join(METADATA_DIR, 'exchanges.ts'), exchangeContent)
  console.log('common: ✔ exchanges metadata')

  const indexContent = `export { tokens } from './tokens'\nexport { networks } from './networks'\nexport { wallets } from './wallets'\nexport { exchanges } from './exchanges'`
  fs.writeFileSync(path.join(METADATA_DIR, 'index.ts'), indexContent)
  console.log('common: ✔ metadata index file')
}

generateMetadataTs()
