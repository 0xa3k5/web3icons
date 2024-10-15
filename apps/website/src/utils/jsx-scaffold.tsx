import { ITokenMetadata, TMetadata, TType, TVariant } from '@web3icons/common'

export function scaffoldComponent({
  metadata,
  type,
  variant,
  dynamic,
}: {
  metadata: TMetadata
  type: TType
  variant: TVariant
  dynamic: boolean
}) {
  let importStatement = `import { {{Web3Icon}} } from '@web3icons/react'\n`

  let returnStatement = `export default function App(): JSX.Element {
    return (
      <>
        {{returnStatement}}
      </>
    );
  }`

  if (dynamic) {
    importStatement = importStatement.replace(
      '{{Web3Icon}}',
      `${capitalize(type)}Icon`,
    )
    returnStatement = returnStatement.replace(
      '{{returnStatement}}',
      generateDynamicUsage(metadata, type, variant),
    )
  } else {
    importStatement = importStatement.replace(
      '{{Web3Icon}}',
      makeComponentName(metadata, type),
    )
    returnStatement = returnStatement.replace(
      '{{returnStatement}}',
      generateStaticUsage(metadata, type, variant),
    )
  }

  return `${importStatement}\n${returnStatement}`
}

const generateDynamicUsage = (
  metadata: TMetadata,
  type: TType,
  variant: TVariant,
) => {
  if (type === 'token') {
    const tokenMetadata = metadata as ITokenMetadata
    const addresses = tokenMetadata.addresses
      ? Object.entries(tokenMetadata.addresses).filter(
          ([, address]) => address !== undefined,
        )
      : []

    const additional =
      addresses.length > 0
        ? `\n        {/* or */}\n` +
          addresses
            .map(
              ([network, address]) =>
                `        <TokenIcon network="${network}" address="${address}" variant="${variant}" />`,
            )
            .join('\n        {/* or */}\n')
        : ''

    return (
      `{/* token symbol */}\n` +
      `        <TokenIcon symbol="${tokenMetadata.symbol}" variant="${variant}" />` +
      additional
    )
  }

  if (type === 'network') {
    return (
      `{/* network id */}\n` +
      `        <NetworkIcon network="${metadata.id}" variant="${variant}" />\n` +
      `        {/* network name */}\n` +
      `        <NetworkIcon id="${metadata.name}" variant="${variant}" />`
    )
  }

  if (type === 'wallet') {
    return (
      `{/* wallet id */}\n` +
      `        <WalletIcon id="${metadata.id}" variant="${variant}" />\n` +
      `        {/* wallet name */}\n` +
      `        <WalletIcon name="${metadata.name}" variant="${variant}" />`
    )
  }

  return ''
}

const generateStaticUsage = (
  metadata: TMetadata,
  type: TType,
  variant: TVariant,
) => {
  return `<${makeComponentName(metadata, type)} variant="${variant}" />`
}

const makeComponentName = (metadata: TMetadata, type: TType) => {
  if (type === 'token') {
    return `Token${(metadata as ITokenMetadata).symbol.toUpperCase()}`
  } else if (type === 'network') {
    return `Network${toPascalCase(metadata.id)}`
  } else if (type === 'wallet') {
    return `Wallet${toPascalCase(metadata.id)}`
  } else {
    throw new Error('Invalid type')
  }
}

const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z0-9]+/gi) || []
  return words
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    )
    .join('')
}

const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
