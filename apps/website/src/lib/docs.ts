import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const GITHUB_BASE_URL =
  'https://raw.githubusercontent.com/0xa3k5/web3icons/main/docs'
const isDevelopment = process.env.NODE_ENV === 'development'

function detectPackageManager(content: string): string {
  if (content.includes('npm ')) return 'npm'
  if (content.includes('yarn ')) return 'yarn'
  if (content.includes('bun ')) return 'bun'
  if (content.includes('pnpm ')) return 'pnpm'
  return ''
}

function processConsecutiveCodeBlocks(content: string): string {
  const codeBlockRegex = /```(\w+)\n([\s\S]*?)\n```/g
  let processedContent = content
  let lastIndex = 0

  while (true) {
    codeBlockRegex.lastIndex = lastIndex
    const firstMatch = codeBlockRegex.exec(processedContent)

    if (!firstMatch) break

    const [firstFullMatch, firstLanguage, firstBlockContent] = firstMatch
    const firstLabel =
      firstLanguage === 'bash'
        ? detectPackageManager(firstBlockContent || '')
        : ''

    if (!firstLabel) {
      lastIndex = firstMatch.index + firstFullMatch.length
      continue
    }

    const consecutiveBlocks = [
      {
        language: firstLanguage || '',
        content: firstBlockContent || '',
        label: firstLabel,
        match: firstFullMatch,
        index: firstMatch.index,
      },
    ]

    let searchStart = firstMatch.index + firstFullMatch.length

    while (true) {
      codeBlockRegex.lastIndex = searchStart
      const nextMatch = codeBlockRegex.exec(processedContent)

      if (!nextMatch) break

      const [nextFullMatch, nextLanguage, nextBlockContent] = nextMatch
      const nextLabel =
        nextLanguage === 'bash'
          ? detectPackageManager(nextBlockContent || '')
          : ''

      if (!nextLabel) break

      const betweenText = processedContent
        .slice(searchStart, nextMatch.index)
        .trim()

      if (betweenText !== '') break

      consecutiveBlocks.push({
        language: nextLanguage || '',
        content: nextBlockContent || '',
        label: nextLabel,
        match: nextFullMatch,
        index: nextMatch.index,
      })

      searchStart = nextMatch.index + nextFullMatch.length
    }

    if (consecutiveBlocks.length > 1) {
      const tabs = consecutiveBlocks.map((b) => ({
        label: b.label,
        content: b.content,
        language: b.language,
      }))

      const groupedBlock = `<CodeBlock as="span" tabs={${JSON.stringify(tabs)}} lineNumbers={false} />`

      let offset = 0
      consecutiveBlocks.forEach((block) => {
        const blockIndex = processedContent.indexOf(block.match, offset)
        processedContent =
          processedContent.slice(0, blockIndex) +
          processedContent.slice(blockIndex + block.match.length)
        offset = blockIndex
      })

      const insertPos = consecutiveBlocks[0]?.index || 0
      processedContent =
        processedContent.slice(0, insertPos) +
        groupedBlock +
        processedContent.slice(insertPos)

      lastIndex = insertPos + groupedBlock.length
    } else {
      lastIndex = firstMatch.index + firstFullMatch.length
    }
  }

  return processedContent
}

export interface DocMetadata {
  title: string
  description: string
}

export interface DocItem {
  id: string
  name: string
  href: string
  description?: string
}

export interface DocSection {
  category: string
  items: DocItem[]
}

function getDocsPath() {
  return path.join(process.cwd(), '../../docs')
}

async function fetchFromGitHub(filePath: string): Promise<string | null> {
  try {
    const githubUrl = `${GITHUB_BASE_URL}/${filePath}`
    const response = await fetch(githubUrl)
    if (!response.ok) {
      console.error(`Failed to fetch ${githubUrl}: ${response.status}`)
      return null
    }
    return await response.text()
  } catch (error) {
    console.error(`Error fetching from GitHub ${filePath}:`, error)
    return null
  }
}

async function getFileContent(filePath: string): Promise<string | null> {
  if (isDevelopment) {
    try {
      return fs.readFileSync(filePath, 'utf8')
    } catch (error) {
      console.error(`Error reading local file ${filePath}:`, error)
      return null
    }
  } else {
    return await fetchFromGitHub(filePath)
  }
}

async function getFileMetadata(filePath: string): Promise<DocMetadata | null> {
  try {
    const fileContents = await getFileContent(filePath)
    if (!fileContents) return null

    const { data } = matter(fileContents)
    return data as DocMetadata
  } catch (error) {
    console.error(`Error reading metadata from ${filePath}:`, error)
    return null
  }
}

