import fs from 'fs'
import path from 'path'
import { TType, TVariant } from '@web3icons/common'
import { SVG_SRC_DIR } from '../constants'

export const duplicateIconsToType = (
  oldFileName: string,
  newFileName: string,
  variants: TVariant[],
  oldType: TType,
  newType: TType,
) => {
  variants.forEach((variant) => {
    const oldPath = path.join(SVG_SRC_DIR, `${oldType}s`, variant, `${oldFileName}.svg`)
    const newPath = path.join(SVG_SRC_DIR, `${newType}s`, variant, `${newFileName}.svg`)

    fs.copyFileSync(oldPath, newPath)
    console.log(`duplicated: ${oldPath} -> ${newPath}`)
  })
}
