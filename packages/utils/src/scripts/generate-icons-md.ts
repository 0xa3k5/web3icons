import * as fs from 'fs'
import * as path from 'path'
import {
  EXCHANGES_METADATA_PATH,
  NETWORKS_METADATA_PATH,
  ROOT_PROJECT,
  TOKENS_METADATA_PATH,
  WALLETS_METADATA_PATH,
} from '../constants'
import {
  IExchangeMetadata,
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
} from '@web3icons/common'

const outputFilePath = path.join(ROOT_PROJECT, 'docs/icons.md')

const wallets = JSON.parse(fs.readFileSync(WALLETS_METADATA_PATH, 'utf8'))
const networks = JSON.parse(fs.readFileSync(NETWORKS_METADATA_PATH, 'utf8'))
const exchanges = JSON.parse(fs.readFileSync(EXCHANGES_METADATA_PATH, 'utf8'))
const tokens = JSON.parse(fs.readFileSync(TOKENS_METADATA_PATH, 'utf8'))

const generateTable = <T>(
  data: T[],
  tableHeader: string,
  tableContent: (item: T) => string,
): string => {
  let content = tableHeader
  data.forEach((item) => {
    content += tableContent(item) + '\n'
  })

  return content
}

const walletsTable = generateTable<IWalletMetadata>(
  wallets,
  '### Wallets\n\n| id | name | branded | mono |\n|----|------|---------|------|\n',
  (wallet) => {
    const brandedCheck = wallet.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = wallet.variants.includes('mono') ? '✅' : '❌'
    return `| ${wallet.id} | ${wallet.name} | ${brandedCheck} | ${monoCheck} |`
  },
)
const networksTable = generateTable<INetworkMetadata>(
  networks,
  '### Networks\n\n| id | name | branded | mono |\n|----|------|---------|------|\n',
  (network) => {
    const brandedCheck = network.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = network.variants.includes('mono') ? '✅' : '❌'
    return `| ${network.id} | ${network.name} | ${brandedCheck} | ${monoCheck} |`
  },
)
const exchangesTable = generateTable<IExchangeMetadata>(
  exchanges,
  '### Exchanges\n\n| id | name | type | branded | mono |\n|------|--------|---------|------|------|\n',
  (exchange) => {
    const brandedCheck = exchange.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = exchange.variants.includes('mono') ? '✅' : '❌'
    return `| ${exchange.id} | ${exchange.name} | ${exchange.type} | ${brandedCheck} | ${monoCheck} |`
  },
)
const tokensTable = generateTable<ITokenMetadata>(
  tokens,
  '### Tokens\n\n| name | symbol | branded | mono |\n|------|--------|---------|------|\n',
  (token) => {
    const brandedCheck = token.variants.includes('branded') ? '✅' : '❌'
    const monoCheck = token.variants.includes('mono') ? '✅' : '❌'
    return `| ${token.name} | ${token.symbol} | ${brandedCheck} | ${monoCheck} |`
  },
)

const iconsMd =
  `jump to section:\n
  - [wallets (${wallets.length})](#wallets)
  - [networks (${networks.length})](#networks)
  - [tokens (${exchanges.length})](#tokens)
  - [exchanges (${tokens.length})](#exchanges)\n\n` +
  `${walletsTable}\n\n` +
  `${networksTable}\n\n` +
  `${exchangesTable}\n\n` +
  `${tokensTable}`

fs.writeFileSync(outputFilePath, iconsMd)

console.log(
  `✅ generated icons.md (wallets: ${wallets.length}, networks: ${networks.length}, exchanges: ${exchanges.length} tokens: ${tokens.length})`,
)
