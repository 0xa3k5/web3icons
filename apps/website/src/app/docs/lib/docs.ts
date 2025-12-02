import fs from 'fs'
import path from 'path'

export interface NavItem {
  id: string
  name: string
  href: string
  order: number
}

export interface NavGroup {
  category: string
  items: NavItem[]
  order: number
}

const CONTENT_PATH = path.join(process.cwd(), 'src/app/docs/content')

const categoryConfig: Record<string, { name: string; order: number }> = {
  '': { name: '', order: 0 },
  react: { name: 'react', order: 1 },
  core: { name: 'core', order: 2 },
  common: { name: 'common', order: 3 },
  guides: { name: 'guides', order: 4 },
}

interface Frontmatter {
  title?: string
  order?: number
}

function parseFrontmatter(content: string): Frontmatter {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}

  const frontmatter: Frontmatter = {}
  const lines = match[1]?.split('\n') || []

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    const value = valueParts.join(':').trim()
    if (key === 'title') {
      frontmatter.title = value.replace(/^["']|["']$/g, '')
    } else if (key === 'order') {
      frontmatter.order = parseInt(value, 10)
    }
  }

  return frontmatter
}

function scanDirectory(dir: string, category: string = ''): NavItem[] {
  const items: NavItem[] = []

  if (!fs.existsSync(dir)) return items

  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      // Check for index.mdx in subdirectory
      const indexPath = path.join(fullPath, 'index.mdx')
      if (fs.existsSync(indexPath)) {
        const content = fs.readFileSync(indexPath, 'utf8')
        const frontmatter = parseFrontmatter(content)
        const id = entry.name

        const href = category === '' ? `/docs/${id}` : `/docs/${category}/${id}`

        items.push({
          id,
          name: frontmatter.title || id,
          href,
          order: frontmatter.order ?? 99,
        })
      }
      continue
    }

    if (entry.name.endsWith('.mdx')) {
      const content = fs.readFileSync(fullPath, 'utf8')
      const frontmatter = parseFrontmatter(content)
      const id = entry.name.replace('.mdx', '')

      // Skip index files at root level (home is handled specially)
      if (id === 'index' && category === '') continue

      const href =
        category === ''
          ? `/docs${id === 'home' ? '' : `/${id}`}`
          : `/docs/${category}/${id}`

      items.push({
        id,
        name: frontmatter.title || id,
        href,
        order: frontmatter.order ?? 99,
      })
    }
  }

  return items.sort((a, b) => a.order - b.order)
}

export function generateNavigation(): NavGroup[] {
  const groups: NavGroup[] = []

  const rootItems = scanDirectory(CONTENT_PATH, '')
  if (rootItems.length > 0) {
    groups.push({
      category: '',
      items: rootItems,
      order: 0,
    })
  }

  const entries = fs.readdirSync(CONTENT_PATH, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const categoryDir = path.join(CONTENT_PATH, entry.name)
      const items = scanDirectory(categoryDir, entry.name)

      if (items.length > 0) {
        const config = categoryConfig[entry.name] || {
          name: entry.name,
          order: 99,
        }
        groups.push({
          category: config.name,
          items,
          order: config.order,
        })
      }
    }
  }

  return groups.sort((a, b) => a.order - b.order)
}
