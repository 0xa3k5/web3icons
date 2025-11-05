import { TMetadata, TType } from '@web3icons/common'
import type { IconComponent } from '../types'
import { toPascalCase } from './naming-conventions'

const iconCache = new Map<string, Promise<IconComponent>>()

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

const getIconKey = (type: string, metadata: TMetadata): string => {
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
  const { type: iconType } = parseFilePath(metadata.filePath)

  if (!iconCache.has(key)) {
    const importPromise = import(
      /* webpackChunkName: "[request]" */
      `../icons/${iconType}s/${key}.tsx`
    )
      .then((module) => module.default)
      .catch((error) => {
        console.warn(`Failed to load icon: ${key}`, error)
        return null
      })

    iconCache.set(key, importPromise)
  }

  return iconCache.get(key)!
}
