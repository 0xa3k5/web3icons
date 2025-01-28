'use client'
import { ITokenMetadata, TVariant, TType, TMetadata } from '@web3icons/common'

interface Props {
  metadata: TMetadata
  variant: TVariant
  type: TType
}

export const fetchSvgContent = async ({ metadata, variant, type }: Props) => {
  let loading = true
  let error = null

  const fileName =
    type === 'token'
      ? (metadata as ITokenMetadata).symbol.toUpperCase()
      : metadata.id

  const data = await fetch(
    `https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/core/src/svgs/${type}s/${variant}/${fileName}.svg`,
  )
  const svg = await data.text()

  return { svg, error, loading }
}
