import fs from 'fs'
import { TOKENS_METADATA_PATH } from '../constants'
import { ITokenMetadata } from '@web3icons/common'

export const appendToMetadataJson = (coin: ITokenMetadata) => {
  let fileContent = fs.existsSync(TOKENS_METADATA_PATH)
    ? fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8')
    : '[]'

  // remove the "]" at the end
  if (fileContent.length > 2) {
    fileContent = fileContent.slice(0, -1)
  }

  // append the new coin data
  const separator = fileContent.length > 2 ? ',' : ''
  fileContent += `${separator}\n${JSON.stringify(coin, null, 2)}]`

  fs.writeFileSync(TOKENS_METADATA_PATH, fileContent)
}
