import { TMetadata } from '@web3icons/common'

/**
 * Merges the variants of the given array of networks, tokens, or wallets
 * @param arr Array of networks, tokens, or wallets
 * @returns Array of merged networks, tokens, or wallets with the same type as input
 */
export const mergeVariants = <T extends TMetadata>(arr: T[]): T[] => {
  const map: Map<string, T> = new Map()

  arr.forEach((n) => {
    const key = `${n.id}|${n.name}`
    if (map.has(key)) {
      // Merge the variants array
      const existing = map.get(key)
      if (existing) {
        existing.variants = [...new Set([...existing.variants, ...n.variants])]
      }
    } else {
      map.set(key, { ...n })
    }
  })

  return Array.from(map.values())
}
