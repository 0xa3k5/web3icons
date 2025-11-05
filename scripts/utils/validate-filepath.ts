import fs from 'fs'
import path from 'path'
import { TType, TVariant } from '@web3icons/common'
import { SVG_SRC_DIR } from '../constants'

/**
 * Validates that a filePath reference has all required variant SVG files
 * @param filePath - The filePath string in format "type:name"
 * @param requiredVariants - Array of variants that must exist for this entry
 * @returns Object with valid flag and error message if invalid
 */
export function validateFilePath(
  filePath: string,
  requiredVariants: TVariant[],
): {
  valid: boolean
  error?: string
  missingVariants?: TVariant[]
} {
  // Validate format
  if (!filePath.includes(':') || filePath.split(':').length !== 2) {
    return {
      valid: false,
      error: `Invalid filePath format: "${filePath}". Expected format: "type:name" (e.g., "network:ethereum")`,
    }
  }

  const [svgSourceType, svgFileName] = filePath.split(':') as [TType, string]

  // Validate type
  const validTypes: TType[] = ['token', 'network', 'wallet', 'exchange']
  if (!validTypes.includes(svgSourceType)) {
    return {
      valid: false,
      error: `Invalid type in filePath "${filePath}". Type must be one of: ${validTypes.join(', ')}`,
    }
  }

  // Check if all required variants exist
  const svgBaseDir = path.join(SVG_SRC_DIR, `${svgSourceType}s`)
  const missingVariants: TVariant[] = []

  for (const variant of requiredVariants) {
    const svgPath = path.join(svgBaseDir, variant, `${svgFileName}.svg`)
    if (!fs.existsSync(svgPath)) {
      missingVariants.push(variant)
    }
  }

  if (missingVariants.length > 0) {
    return {
      valid: false,
      error: `Missing ${missingVariants.join(', ')} variant(s) for filePath "${filePath}". Expected files: ${missingVariants.map((v) => `${svgBaseDir}/${v}/${svgFileName}.svg`).join(', ')}`,
      missingVariants,
    }
  }

  return { valid: true }
}

/**
 * Validates all filePath entries in metadata
 * @param metadata - Array of metadata entries with id, filePath, and variants
 * @param metadataType - Type of metadata for better error messages
 * @returns Array of validation errors (empty if all valid)
 */
export function validateAllFilePaths(
  metadata: Array<{ id: string; filePath: string; variants: TVariant[] }>,
  metadataType: TType,
): Array<{ id: string; filePath: string; error: string }> {
  const errors: Array<{ id: string; filePath: string; error: string }> = []

  for (const entry of metadata) {
    const result = validateFilePath(entry.filePath, entry.variants)
    if (!result.valid) {
      errors.push({
        id: entry.id,
        filePath: entry.filePath,
        error: result.error || 'Unknown validation error',
      })
    }
  }

  return errors
}
