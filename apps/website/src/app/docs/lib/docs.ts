import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface NavItem {
  id: string
  name: string
  href: string
  order: number
}

export interface NavGroup {
  category: string
  items: NavItem[]
}

interface Frontmatter {
  title?: string
  order?: number
}

const DOCS_PATH = path.join(process.cwd(), 'src/app/docs')

function getFrontmatter(filePath: string): Frontmatter | null {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(content)
    return data as Frontmatter
  } catch {
    return null
  }
}

function scanDocsDirectory(): NavItem[] {
  const items: NavItem[] = []

  function scan(dir: string, urlPrefix: string = '/docs') {
    const entries = fs.readdirSync(dir, { withFileTypes: true })

    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip special directories
        if (['components', 'lib', 'content'].includes(entry.name)) continue

        const subDir = path.join(dir, entry.name)
        const pagePath = path.join(subDir, 'page.mdx')
        const href = `${urlPrefix}/${entry.name}`

        if (fs.existsSync(pagePath)) {
          const frontmatter = getFrontmatter(pagePath)

          items.push({
            id: entry.name,
            name: frontmatter?.title || entry.name,
            href,
            order: frontmatter?.order ?? 999,
          })
        }

        // Recursively scan subdirectories
        scan(subDir, href)
      }
    }
  }

  scan(DOCS_PATH)
  return items
}

export function generateNavigation(): NavGroup[] {
  const items = scanDocsDirectory()

  // Group items by category (first path segment after /docs/)
  const rootItems: NavItem[] = []
  const groupedItems: Record<string, NavItem[]> = {}

  for (const item of items) {
    const segments = item.href.replace('/docs/', '').split('/')

    if (segments.length === 1) {
      // Root level item (e.g., /docs/home)
      rootItems.push(item)
    } else {
      // Nested item (e.g., /docs/packages/react)
      const category = segments[0]!
      if (!groupedItems[category]) {
        groupedItems[category] = []
      }
      groupedItems[category].push({
        ...item,
        id: segments[segments.length - 1]!,
      })
    }
  }

  // Sort items by order
  rootItems.sort((a, b) => a.order - b.order)
  Object.values(groupedItems).forEach((group) =>
    group.sort((a, b) => a.order - b.order)
  )

  // Build navigation groups
  const groups: NavGroup[] = []

  if (rootItems.length > 0) {
    groups.push({ category: '', items: rootItems })
  }

  for (const [category, categoryItems] of Object.entries(groupedItems)) {
    groups.push({ category, items: categoryItems })
  }

  return groups
}
