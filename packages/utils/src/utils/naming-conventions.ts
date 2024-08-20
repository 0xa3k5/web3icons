/**
 *
 * @param str
 * @returns kebab-case
 */
export const toKebabCase = (str: string) => {
  return str
    .split(' ')
    .map((part, index) => {
      if (index === 0) {
        return part.toLowerCase()
      }
      return part.charAt(0).toLowerCase() + part.slice(1)
    })
    .join('-')
}

/**
 *
 * @param str
 * @returns camelCase
 */
export const toCamelCase = (str: string) => {
  return str.replace(/[-_]+(.)?/g, (match, chr) => (chr ? chr.toUpperCase() : ''))
}

/**
 *
 * @param str: kebab-case
 * @returns camelCase
 */
export const kebabToCamel = (str: string) => {
  return str
    .split('-')
    .map((part, index) => {
      if (index === 0) {
        return part
      }
      return part.charAt(0).toUpperCase() + part.slice(1)
    })
    .join('')
}

/**
 *
 * @param str
 * @returns to PascalCase
 */
export const toPascalCase = (str: string): string => {
  const words = str.match(/[a-z0-9]+/gi) || []
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase())
    .join('')
}

/**
 *
 * @param str kebab-case
 * @returns PascalCase
 */
export const kebabToPascalCase = (str: string): string => {
  return str.replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase())
}

/**
 *
 * @param str
 * @returns boolean
 */
export const isUppercase = (filename: string): boolean => filename === filename.toUpperCase()

/**
 *
 * @param str
 * @returns boolean
 */
export const isKebabCase = (filename: string): boolean => {
  return /^([a-z0-9]+(-[a-z0-9]+)*)/.test(filename)
}
