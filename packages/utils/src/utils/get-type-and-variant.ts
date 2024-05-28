/**
 * Gets the type and variant of the icon from the file path
 * @param filePath The file path of the icon
 * @returns The type and variant of the icon
 */
export const getTypeAndVariant = (
  filePath: string,
): { type: 'token' | 'network'; variant: 'mono' | 'branded' } => {
  let type: 'token' | 'network' = 'token'
  let variant: 'mono' | 'branded' = 'branded'

  if (filePath.includes('/networks/')) {
    type = 'network'
  }
  if (filePath.includes('/mono/')) {
    variant = 'mono'
  }

  return { type, variant }
}
