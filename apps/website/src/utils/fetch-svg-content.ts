import { TVariant, TMetadata } from '@web3icons/common'

interface Props {
  metadata: TMetadata
  variant: TVariant
}

export const fetchSvgContent = async ({ metadata, variant }: Props) => {
  let loading = true
  let error = null

  const [type, fileName] = metadata.filePath.split(':')

  const data = await fetch(
    `https://raw.githubusercontent.com/0xa3k5/web3icons/main/packages/core/src/svgs/${type}s/${variant}/${fileName}.svg`,
  )
  const svg = await data.text()

  return { svg, error, loading }
}
