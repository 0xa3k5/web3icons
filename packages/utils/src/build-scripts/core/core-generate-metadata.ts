import * as fs from 'fs'
import {
  TOKENS_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  WALLETS_METADATA_PATH,
  ROOT_CORE,
} from '../../constants'
import { INetworkMetadata, ITokenMetadata, IWalletMetadata } from '../../types'
import * as path from 'path'

export function generateMetadataTs() {
  const tokens: ITokenMetadata[] = JSON.parse(fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'))
  const networks: INetworkMetadata[] = JSON.parse(fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'))
  const wallets: IWalletMetadata[] = JSON.parse(fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'))

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
