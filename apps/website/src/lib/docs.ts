import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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

function getFileMetadata(filePath: string): DocMetadata | null {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)
    return data as DocMetadata
  } catch (error) {
    console.error(`Error reading metadata from ${filePath}:`, error)
    return null
  }
}

export function generateNavigation(): DocSection[] {
  const docsPath = getDocsPath()
  const navigation: DocSection[] = []

  function processDirectoryNested(
    dirPath: string,
    relativePath: string = '',
    categoryPrefix: string = '',
  ): DocSection[] {
    const sections: DocSection[] = []
    const currentSectionItems: DocItem[] = []

    try {
      const entries = fs.readdirSync(dirPath, { withFileTypes: true })

      for (const entry of entries) {
        if (entry.isFile() && entry.name.endsWith('.mdx')) {
          const filePath = path.join(dirPath, entry.name)
          const metadata = getFileMetadata(filePath)
          const baseName = entry.name.replace('.mdx', '')

          const href =
            baseName === 'index'
              ? `/docs${relativePath}`
              : `/docs${relativePath}/${baseName}`

          currentSectionItems.push({
            id: href.replace('/docs/', '').replace(/\//g, '-') || 'index',
            name: metadata?.title || baseName,
            href,
            description: metadata?.description,
          })
        }
      }
      if (currentSectionItems.length > 0) {
        const categoryName =
          categoryPrefix || relativePath.replace('/', '') || 'root'
        sections.push({
          category: categoryName,
          items: currentSectionItems,
        })
      }

      for (const entry of entries) {
        if (entry.isDirectory()) {
          const subDirPath = path.join(dirPath, entry.name)
          const subRelativePath = `${relativePath}/${entry.name}`
          const subCategoryPrefix = entry.name

          const subSections = processDirectoryNested(
            subDirPath,
            subRelativePath,
            subCategoryPrefix,
          )
          sections.push(...subSections)
        }
      }
    } catch (error) {
      console.error(`Error processing directory ${dirPath}:`, error)
    }

    return sections
  }

  try {
    const entries = fs.readdirSync(docsPath, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const sectionPath = path.join(docsPath, entry.name)
        const sections = processDirectoryNested(
          sectionPath,
          `/${entry.name}`,
          entry.name,
        )
        navigation.push(...sections)
      }
    }

    return navigation
  } catch (error) {
    console.error('Error generating navigation:', error)
    return []
  }
}

// Get a specific doc's content and metadata
export function getDocData(
  slug: string[],
): { content: string; metadata: DocMetadata } | null {
  const docsPath = getDocsPath()

  let filePath: string | undefined
  if (slug.length === 0) {
    filePath = path.join(docsPath, 'index.mdx')
  } else {
    const pathSegments = [...slug]
    const fileName = pathSegments[pathSegments.length - 1]

    const possiblePaths = [
      path.join(docsPath, ...pathSegments) + '.mdx',
      path.join(docsPath, ...pathSegments, 'index.mdx'),
      pathSegments.length === 1
        ? path.join(docsPath, pathSegments[0] ?? '', 'index.mdx')
        : null,
    ].filter(Boolean)

    for (const possiblePath of possiblePaths) {
      if (possiblePath && fs.existsSync(possiblePath)) {
        filePath = possiblePath
        break
      }
    }
  }

  if (!filePath) {
    return null
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const processedContent = processConsecutiveCodeBlocks(content)

    return {
      content: processedContent,
      metadata: data as DocMetadata,
    }
  } catch (error) {
    console.error(`Error reading doc file ${filePath}:`, error)
    return null
  }
}

// Recursively get all paths from directory structure
function getAllPathsFromDirectory(
  dirPath: string,
  currentPath: string[] = [],
): string[][] {
  const paths: string[][] = []

  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith('.mdx')) {
        const baseName = entry.name.replace('.mdx', '')

        if (baseName === 'index') {
          // Index file represents the directory itself
          paths.push([...currentPath])
        } else {
          // Regular file
          paths.push([...currentPath, baseName])
        }
      } else if (entry.isDirectory()) {
        // Process subdirectory
        const subPaths = getAllPathsFromDirectory(
          path.join(dirPath, entry.name),
          [...currentPath, entry.name],
        )
        paths.push(...subPaths)
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error)
  }

  return paths
}

export function getAllDocsPaths(): string[][] {
  const docsPath = getDocsPath()
  const paths: string[][] = []

  paths.push([])

  try {
    const entries = fs.readdirSync(docsPath, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const sectionPath = path.join(docsPath, entry.name)
        const sectionPaths = getAllPathsFromDirectory(sectionPath, [entry.name])
        paths.push(...sectionPaths)
      }
    }
  } catch (error) {
    console.error('Error generating doc paths:', error)
  }

  return paths
}
