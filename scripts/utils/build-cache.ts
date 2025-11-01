import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const CACHE_DIR = path.join(process.cwd(), '.build-cache')
const CACHE_FILE = path.join(CACHE_DIR, 'file-hashes.json')

interface FileCache {
  [filePath: string]: string
}

/**
 * Ensure the cache directory exists
 */
function ensureCacheDir() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true })
  }
}

/**
 * Load the cache from disk
 */
export function loadCache(): FileCache {
  ensureCacheDir()
  if (fs.existsSync(CACHE_FILE)) {
    try {
      return JSON.parse(fs.readFileSync(CACHE_FILE, 'utf-8'))
    } catch (error) {
      console.warn('Failed to load build cache, starting fresh')
      return {}
    }
  }
  return {}
}

/**
 * Save the cache to disk
 */
export function saveCache(cache: FileCache): void {
  ensureCacheDir()
  fs.writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2))
}

/**
 * Calculate hash of a file
 */
export function getFileHash(filePath: string): string {
  const content = fs.readFileSync(filePath)
  return crypto.createHash('md5').update(content.toString()).digest('hex')
}

/**
 * Check if a file has changed since last build
 */
export function hasFileChanged(filePath: string, cache: FileCache): boolean {
  if (!fs.existsSync(filePath)) {
    return false
  }

  const currentHash = getFileHash(filePath)
  const cachedHash = cache[filePath]

  return currentHash !== cachedHash
}

/**
 * Update cache with new file hash
 */
export function updateFileCache(filePath: string, cache: FileCache): void {
  if (fs.existsSync(filePath)) {
    cache[filePath] = getFileHash(filePath)
  }
}

/**
 * Get list of changed files from a directory
 */
export function getChangedFiles(files: string[], cache: FileCache): string[] {
  return files.filter((file) => hasFileChanged(file, cache))
}

/**
 * Check if incremental build is enabled (via environment variable)
 */
export function isIncrementalEnabled(): boolean {
  return process.env.INCREMENTAL !== 'false'
}
