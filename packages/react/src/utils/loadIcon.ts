import { ITokenMetadata, TMetadata } from '@web3icons/common'
import type { IconComponent } from '../types'
import { toPascalCase } from './naming-conventions'

const iconCache = new Map<string, Promise<IconComponent>>()

export const preloadIcon = (type: string, metadata: TMetadata): void => {
  const key = getIconKey(type, metadata)
  if (!iconCache.has(key)) {
    loadIcon(type, metadata)
  }
}

const getIconKey = (type: string, metadata: TMetadata): string => {
  return `${type.charAt(0).toUpperCase()}${type.slice(1)}${
    type === 'token'
      ? (metadata as ITokenMetadata).symbol.toUpperCase()
      : toPascalCase(metadata.id)
  }`
}

export const loadIcon = (
  type: string,
  metadata: TMetadata,
): Promise<IconComponent> => {
  const key = getIconKey(type, metadata)

  if (!iconCache.has(key)) {
    const importPromise = import(
      /* webpackChunkName: "[request]" */
      `../icons/${type}s/${key}.tsx`
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
