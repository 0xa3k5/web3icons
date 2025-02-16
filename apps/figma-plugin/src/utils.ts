import { svgs } from '@web3icons/core'
import { SvgIcon } from './types'
import { TType, TVariant } from '@web3icons/common'

export function filterIcons(
  searchKey: string,
  type: TType,
  variant: TVariant,
): SvgIcon[] {
  const _type = `${type}s` as keyof typeof svgs
  const _variant = variant as keyof (typeof svgs)[typeof _type]

  const iconModules = Object.entries(svgs[_type][_variant]).map(
    ([exportName, module]) => {
      const name = exportName
        .replace(/^(Network|Token|Exchange)(Mono|Branded|Background)/, '')
        .toLowerCase()

      const svgContent = (module as { default: string }).default

      return {
        name,
        svg: svgContent,
      }
    },
  )

  // Filter by search key if provided
  if (searchKey) {
    return iconModules.filter((icon) =>
      icon.name.toLowerCase().includes(searchKey.toLowerCase()),
    )
  }

  return iconModules
}
