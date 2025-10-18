import * as fs from 'fs'
import * as path from 'path'
import { TType, TVariant } from '@web3icons/common'
import {
  SVG_TOKENS_SRC_DIR,
  SVG_NETWORKS_SRC_DIR,
  SVG_WALLETS_SRC_DIR,
  SVG_EXCHANGES_SRC_DIR,
} from '../constants'

/**
 * Delete unused SVG files when user chooses to reference an existing icon
 * This cleans up the raw-svgs directory from files that won't be used
 */
export const deleteUnusedSvgFiles = (
  fileName: string,
  type: TType,
  variants: TVariant[],
): void => {
  const sourceDirs = {
    token: SVG_TOKENS_SRC_DIR,
    network: SVG_NETWORKS_SRC_DIR,
    wallet: SVG_WALLETS_SRC_DIR,
    exchange: SVG_EXCHANGES_SRC_DIR,
  }

  const sourceDir = sourceDirs[type]
  if (!sourceDir) {
    console.warn(`Unknown type: ${type}`)
    return
  }

  let deletedCount = 0

  variants.forEach((variant) => {
    const filePath = path.join(sourceDir, variant, `${fileName}.svg`)

    if (fs.existsSync(filePath)) {
      try {
        fs.unlinkSync(filePath)
        deletedCount++
        console.log(`  ✓ Deleted unused file: ${variant}/${fileName}.svg`)
      } catch (error) {
        console.warn(`  ✗ Failed to delete: ${variant}/${fileName}.svg`, error)
      }
    }
  })

  if (deletedCount > 0) {
    console.log(
      `\n✓ Cleaned up ${deletedCount} unused SVG file(s) from raw-svgs/${type}s/\n`,
    )
  }
}
