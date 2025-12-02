export interface NavItem {
  id: string
  name: string
  href: string
}

export interface NavGroup {
  category: string
  items: NavItem[]
}

// Explicit sidebar configuration
export const navigation: NavGroup[] = [
  {
    category: '',
    items: [{ id: 'home', name: 'Home', href: '/docs' }],
  },
  {
    category: 'react',
    items: [
      { id: 'quick-start', name: 'Quick Start', href: '/docs/react/quick-start' },
      { id: 'api', name: 'API Reference', href: '/docs/react/api' },
      { id: 'dynamic-icons', name: 'Dynamic Icons', href: '/docs/react/dynamic-icons' },
      { id: 'performance', name: 'Performance', href: '/docs/react/performance' },
    ],
  },
  {
    category: 'core',
    items: [
      { id: 'quick-start', name: 'Quick Start', href: '/docs/core/quick-start' },
      { id: 'api', name: 'API Reference', href: '/docs/core/api' },
    ],
  },
  {
    category: 'common',
    items: [
      { id: 'quick-start', name: 'Quick Start', href: '/docs/common/quick-start' },
      { id: 'api', name: 'API Reference', href: '/docs/common/api' },
    ],
  },
  {
    category: 'guides',
    items: [
      { id: 'nextjs', name: 'Next.js', href: '/docs/guides/nextjs' },
      { id: 'vite', name: 'Vite', href: '/docs/guides/vite' },
      { id: 'remix', name: 'Remix', href: '/docs/guides/remix' },
    ],
  },
  {
    category: '',
    items: [{ id: 'contributing', name: 'Contributing', href: '/docs/contributing' }],
  },
]

export function generateNavigation(): NavGroup[] {
  return navigation
}
