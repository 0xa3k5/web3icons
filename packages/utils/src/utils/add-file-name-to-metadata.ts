import fs from 'fs'
import path from 'path'
import {
  IExchangeMetadata,
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
} from '@web3icons/common'
import {
  SVG_TOKENS_OUT_DIR,
  SVG_NETWORKS_OUT_DIR,
  SVG_WALLETS_OUT_DIR,
  SVG_EXCHANGES_OUT_DIR,
  NETWORKS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
  TOKENS_METADATA_PATH,
  WALLETS_METADATA_PATH,
} from '../constants'

type MetadataType = INetworkMetadata | IWalletMetadata | IExchangeMetadata | ITokenMetadata

const getFileNamesFromDir = (baseDir: string): Set<string> => {
  const fileNames = new Set<string>()
  const variants = ['branded', 'mono', 'background']

  variants.forEach((variant) => {
    fs.readdirSync(path.join(baseDir, variant)).forEach((fileName) => {
      fileNames.add(fileName.slice(0, -4))
    })
  })

  return fileNames
}

const matchMetadataWithFiles = <T extends MetadataType>(
  fileNames: Set<string>,
  metadata: T[],
  type: TType,
): { matched: (T & { fileName: string })[]; notMatched: string[] } => {
  const matched: (T & { fileName: string })[] = []
  const notMatched: string[] = []

  fileNames.forEach((fileName) => {
    const matchedItem = metadata.find((item) =>
      type === 'token'
        ? (item as ITokenMetadata).symbol.toUpperCase() === fileName
        : item.id === fileName,
    )
    if (matchedItem) {
      matched.push({ ...matchedItem, fileName })
    } else {
      notMatched.push(fileName)
    }
  })

  return { matched, notMatched }
}

// const deleteUnmatchedFiles = (baseDir: string, rawDir: string, notMatched: string[]) => {
//   const variants = ['branded', 'mono', 'background']
//   const deletedFiles: string[] = []

//   notMatched.forEach((fileName) => {
//     variants.forEach((variant) => {
//       const filePath = path.join(baseDir, variant, `${fileName}.svg`)
//       const rawFilePath = path.join(rawDir, variant, `${fileName}.svg`)
//       console.log(filePath, rawFilePath)

//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath)
//         deletedFiles.push(filePath)
//       }

//       if (fs.existsSync(rawFilePath)) {
//         fs.unlinkSync(rawFilePath)
//         deletedFiles.push(rawFilePath)
//       }
//     })
//   })

//   return deletedFiles
// }

export const addFileNameToMetadata = () => {
  const networkMetadata: INetworkMetadata[] = JSON.parse(
    fs.readFileSync(NETWORKS_METADATA_PATH, 'utf-8'),
  )
  const walletMetadata: IWalletMetadata[] = JSON.parse(
    fs.readFileSync(WALLETS_METADATA_PATH, 'utf-8'),
  )
  const exchangeMetadata: IExchangeMetadata[] = JSON.parse(
    fs.readFileSync(EXCHANGES_METADATA_PATH, 'utf-8'),
  )
  const tokenMetadata: ITokenMetadata[] = JSON.parse(fs.readFileSync(TOKENS_METADATA_PATH, 'utf-8'))

  // Get file names from directories
  const networkFileNames = getFileNamesFromDir(SVG_NETWORKS_OUT_DIR)
  const walletFileNames = getFileNamesFromDir(SVG_WALLETS_OUT_DIR)
  const exchangeFileNames = getFileNamesFromDir(SVG_EXCHANGES_OUT_DIR)
  const tokenFileNames = getFileNamesFromDir(SVG_TOKENS_OUT_DIR)

  // Match files with metadata
  const networks = matchMetadataWithFiles(networkFileNames, networkMetadata, 'network')
  const wallets = matchMetadataWithFiles(walletFileNames, walletMetadata, 'wallet')
  const exchanges = matchMetadataWithFiles(exchangeFileNames, exchangeMetadata, 'exchange')
  const tokens = matchMetadataWithFiles(tokenFileNames, tokenMetadata, 'token')

  //   // Delete unmatched files and log deleted files
  //   const deletedNetworkFiles = deleteUnmatchedFiles(
  //     SVG_NETWORKS_OUT_DIR,
  //     path.resolve(__dirname, '../../../../', 'raw-svgs/networks'),
  //     networks.notMatched,
  //   )
  //   const deletedWalletFiles = deleteUnmatchedFiles(
  //     SVG_WALLETS_OUT_DIR,
  //     path.resolve(__dirname, '../../../../', 'raw-svgs/wallets'),
  //     wallets.notMatched,
  //   )
  //   const deletedExchangeFiles = deleteUnmatchedFiles(
  //     SVG_EXCHANGES_OUT_DIR,
  //     path.resolve(__dirname, '../../../../', 'raw-svgs/exchanges'),
  //     exchanges.notMatched,
  //   )
  //   const deletedTokenFiles = deleteUnmatchedFiles(
  //     SVG_TOKENS_OUT_DIR,
  //     path.resolve(__dirname, '../../../../', 'raw-svgs/tokens'),
  //     tokens.notMatched,
  //   )

  // Update metadata files with fileName field
  fs.writeFileSync(NETWORKS_METADATA_PATH, JSON.stringify(networks.matched, null, 2))
  fs.writeFileSync(WALLETS_METADATA_PATH, JSON.stringify(wallets.matched, null, 2))
  fs.writeFileSync(EXCHANGES_METADATA_PATH, JSON.stringify(exchanges.matched, null, 2))
  fs.writeFileSync(TOKENS_METADATA_PATH, JSON.stringify(tokens.matched, null, 2))

  //   console.log('Deleted Network Files:', deletedNetworkFiles)
  //   console.log('Deleted Wallet Files:', deletedWalletFiles)
  //   console.log('Deleted Exchange Files:', deletedExchangeFiles)
  //   console.log('Deleted Token Files:', deletedTokenFiles)
}
