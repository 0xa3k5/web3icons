import { TType, TVariant } from '@web3icons/common'

/**
 * Gets the type and variant of the icon from the file path
 * @param filePath The file path of the icon
 * @returns The type and variant of the icon
 */
export const getTypeAndVariant = (filePath: string): { type: TType; variant: TVariant } => {
  let type: TType | undefined
  let variant: TVariant | undefined

  const possibleTypes: TType[] = ['token', 'network', 'wallet', 'exchange']
  const possibleVariants: TVariant[] = ['branded', 'mono', 'background']

  possibleTypes.forEach((t) => {
    possibleVariants.forEach((v) => {
      if (filePath.includes(`/${t}s/${v}/`)) {
        type = t
        variant = v
      }
    })
  })

  if (type !== undefined && variant !== undefined) {
    return { type, variant }
  } else {
    throw new Error('cant get type and variant')
  }
}
