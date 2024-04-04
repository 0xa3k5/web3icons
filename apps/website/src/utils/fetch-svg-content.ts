export async function fetchSvgContent(
  iconName: string,
  variant: 'mono' | 'branded',
  type: 'tokens' | 'networks',
): Promise<string> {
  try {
    let svgModule
    if (type === 'tokens') {
      if (variant === 'mono') {
        svgModule = await import(
          `@token-icons/core/svgs/tokens/mono/${iconName}.svg`
        )
      } else if (variant === 'branded') {
        svgModule = await import(
          `@token-icons/core/svgs/tokens/branded/${iconName}.svg`
        )
      }
    } else if (type === 'networks') {
      if (variant === 'mono') {
        svgModule = await import(
          `@token-icons/core/svgs/networks/mono/${iconName}.svg`
        )
      } else if (variant === 'branded') {
        svgModule = await import(
          `@token-icons/core/svgs/networks/branded/${iconName}.svg`
        )
      }
    }

    if (!svgModule) {
      throw new Error('SVG module not found')
    }

    const response = await fetch(svgModule.default.src)
    return await response.text()
  } catch (err) {
    console.error(`Error fetching SVG ${iconName}:`, err)
    throw err
  }
}
