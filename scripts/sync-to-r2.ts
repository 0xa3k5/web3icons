import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
} from '@aws-sdk/client-s3'
import { readdirSync, readFileSync, statSync } from 'fs'
import { join, relative } from 'path'
import { config } from 'dotenv'
import { createHash } from 'crypto'

config({ path: '.env.local' })

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
})

const BUCKET_NAME = process.env.R2_BUCKET_NAME!
const SOURCE_DIR = join(__dirname, '../packages/core/src/svgs')

interface UploadStats {
  uploaded: number
  skipped: number
  failed: number
  errors: string[]
}

const FORCE_UPLOAD = process.argv.includes('--force')

async function getAllFiles(dir: string): Promise<string[]> {
  const files: string[] = []

  function walk(currentDir: string) {
    const entries = readdirSync(currentDir)

    for (const entry of entries) {
      const fullPath = join(currentDir, entry)
      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        walk(fullPath)
      } else if (entry.endsWith('.svg')) {
        files.push(fullPath)
      }
    }
  }

  walk(dir)
  return files
}

async function getFileHash(content: Buffer): Promise<string> {
  return createHash('md5').update(content.toString('utf-8')).digest('hex')
}

async function shouldUploadFile(
  key: string,
  content: Buffer,
): Promise<boolean> {
  if (FORCE_UPLOAD) {
    return true
  }

  try {
    // Check if file exists in R2
    const response = await r2Client.send(
      new HeadObjectCommand({
        Bucket: BUCKET_NAME,
        Key: key,
      }),
    )

    // Get the ETag (MD5 hash) from R2
    const remoteHash = response.ETag?.replace(/"/g, '')
    const localHash = await getFileHash(content)

    // Skip if hashes match
    return localHash !== remoteHash
  } catch (error) {
    // File doesn't exist, should upload
    return true
  }
}

async function uploadFile(filePath: string, key: string): Promise<boolean> {
  const content = readFileSync(filePath)

  const shouldUpload = await shouldUploadFile(key, content)

  if (!shouldUpload) {
    return false
  }

  await r2Client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: content,
      ContentType: 'image/svg+xml',
      CacheControl: 'public, max-age=31536000, immutable',
    }),
  )

  return true
}

async function syncToR2(): Promise<void> {
  console.log('🚀 Starting sync to Cloudflare R2...')
  console.log(`📁 Source directory: ${SOURCE_DIR}`)
  console.log(`🪣 Bucket: ${BUCKET_NAME}`)

  if (FORCE_UPLOAD) {
    console.log('⚠️  Force upload enabled - all files will be uploaded')
  }

  const stats: UploadStats = {
    uploaded: 0,
    skipped: 0,
    failed: 0,
    errors: [],
  }

  try {
    const files = await getAllFiles(SOURCE_DIR)
    console.log(`📊 Found ${files.length} SVG files`)

    let processed = 0
    for (const filePath of files) {
      const relativePath = relative(SOURCE_DIR, filePath)
      const key = `v1/${relativePath}`

      try {
        const wasUploaded = await uploadFile(filePath, key)

        if (wasUploaded) {
          stats.uploaded++
        } else {
          stats.skipped++
        }

        processed++

        if (processed % 100 === 0) {
          console.log(
            `📊 Progress: ${processed}/${files.length} (✅ ${stats.uploaded} uploaded, ⏭️  ${stats.skipped} skipped)`,
          )
        }
      } catch (error) {
        stats.failed++
        stats.errors.push(`Failed to upload ${key}: ${error}`)
        console.error(`❌ Failed to upload ${key}:`, error)
      }
    }

    await generateAndUploadManifest()

    console.log('\n📊 Sync completed!')
    console.log(`✅ Uploaded: ${stats.uploaded}`)
    console.log(`⏭️  Skipped: ${stats.skipped} (already up-to-date)`)
    console.log(`❌ Failed: ${stats.failed}`)

    if (stats.errors.length > 0) {
      console.log('\n❌ Errors:')
      stats.errors.forEach((error) => console.log(`  - ${error}`))
    }

    console.log('\n💡 Tip: Use --force flag to force upload all files')
  } catch (error) {
    console.error('❌ Sync failed:', error)
    process.exit(1)
  }
}

async function generateAndUploadManifest(): Promise<void> {
  console.log('\n📝 Generating manifest...')

  const manifest = {
    version: 'v1',
    generated: new Date().toISOString(),
    types: {} as Record<string, any>,
  }

  const tokensMetadata = JSON.parse(
    readFileSync(
      join(__dirname, '../packages/common/src/metadata/tokens.json'),
      'utf-8',
    ),
  )
  const networksMetadata = JSON.parse(
    readFileSync(
      join(__dirname, '../packages/common/src/metadata/networks.json'),
      'utf-8',
    ),
  )
  const walletsMetadata = JSON.parse(
    readFileSync(
      join(__dirname, '../packages/common/src/metadata/wallets.json'),
      'utf-8',
    ),
  )
  const exchangesMetadata = JSON.parse(
    readFileSync(
      join(__dirname, '../packages/common/src/metadata/exchanges.json'),
      'utf-8',
    ),
  )

  manifest.types = {
    tokens: {
      count: tokensMetadata.length,
      items: tokensMetadata.map((token: any) => ({
        id: token.id,
        name: token.name,
        symbol: token.symbol,
        fileName: token.fileName,
        variants: token.variants,
      })),
    },
    networks: {
      count: networksMetadata.length,
      items: networksMetadata.map((network: any) => ({
        id: network.id,
        name: network.name,
        fileName: network.fileName,
        variants: network.variants,
      })),
    },
    wallets: {
      count: walletsMetadata.length,
      items: walletsMetadata.map((wallet: any) => ({
        id: wallet.id,
        name: wallet.name,
        fileName: wallet.fileName,
        variants: wallet.variants,
      })),
    },
    exchanges: {
      count: exchangesMetadata.length,
      items: exchangesMetadata.map((exchange: any) => ({
        id: exchange.id,
        name: exchange.name,
        fileName: exchange.fileName,
        variants: exchange.variants,
      })),
    },
  }

  await r2Client.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: 'v1/manifest.json',
      Body: JSON.stringify(manifest, null, 2),
      ContentType: 'application/json',
      CacheControl: 'public, max-age=3600', // 1 hour cache for manifest
    }),
  )

  console.log('✅ Manifest uploaded')
}

syncToR2().catch(console.error)
