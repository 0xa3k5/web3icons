import fs from 'fs'
/**
 * Creates a directory if it doesn't exist.
 *
 * @param {string} dirPath - The path to the directory to be created.
 */
export const ensureDirectoryExists = (dirPath: string): void => {
  if (!fs.existsSync(dirPath)) {
    console.log(`→ creating ${dirPath}`)
    fs.mkdirSync(dirPath)
  }
}
