import { ITokenMetadata, TMetadata, TType, TVariant } from '@web3icons/common'

export function scaffoldComponent({
  metadata,
  type,
  variant,
  size,
  color,
  dynamic = false,
}: {
  metadata: TMetadata
  type: TType
  variant: TVariant
  size: number
  color: string
  dynamic?: boolean
}) {
  let importStatement = `import { {{Web3Icon}} } from '@web3icons/react'\n`

  let returnStatement = `export default function App(): JSX.Element {
    return (
        {{returnStatement}}
    );
  }`

  if (dynamic) {
    importStatement = importStatement.replace(
      '{{Web3Icon}}',
      `${capitalize(type)}Icon`,
    )
    returnStatement = returnStatement.replace(
      '{{returnStatement}}',
      generateDynamicUsage({ metadata, type, variant, size, color }),
    )
  } else {
    importStatement = importStatement.replace(
      '{{Web3Icon}}',
      makeComponentName({ metadata, type }),
    )
    returnStatement = returnStatement.replace(
      '{{returnStatement}}',
      generateStaticUsage({ metadata, type, variant, size, color }),
    )
  }

  return `${importStatement}\n${returnStatement}`
}

const generateDynamicUsage = ({
  metadata,
  type,
  variant,
  size,
  color,
}: {
  metadata: TMetadata
  type: TType
  variant: TVariant
  size: number
  color: string
}) => {
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
                `        <TokenIcon network="${network}" address="${address}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>`,
            )
            .join('\n        {/* or */}\n')
        : ''

    return (
      `{/* token symbol */}\n` +
      `        <TokenIcon symbol="${tokenMetadata.symbol}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>` +
      additional
    )
  }

  if (type === 'network') {
    return (
      `{/* network id */}\n` +
      `        <NetworkIcon network="${metadata.id}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>\n` +
      `        {/* network name */}\n` +
      `        <NetworkIcon id="${metadata.name}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>`
    )
  }

  if (type === 'wallet') {
    return (
      `{/* wallet id */}\n` +
      `        <WalletIcon id="${metadata.id}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>\n` +
      `        {/* wallet name */}\n` +
      `        <WalletIcon name="${metadata.name}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>`
    )
  }
  if (type === 'exchange') {
    return (
      `{/* exchange id */}\n` +
      `        <ExchangeIcon id="${metadata.id}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>\n` +
      `        {/* exchange name */}\n` +
      `        <ExchangeIcon name="${metadata.name}" variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''}/>`
    )
  }

  return ''
}

const generateStaticUsage = ({
  metadata,
  type,
  variant,
  size,
  color,
}: {
  metadata: TMetadata
  type: TType
  variant: TVariant
  size: number
  color: string
}) => {
  return `<${makeComponentName({ metadata, type })} variant="${variant}" size="${size}" ${variant === 'mono' ? `color="${color}"` : ''} />`
}

const makeComponentName = ({
  metadata,
  type,
}: {
  metadata: TMetadata
  type: TType
}) => {
  const prefix = type.charAt(0).toUpperCase() + type.slice(1)
  const suffix =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol.toUpperCase()
      : toPascalCase(metadata.id)
  return `${prefix}${suffix}`
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
