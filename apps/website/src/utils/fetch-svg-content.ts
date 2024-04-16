import { networks, tokens } from '@token-icons/core/metadata'

/**
 *
 * @param icon pass icon to fetch
 * @param variant mono or branded
 * @param type tokens or networks
 * @returns svg content
 */
export async function fetchSvgContent(
  icon: string,
  variant: 'mono' | 'branded',
  type: 'tokens' | 'networks',
): Promise<string> {
  const name = getName(icon, type)
  try {
    let svgModule
    if (type === 'tokens') {
      if (variant === 'mono') {
        svgModule = await import(
          `@token-icons/core/svgs/tokens/mono/${name}.svg`
        )
      } else if (variant === 'branded') {
        svgModule = await import(
          `@token-icons/core/svgs/tokens/branded/${name}.svg`
        )
      }
    } else if (type === 'networks') {
      if (variant === 'mono') {
        svgModule = await import(
          `@token-icons/core/svgs/networks/mono/${name}.svg`
        )
      } else if (variant === 'branded') {
        svgModule = await import(
          `@token-icons/core/svgs/networks/branded/${name}.svg`
        )
      }
    }

    if (!svgModule) {
      throw new Error('SVG module not found')
    }

    const response = await fetch(svgModule.default.src)
    return await response.text()
  } catch (err) {
    console.error(`Error fetching SVG ${name}:`, err)
    throw err
  }
}

const getName = (icon: string, type: 'tokens' | 'networks') => {
  const iconName =
    type === 'tokens'
      ? icon.replace('Token', '').toLocaleUpperCase()
      : icon.replace('Network', '').toLocaleLowerCase()

  const token = tokens.find(
    (t) => t.symbol.toLocaleLowerCase() === iconName.toLocaleLowerCase(),
  )

  const network = networks.find(
    (n) =>
      n.id?.toLocaleLowerCase() === iconName.toLocaleLowerCase() ||
      n.name.toLocaleLowerCase() === iconName.toLocaleLowerCase(),
  )

  const name =
    type === 'tokens'
      ? token?.symbol.toLocaleUpperCase()
      : network?.name.toLocaleLowerCase()

  return name ?? null
}
