import {
  BundledLanguage,
  createHighlighter,
  Highlighter,
  SpecialLanguage,
} from 'shiki'

let highlighter: Highlighter

const LANGUAGES: (BundledLanguage | SpecialLanguage)[] = [
  'bash',
  'html',
  'css',
  'jsx',
  'tsx',
  'json',
  'typescript',
]

export type Language = (typeof LANGUAGES)[number]

export async function highlight(code: string, lang: Language) {
  const THEME = 'houston'

  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: [THEME],
      langs: LANGUAGES,
    })
  }

  if (!code || typeof code !== 'string') {
    return { html: '', tokens: [] }
  }

  const { tokens } = highlighter.codeToTokens(code, {
    theme: THEME,
    lang: lang,
  })

  const html = highlighter.codeToHtml(code, {
    theme: THEME,
    lang: lang,
  })

  return { html, tokens }
}
