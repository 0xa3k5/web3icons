/**
 * Convert SVG content to a base64 data URL string.
 * @param {string} svgContent - The SVG file content.
 * @return {string} - The base64 encoded data URL of the SVG.
 */
export const generateSVGDataURL = (svgContent: string): string => {
  const base64 = Buffer.from(svgContent).toString('base64')
  return `data:image/svg+xml;base64,${base64}`
}
