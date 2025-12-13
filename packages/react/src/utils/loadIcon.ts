import type { TMetadata, TType } from '@web3icons/common'
import type { IconComponent } from '../types.js'
import { toPascalCase } from './naming-conventions.js'

type DynamicImportFn = () => Promise<{ default: IconComponent }>
type DynamicIconImports = Record<string, DynamicImportFn>

const iconCache = new Map<string, Promise<IconComponent>>()
let dynamicIconImports: DynamicIconImports | null = null

const getDynamicIconImports = async (): Promise<DynamicIconImports> => {
  if (!dynamicIconImports) {
    // Static string import - allows bundlers to analyze and code-split
    const module = await import('@web3icons/react/dynamicIconImports')
    dynamicIconImports = module.default as DynamicIconImports
  }
  return dynamicIconImports!
}

export const preloadIcon = (type: string, metadata: TMetadata): void => {
  const key = getIconKey(type, metadata)
  if (!iconCache.has(key)) {
    loadIcon(type, metadata)
  }
}

/**
 * parse fileName to extract type and name
 * format must be "type:name" where type is one of: network, token, wallet, exchange
 * examples:
 * - "network:ethereum" - references network icon
 * - "token:usdc" - references token icon
 * - "wallet:metamask" - references wallet icon
 */
const parseFilePath = (filePath: string): { type: TType; name: string } => {
  const parts = filePath.split(':')
  if (parts.length !== 2) {
    throw new Error(
      `Invalid filePath format: "${filePath}". Expected format: "type:name" (e.g., "network:ethereum")`,
    )
  }
  return { type: parts[0] as TType, name: parts[1]! }
}

export const getIconKey = (type: string, metadata: TMetadata): string => {
  const { type: iconType, name: iconName } = parseFilePath(metadata.filePath)

  // generate component name based on the icon's type
  const componentName =
    iconType === 'token'
      ? iconName.replace(/[- ]+/g, '_').toUpperCase()
      : toPascalCase(iconName)

  return `${iconType.charAt(0).toUpperCase()}${iconType.slice(1)}${componentName}`
}

export const loadIcon = (
  type: string,
  metadata: TMetadata,
): Promise<IconComponent> => {
  const key = getIconKey(type, metadata)

  if (!iconCache.has(key)) {
    const importPromise = getDynamicIconImports()
      .then((imports) => {
        const importFn = imports[key]
        if (!importFn) {
          console.warn(`No dynamic import found for icon: ${key}`)
          return null
        }
        return importFn().then((module) => module.default)
      })
      .catch((error) => {
        console.warn(`Failed to load icon: ${key}`, error)
        return null
      })

    iconCache.set(key, importPromise as Promise<IconComponent>)
  }

  return iconCache.get(key)!
}
