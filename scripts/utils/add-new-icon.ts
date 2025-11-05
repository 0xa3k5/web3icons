import { text, confirm, select } from '@clack/prompts'
import {
  IExchangeMetadata,
  INetworkMetadata,
  ITokenMetadata,
  TMetadata,
  TType,
  TVariant,
  tokens,
} from '../../packages/common/src'
import {
  confirmAndAddMetadata,
  renameIconFiles,
  deleteUnusedSvgFiles,
  validateFilePath,
} from './'
import { duplicateIconsToType } from './duplicate-icons-to-type'

const ID_PATTERNS = {
  token: /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/,
  default: /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
}

export const addNewIcon = async (
  icon: [string, { type: TType; variants: TVariant[] }],
): Promise<void> => {
  const [fileName, { type, variants }] = icon
  const {
    id,
    name,
    fileName: finalFileName,
  } = await getBaseMetadata(fileName, type, variants)
  const metadata: TMetadata = { id, name, variants, filePath: finalFileName }

  const metadataHandlers = {
    network: () =>
      handleNetworkMetadata(id, name, metadata as INetworkMetadata),
    token: () => handleTokenMetadata(id, name, metadata as ITokenMetadata),
    exchange: () => handleExchangeMetadata(metadata as IExchangeMetadata),
    wallet: () => Promise.resolve(), // No additional metadata needed
  }

  const handler = metadataHandlers[type]
  if (!handler) throw new Error(`Unsupported icon type: ${type}`)
  await handler()
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
  const isPresetReference = fileName.includes(':')

  const id = (await text({
    message: `Enter ID for the new ${type} entry`,
    placeholder: isPresetReference ? '' : fileName,
    validate: (value) => {
      const pattern = type === 'token' ? ID_PATTERNS.token : ID_PATTERNS.default
      return !pattern.test(value)
        ? `ID must be in kebab-case format${type === 'token' ? ' with alphanumeric characters' : ''}`
        : undefined
    },
  })) as string

  let currentFileName = fileName
  if (id !== fileName && type !== 'token' && !isPresetReference) {
    const shouldRename = await confirm({
      message: `the file name must match the ID. Rename the file from "${fileName}" to "${id}"?`,
    })

    if (shouldRename) {
      renameIconFiles(fileName, id, variants, type)
      currentFileName = id
    } else {
      return {
        id: fileName,
        name: createHumanReadableName(fileName),
        fileName: `${type}:${fileName}`,
      }
    }
  }

  if (isPresetReference) {
    currentFileName = fileName.split(':')[1]!
  }

  const name = (await text({
    message: `Enter name for "${id}" (human readable)`,
    placeholder: createHumanReadableName(id),
    validate: (value) => (value.length > 0 ? undefined : 'name is required'),
  })) as string

  let iconFileName = `${type}:${currentFileName}`

  if (!isPresetReference) {
    const useExistingIcon = await confirm({
      message: 'Use an existing icon instead of creating new files?',
      initialValue: false,
    })

    if (useExistingIcon) {
      const iconReference = (await text({
        message: 'Enter icon reference (format: type:name)',
        placeholder: `${type}:${currentFileName}`,
        validate: (value) => {
          if (!value) return 'Icon reference is required'
          const parts = value.split(':')
          if (parts.length !== 2) {
            return 'Invalid format. Use "type:name" (e.g., "network:ethereum", "token:usdc")'
          }
          const validTypes = ['network', 'token', 'wallet', 'exchange']
          if (!validTypes.includes(parts[0]!)) {
            return `Invalid type. Must be one of: ${validTypes.join(', ')}`
          }
          const validation = validateFilePath(value, variants)
          if (!validation.valid) {
            return validation.error
          }
          return undefined
        },
      })) as string
      iconFileName = iconReference

      deleteUnusedSvgFiles(fileName, type, variants)
    }
  } else {
    // Use the preset reference from --metadata-only mode
    iconFileName = fileName
  }

  return { id, name, fileName: iconFileName }
}

const handleNetworkMetadata = async (
  id: string,
  name: string,
  metadata: INetworkMetadata,
): Promise<void> => {
  metadata.shortName = (await text({
    message: `Short name for "${name}"`,
    placeholder: name,
    validate: (value) =>
      value.length > 0 ? undefined : 'Short name is required',
  })) as string

  const chainId = (await text({
    message: `Chain ID for "${name}" (optional)`,
    placeholder: '',
  })) as string
  metadata.chainId = chainId ? parseInt(chainId) : undefined

  const caip2id = (await text({
    message: `CAIP-2 ID for "${name}" (optional)`,
    placeholder: chainId ? `eip155:${chainId}` : '',
  })) as string | undefined

  metadata.caip2id = caip2id || (chainId ? `eip155:${chainId}` : undefined)

  const nativeCoinId = (await text({
    message: `Native coin symbol for "${name}" (optional)`,
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
        duplicateIconsToType(
          metadata.filePath,
          tokenFileName,
          metadata.variants,
          'network',
          'token',
        )

        // Create token metadata
        const tokenMetadata: ITokenMetadata = {
          id: tokenFileName,
          name: metadata.name,
          variants: metadata.variants,
          filePath: metadata.filePath,
          symbol: nativeCoinId.toUpperCase(),
          marketCapRank: 0,
          addresses: {},
        }

        // Get additional token metadata
        await handleTokenMetadata(tokenFileName, metadata.name, tokenMetadata)
        await confirmAndAddMetadata(tokenMetadata, 'token')
      }
    }
  }
}

const handleTokenMetadata = async (
  id: string,
  name: string,
  metadata: ITokenMetadata,
): Promise<void> => {
  const symbol = (await text({
    message: `Symbol for "${name}"`,
    placeholder: id.toUpperCase(),
    validate: (value) =>
      value !== value.toUpperCase() ? 'Symbol must be uppercase' : undefined,
  })) as string

  if (symbol.toLowerCase() !== id.toLowerCase()) {
    const shouldRename = await confirm({
      message: `Token file names must match their symbol. Rename the file from "${id}" to "${symbol.toLowerCase()}"?`,
    })

    if (shouldRename) {
      renameIconFiles(id, symbol.toLowerCase(), metadata.variants, 'token')
      metadata.id = symbol.toLowerCase()
    }
  }

  metadata.symbol = symbol
  const marketCapRank = await text({
    message: `Market cap rank for "${name}" (optional)`,
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
      message:
        'Enter the network name (e.g. ethereum, binance-smart-chain, polygon-pos)',
      validate: (value) =>
        value.length > 0 ? undefined : 'Network name is required',
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

const handleExchangeMetadata = async (
  metadata: IExchangeMetadata,
): Promise<void> => {
  const exchangeType = await select({
    message: `Type of the ${metadata.id}`,
    options: [
      { value: 'cex', label: 'CEX (Centralized Exchange)' },
      { value: 'dex', label: 'DEX (Decentralized Exchange)' },
    ],
  })
  metadata.type = exchangeType as 'cex' | 'dex'
}
