import {
  IExchangeMetadata,
  INetworkMetadata,
  ITokenMetadata,
  TMetadata,
  TType,
} from '@web3icons/common'

export const generateTypeDescription = (
  type: TType,
  metadata: TMetadata,
): string => {
  const variants = (metadata as TMetadata).variants.join(', ')
  let description = `${metadata.name} icons in SVG and React. Perfect for web3 applications with ${variants} variants.`
  switch (type) {
    case 'token':
      description = `${(metadata as ITokenMetadata).name} (${(metadata as ITokenMetadata).symbol?.toUpperCase() || (metadata as ITokenMetadata).id.toUpperCase()}) crypto icons as SVG or React components for your web3 project. Available in ${variants} variants.`
      break
    case 'network':
      description = `${metadata.name} blockchain icons ${(metadata as INetworkMetadata).chainId ? `with chain id ${(metadata as INetworkMetadata).chainId}` : ''} in SVG and React formats. Perfect for web3 applications with ${variants} variants.`
      break
    case 'wallet':
      description = `${metadata.name} Wallet icons for crypto and web3 apps. Free SVG and React components in ${variants} variants.`
      break
    case 'exchange':
      description = `${metadata.name} ${(metadata as IExchangeMetadata).type.toUpperCase()} icons in SVG and React. Optimized for crypto and web3 applications with ${variants} variants.`
      break
  }
  return description
}
