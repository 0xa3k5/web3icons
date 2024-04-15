/**
 *
 * @param name pass ticker for tokens as uppercase and kebab-case name for networks
 * @param variant mono or branded
 * @param type tokens or networks
 * @returns svg content
 */
export async function fetchSvgContent(
  name: string,
  variant: 'mono' | 'branded',
  type: 'tokens' | 'networks',
): Promise<string> {
  try {
    let svgModule
    console.log('fetchSvgContent', name, variant, type)
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
