import {
  BundledLanguage,
  createHighlighter,
  Highlighter,
  SpecialLanguage,
  ThemedToken,
} from 'shiki'

const THEME = 'houston'

const LANGUAGES: (BundledLanguage | SpecialLanguage)[] = [
  'bash',
  'html',
  'css',
  'jsx',
  'tsx',
  'json',
  'typescript',
  'vue',
  'python',
  'java',
  'c',
  'c++',
  'c#',
  'ruby',
  'php',
  'swift',
  'kotlin',
  'svelte',
]

export type Language = (typeof LANGUAGES)[number]

// Use globalThis to ensure singleton across module instances
const globalCache = globalThis as typeof globalThis & {
  __shikiHighlighter?: Promise<Highlighter>
}

function getHighlighter(): Promise<Highlighter> {
  if (!globalCache.__shikiHighlighter) {
    globalCache.__shikiHighlighter = createHighlighter({
      themes: [THEME],
      langs: LANGUAGES,
    })
  }
  return globalCache.__shikiHighlighter
}

export async function highlight(
  code: string,
  lang: Language,
): Promise<{
  html: string
  tokens: ThemedToken[][]
}> {
  if (!code || typeof code !== 'string') {
    return { html: '', tokens: [] }
  }

  try {
    const highlighter = await getHighlighter()

    const { tokens } = highlighter.codeToTokens(code, {
      theme: THEME,
      lang: lang,
    })

    const html = highlighter.codeToHtml(code, {
      theme: THEME,
      lang: lang,
    })

    return { html, tokens }
  } catch {
    // Fallback when Shiki fails (e.g., regex backtracking limit)
    const lines = code.split('\n')
    let offset = 0
    const fallbackTokens: ThemedToken[][] = lines.map((line) => {
      const token: ThemedToken = { content: line, offset }
      offset += line.length + 1 // +1 for newline
      return [token]
    })
    return {
      html: `<pre><code>${code}</code></pre>`,
      tokens: fallbackTokens,
    }
  }
}
