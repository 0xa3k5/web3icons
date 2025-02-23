import { text, confirm, select } from '@clack/prompts'
import {
  IExchangeMetadata,
  INetworkMetadata,
  ITokenMetadata,
  TMetadata,
  TType,
  TVariant,
  tokens,
} from '@web3icons/common'
import { confirmAndAddMetadata, renameIconFiles } from './'
import { duplicateIconsToType } from './duplicate-icons-to-type'

const ID_PATTERNS = {
  token: /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
  default: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
}

export const addNewIcon = async (
  icon: [string, { type: TType; variants: TVariant[] }],
): Promise<void> => {
  const [fileName, { type, variants }] = icon
  const { id, name, fileName: currentFileName } = await getBaseMetadata(fileName, type, variants)
  const metadata: TMetadata = { id, name, variants, fileName }

  const metadataHandlers = {
    network: () => handleNetworkMetadata(currentFileName, metadata as INetworkMetadata),
    token: () => handleTokenMetadata(currentFileName, metadata as ITokenMetadata),
    exchange: () => handleExchangeMetadata(metadata as IExchangeMetadata),
    wallet: () => Promise.resolve(), // No additional metadata needed
  }

  const handler = metadataHandlers[type]
  if (!handler) throw new Error(`Unsupported icon type: ${type}`)
  await handler()
  metadata.fileName = fileName
  await confirmAndAddMetadata(metadata, type)
}

const createHumanReadableName = (str: string): string =>
  str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

const getBaseMetadata = async (
  fileName: string,
  type: TType,
  variants: TVariant[],
): Promise<{ id: string; name: string; fileName: string }> => {
  const id = (await text({
    message: `Enter ID for the ${type}`,
    placeholder: fileName,
    validate: (value) => {
      const pattern = type === 'token' ? ID_PATTERNS.token : ID_PATTERNS.default
      return !pattern.test(value)
        ? `ID must be in kebab-case format${type === 'token' ? ' with alphanumeric characters' : ''}`
        : undefined
    },
  })) as string

  let currentFileName = fileName
  if (id !== fileName && type !== 'token') {
    const shouldRename = await confirm({
      message: `the file name must match the ID. Rename the file from "${fileName}" to "${id}"?`,
    })

    if (shouldRename) {
      renameIconFiles(fileName, id, variants, type)
      currentFileName = id
    } else {
      return { id: fileName, name: createHumanReadableName(fileName), fileName }
    }
  }

  const name = (await text({
    message: 'Enter name (human readable)',
    placeholder: createHumanReadableName(currentFileName),
    validate: (value) => (value.length > 0 ? undefined : 'short name is required'),
  })) as string

  return { id, name, fileName: currentFileName }
}

const handleNetworkMetadata = async (
  fileName: string,
  metadata: INetworkMetadata,
): Promise<void> => {
  metadata.shortName = (await text({
    message: `Short name of the ${fileName}`,
    placeholder: fileName,
    validate: (value) => (value.length > 0 ? undefined : 'Short name is required'),
  })) as string

  const chainId = (await text({
    message: `Chain ID of the ${fileName} (optional)`,
    placeholder: '',
  })) as string
  metadata.chainId = chainId ? parseInt(chainId) : undefined
  const caip2id = (await text({
    message: `CAIP2 ID of the ${fileName} (optional)`,
    placeholder: '',
  })) as string | undefined

  metadata.caip2id = caip2id ? caip2id : chainId ? `eip155:${chainId}` : undefined

  const nativeCoinId = (await text({
    message: `Native coin symbol of the ${fileName} (optional)`,
    placeholder: '',
  })) as string | undefined

  metadata.nativeCoinId = nativeCoinId

  if (nativeCoinId) {
    const matchingToken = tokens.find(
      (token) => token.symbol.toUpperCase() === nativeCoinId.toUpperCase(),
    )

    if (!matchingToken) {
      const shouldAddToken = await confirm({
        message: `No token icon found for symbol "${nativeCoinId}". Would you like to add token support using the same icon?`,
      })

      if (shouldAddToken) {
        // Copy and rename the network icon files to create token variants
        const tokenFileName = nativeCoinId.toUpperCase()
        duplicateIconsToType(fileName, tokenFileName, metadata.variants, 'network', 'token')

        // Create token metadata
        const tokenMetadata: ITokenMetadata = {
          id: tokenFileName,
          name: metadata.name,
          variants: metadata.variants,
          fileName: tokenFileName,
          symbol: nativeCoinId.toUpperCase(),
          marketCapRank: 0,
          addresses: {},
        }

        // Get additional token metadata
        await handleTokenMetadata(tokenFileName, tokenMetadata)
        await confirmAndAddMetadata(tokenMetadata, 'token')
      }
    }
  }
}

const handleTokenMetadata = async (fileName: string, metadata: ITokenMetadata): Promise<void> => {
  const symbol = (await text({
    message: `Symbol of the ${fileName}`,
    placeholder: fileName.toUpperCase(),
    validate: (value) => (value !== value.toUpperCase() ? 'Symbol must be uppercase' : undefined),
  })) as string

  if (symbol.toLowerCase() !== fileName.toLowerCase()) {
    const shouldRename = await confirm({
      message: `token file names must match their symbol. Rename the file from "${fileName}" to "${symbol.toLowerCase()}"?`,
    })

    if (shouldRename) {
      renameIconFiles(fileName, symbol.toLowerCase(), metadata.variants, 'token')
      metadata.id = symbol.toLowerCase()
    }
  }

  metadata.symbol = symbol
  const marketCapRank = await text({
    message: `Market cap rank of the ${fileName} (optional)`,
    placeholder: '',
  })
  metadata.marketCapRank = marketCapRank ? parseInt(marketCapRank as string) : 0

  metadata.addresses = {}

  while (true) {
    const addAddress = await confirm({
      message: 'Would you like to add a contract address for a network?',
    })

    if (!addAddress) break

    const network = (await text({
      message: 'Enter the network name (e.g. ethereum, binance-smart-chain, polygon-pos)',
      validate: (value) => (value.length > 0 ? undefined : 'Network name is required'),
    })) as string

    const address = (await text({
      message: `Enter the contract address for ${network}`,
      validate: (value) => {
        if (value.length === 0) return 'Contract address is required'
        return undefined
      },
    })) as string

    metadata.addresses[network] = address
  }
}

const handleExchangeMetadata = async (metadata: IExchangeMetadata): Promise<void> => {
  const exchangeType = await select({
    message: `Type of the ${metadata.id}`,
    options: [
      { value: 'cex', label: 'CEX (Centralized Exchange)' },
      { value: 'dex', label: 'DEX (Decentralized Exchange)' },
    ],
  })
  metadata.type = exchangeType as 'cex' | 'dex'
}
