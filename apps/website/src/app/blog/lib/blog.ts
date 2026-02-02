import fs from 'fs'
import path from 'path'

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
}

const CONTENT_PATH = path.join(process.cwd(), 'src/app/blog/content')

export function parseFrontmatter(content: string): BlogFrontmatter {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  if (!match) {
    return {
      title: '',
      description: '',
      date: '',
      author: '',
      tags: [],
    }
  }

  const frontmatter: BlogFrontmatter = {
    title: '',
    description: '',
    date: '',
    author: '',
    tags: [],
  }

  const lines = match[1]?.split('\n') || []

  for (const line of lines) {
    const colonIndex = line.indexOf(':')
    if (colonIndex === -1) continue

    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()

    switch (key) {
      case 'title':
        frontmatter.title = value.replace(/^["']|["']$/g, '')
        break
      case 'description':
        frontmatter.description = value.replace(/^["']|["']$/g, '')
        break
      case 'date':
        frontmatter.date = value.replace(/^["']|["']$/g, '')
        break
      case 'author':
        frontmatter.author = value.replace(/^["']|["']$/g, '')
        break
      case 'tags': {
        const tagMatch = value.match(/\[([^\]]*)\]/)
        if (tagMatch) {
          frontmatter.tags =
            tagMatch[1]
              ?.split(',')
              .map((t) => t.trim().replace(/^["']|["']$/g, ''))
              .filter(Boolean) || []
        }
        break
      }
    }
  }

  return frontmatter
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_PATH)) return []

  const files = fs.readdirSync(CONTENT_PATH).filter((f) => f.endsWith('.mdx'))

  const posts = files.map((file) => {
    const slug = file.replace('.mdx', '')
    const content = fs.readFileSync(path.join(CONTENT_PATH, file), 'utf8')
    const frontmatter = parseFrontmatter(content)
    return { slug, frontmatter }
  })

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime(),
  )
}

export function getPostBySlug(slug: string): {
  content: string
  frontmatter: BlogFrontmatter
} | null {
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) return null

  const content = fs.readFileSync(filePath, 'utf8')
  const frontmatter = parseFrontmatter(content)

  return { content, frontmatter }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_PATH)) return []

  return fs
    .readdirSync(CONTENT_PATH)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}
