import fs from 'fs'
import path from 'path'
import { TType, TVariant } from '@web3icons/common'
import { SVG_SRC_DIR } from '../constants'

export const renameIconFiles = (
  oldFileName: string,
  newFileName: string,
  variants: TVariant[],
  type: TType,
) => {
  variants.forEach((variant) => {
    const oldPath = path.join(SVG_SRC_DIR, `${type}s`, variant, `${oldFileName}.svg`)
    const newPath = path.join(SVG_SRC_DIR, `${type}s`, variant, `${newFileName}.svg`)

    fs.renameSync(oldPath, newPath)
    console.log(`Renamed: ${oldPath} -> ${newPath}`)
  })
}