async function getManifest(): Promise<string[]> {
  try {
    const manifestUrl = `${GITHUB_BASE_URL}/manifest.json`
    const response = await fetch(manifestUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch manifest: ${response.status}`)
    }
    const manifest = await response.json()
    return manifest.files || []
  } catch (error) {
    console.error('Error fetching manifest:', error)
    return []
  }
}

async function generateNavigationFromFiles(
  files: string[],
): Promise<DocSection[]> {
  const navigation: DocSection[] = []
  const rootItems: DocItem[] = []
  const packageItems: DocItem[] = []

  for (const file of files) {
    const filePath = isDevelopment ? path.join(getDocsPath(), file) : file

    const metadata = await getFileMetadata(filePath)

    if (file.startsWith('packages/')) {
      const packageName = file.replace('packages/', '').replace('.mdx', '')
      packageItems.push({
        id: `packages-${packageName}`,
        name: metadata?.title || packageName,
        href: `/docs/packages/${packageName}`,
        description: metadata?.description,
      })
    } else {
      const baseName = file.replace('.mdx', '')
      rootItems.push({
        id: baseName,
        name: metadata?.title || baseName,
        href: `/docs/${baseName}`,
        description: metadata?.description,
      })
    }
  }

  rootItems.sort((a, b) => {
    if (a.id === 'home') return -1
    if (b.id === 'home') return 1
    return 0
  })

  const packageOrder = ['common', 'react', 'core']
  packageItems.sort((a, b) => {
    const aIndex = packageOrder.findIndex((pkg) => a.href.includes(pkg))
    const bIndex = packageOrder.findIndex((pkg) => b.href.includes(pkg))
    return aIndex - bIndex
  })

  if (rootItems.length > 0) {
    navigation.push({ category: '', items: rootItems })
  }

  if (packageItems.length > 0) {
    navigation.push({ category: 'packages', items: packageItems })
  }

  return navigation
}

async function getAllFiles(): Promise<string[]> {
  const files: string[] = []
  function scanDirectory(dirPath: string, prefix: string = ''): void {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.mdx')) {
        const filePath = prefix ? `${prefix}/${entry.name}` : entry.name
        files.push(filePath)
      } else if (entry.isDirectory()) {
        const subDirPath = path.join(dirPath, entry.name)
        const subPrefix = prefix ? `${prefix}/${entry.name}` : entry.name
        scanDirectory(subDirPath, subPrefix)
      }
    }
  }
  if (isDevelopment) {
    const docsPath = getDocsPath()
    scanDirectory(docsPath)
    return files
  } else {
    return await getManifest()
  }
}

export async function generateNavigation(): Promise<DocSection[]> {
  try {
    const files = await getAllFiles()
    return await generateNavigationFromFiles(files)
  } catch (error) {
    console.error('Error generating navigation:', error)
    return []
  }
}

export async function getDocData(
  slug: string[],
): Promise<{ content: string; metadata: DocMetadata } | null> {
  try {
    const files = await getAllFiles()
    let relativePath: string | null = null

    for (const file of files) {
      const pathFromFile = filesToPaths([file])[0]
      if (pathFromFile && arraysEqual(pathFromFile, slug)) {
        relativePath = file
        break
      }
    }

    if (!relativePath) {
      return null
    }

    let fileContents: string | null

    if (isDevelopment) {
      const docsPath = getDocsPath()
      const filePath = path.join(docsPath, relativePath)

      if (!fs.existsSync(filePath)) {
        return null
      }

      fileContents = fs.readFileSync(filePath, 'utf8')
    } else {
      fileContents = await fetchFromGitHub(relativePath)
    }

    if (!fileContents) {
      return null
    }

    const { data, content } = matter(fileContents)
    const processedContent = processConsecutiveCodeBlocks(content)

    return {
      content: processedContent,
      metadata: data as DocMetadata,
    }
  } catch (error) {
    console.error(`Error reading doc file:`, error)
    return null
  }
}

function arraysEqual(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((val, i) => val === b[i])
}

function filesToPaths(files: string[]): string[][] {
  const paths: string[][] = []

  for (const file of files) {
    // Convert file path to URL segments
    // e.g., "home.mdx" -> ["home"]
    // e.g., "packages/react.mdx" -> ["packages", "react"]
    // e.g., "guides/getting-started.mdx" -> ["guides", "getting-started"]
    const pathWithoutExt = file.replace('.mdx', '')
    const segments = pathWithoutExt.split('/')
    paths.push(segments)
  }

  return paths
}

export async function getAllDocsPaths(): Promise<string[][]> {
  try {
    const files = await getAllFiles()
    return filesToPaths(files)
  } catch (error) {
    console.error('Error generating doc paths:', error)
    return []
  }
}
