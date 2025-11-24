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
  if (dynamic) {
    const componentName = `${capitalize(type)}Icon`
    const usage = generateDynamicUsage({ metadata, type, variant, size, color })
    return `import { ${componentName} } from '@web3icons/react/dynamic'

export default function App() {
  return (
${usage}
  )
}`
  } else {
    const componentName = makeComponentName({ metadata, type })
    const usage = generateStaticUsage({ metadata, type, variant, size, color })
    return `import { ${componentName} } from '@web3icons/react'

export default function App() {
  return ${usage}
}`
  }
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
  const colorProp = variant === 'mono' ? ` color="${color}"` : ''

  if (type === 'token') {
    const tokenMetadata = metadata as ITokenMetadata
    const addresses = tokenMetadata.addresses
      ? Object.entries(tokenMetadata.addresses).filter(
          ([, address]) => address !== undefined,
        )
      : []

    const lines = [
      `    // By symbol`,
      `    <TokenIcon symbol="${tokenMetadata.symbol}" variant="${variant}" size={${size}}${colorProp} />`,
    ]

    if (addresses.length > 0) {
      addresses.forEach(([network, address]) => {
        lines.push(
          ``,
          `    // By address on ${network}`,
          `    <TokenIcon network="${network}" address="${address}" variant="${variant}" size={${size}}${colorProp} />`,
        )
      })
    }

    return lines.join('\n')
  }

  if (type === 'network') {
    return `    // By network ID
    <NetworkIcon network="${metadata.id}" variant="${variant}" size={${size}}${colorProp} />

    // By network name
    <NetworkIcon name="${metadata.name}" variant="${variant}" size={${size}}${colorProp} />`
  }

  if (type === 'wallet') {
    return `    // By wallet ID
    <WalletIcon id="${metadata.id}" variant="${variant}" size={${size}}${colorProp} />

    // By wallet name
    <WalletIcon name="${metadata.name}" variant="${variant}" size={${size}}${colorProp} />`
  }

  if (type === 'exchange') {
    return `    // By exchange ID
    <ExchangeIcon id="${metadata.id}" variant="${variant}" size={${size}}${colorProp} />

    // By exchange name
    <ExchangeIcon name="${metadata.name}" variant="${variant}" size={${size}}${colorProp} />`
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
  const componentName = makeComponentName({ metadata, type })
  const colorProp = variant === 'mono' ? ` color="${color}"` : ''
  return `<${componentName} variant="${variant}" size={${size}}${colorProp} />`
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
