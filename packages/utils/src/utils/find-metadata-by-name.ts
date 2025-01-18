import { TType, TVariant } from '@web3icons/common'
import { toKebabCase } from './naming-conventions'

/**
 * Unified function to find metadata by file name
 * @param type Type of the metadata to find (tokens, networks, wallets, exchanges)
 * @param fileName
 * @param data
 * @returns
 */
export const findByFileName = <
  T extends {
    id: string
    name: string
    shortname?: string
    symbol?: string
    variants?: TVariant[]
  },
>(
  type: TType,
  fileName: string,
  data: T[],
): T[] | undefined => {
  let caseConverter: (str: string) => string = (str) => str.toLowerCase()

  let fields: (keyof T)[]

  switch (type) {
    case 'token':
      fields = ['id', 'name', 'symbol'] as (keyof T)[]
      caseConverter = (str) => str.toLowerCase()
      break
    case 'network':
      fields = ['id', 'name', 'shortname'] as (keyof T)[]
      caseConverter = (str) => str.toLowerCase()
      break
    case 'wallet':
    case 'exchange':
      fields = ['id', 'name'] as (keyof T)[]
      caseConverter = toKebabCase
      break
    default:
      throw new Error('Invalid type')
  }

  const found = data.filter((item) =>
    fields.some((field) => {
      const value = item[field]
      return value ? caseConverter(value as string) === caseConverter(fileName) : false
    }),
  )

  return found.length > 0 ? found : undefined
}
