import fs from 'fs'
import path from 'path'
import {
  SVG_TOKENS_SRC_DIR,
  SVG_NETWORKS_SRC_DIR,
  SVG_WALLETS_SRC_DIR,
  SVG_EXCHANGES_SRC_DIR,
  NETWORKS_METADATA_PATH,
  EXCHANGES_METADATA_PATH,
  WALLETS_METADATA_PATH,
  TOKENS_METADATA_PATH,
} from '../constants'
import { ITokenMetadata, TMetadata, TType, TVariant } from '@web3icons/common'

const METADATA_PATHS = {
  tokens: TOKENS_METADATA_PATH,
  networks: NETWORKS_METADATA_PATH,
  wallets: WALLETS_METADATA_PATH,
  exchanges: EXCHANGES_METADATA_PATH,
}

const SVG_DIRS = {
  tokens: SVG_TOKENS_SRC_DIR,
  networks: SVG_NETWORKS_SRC_DIR,
  wallets: SVG_WALLETS_SRC_DIR,
  exchanges: SVG_EXCHANGES_SRC_DIR,
}

export function updateMetadataVariants() {
  let deletedMetadata: any[] = []
  let addedVariantsLog = ''

  Object.entries(SVG_DIRS).forEach(([type, dir]) => {
    console.log({ type })
    console.log({ dir })
    const metadataPath = METADATA_PATHS[type as keyof typeof METADATA_PATHS]
    console.log({ metadataPath })
    let metadata: TMetadata[] = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'))

    // Update variants for each icon and remove metadata if file does not exist
    metadata = metadata
      .map((icon) => {
        const variants: TVariant[] = icon.variants
        let fileName = icon.id + '.svg'

        if (type === 'tokens') {
          fileName = (icon as ITokenMetadata).symbol + '.svg'
        }
        // Check each variant directory
        let fileExists = false
        ;['mono', 'branded', 'background'].forEach((variant) => {
          if (fs.existsSync(path.join(dir, variant, fileName))) {
            fileExists = true
            if (!variants.includes(variant as TVariant)) {
              variants.push(variant as TVariant)
              addedVariantsLog += `${fileName}\n`
            }
          }
        })

        if (!fileExists) {
          deletedMetadata.push(icon)
          return null
        }

        return {
          ...icon,
          variants,
        }
      })
      .filter((item): item is TMetadata => item !== null)

    // Write updated metadata back to file
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf-8')

    console.log(`✓ Updated variants in ${type}.json`)
  })

  if (deletedMetadata.length > 0) {
    console.log('Deleted metadata:')
    console.log(JSON.stringify(deletedMetadata, null, 2))
  }

  if (addedVariantsLog) {
    console.log('Added variants:')
    console.log(addedVariantsLog)
  }
}

updateMetadataVariants()
