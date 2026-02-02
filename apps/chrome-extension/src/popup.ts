import { svgs } from '@web3icons/core'
import type { TType, TVariant } from '@web3icons/common'

type IconEntry = { name: string; svg: string }

let activeType: TType = 'token'
let activeVariant: TVariant = 'branded'
let searchQuery = ''
let toastTimeout: ReturnType<typeof setTimeout> | null = null

const TYPES: TType[] = ['token', 'network', 'wallet', 'exchange']
const VARIANTS: TVariant[] = ['branded', 'mono', 'background']

// --- Icon data (cached per type+variant) ---

const iconCache = new Map<string, IconEntry[]>()

function getIcons(type: TType, variant: TVariant, query: string): IconEntry[] {
  const cacheKey = `${type}-${variant}`
  let entries = iconCache.get(cacheKey)

  if (!entries) {
    const typePlural = `${type}s` as keyof typeof svgs
    const variantGroup = variant as keyof (typeof svgs)[typeof typePlural]
    const modules = svgs[typePlural][variantGroup] as Record<
      string,
      { default: string }
    >

    entries = Object.entries(modules).map(([exportName, mod]) => {
      const name = exportName
        .replace(
          /^(Network|Token|Exchange|Wallet)(Mono|Branded|Background)/,
          '',
        )
        .toLowerCase()
      return { name, svg: mod.default }
    })

    iconCache.set(cacheKey, entries)
  }

  if (!query) return entries

  const q = query.toLowerCase()
  return entries.filter((e) => e.name.includes(q))
}

// --- Toast ---

function showToast(message: string) {
  const toast = document.getElementById('toast')!
  toast.textContent = message
  toast.style.opacity = '1'
  if (toastTimeout) clearTimeout(toastTimeout)
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0'
  }, 1200)
}

// --- Copy to clipboard ---

async function copyToClipboard(svg: string, name: string) {
  try {
    await navigator.clipboard.writeText(svg)
    showToast(`Copied ${name}`)
  } catch {
    // Fallback
    const textarea = document.createElement('textarea')
    textarea.value = svg
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    showToast(`Copied ${name}`)
  }
}

// --- Render tabs ---

function renderTabs() {
  const container = document.getElementById('tabs')!
  const indicator = document.getElementById('tab-indicator')!

  // Clear existing tabs (keep indicator)
  Array.from(container.children).forEach((child) => {
    if (child.id !== 'tab-indicator') container.removeChild(child)
  })

  TYPES.forEach((type) => {
    const btn = document.createElement('button')
    btn.textContent = type.charAt(0).toUpperCase() + type.slice(1)
    btn.className = `z-[1] flex items-center justify-center rounded-full px-4 py-2 text-xs text-white duration-150 ${
      activeType === type ? 'opacity-100' : 'opacity-40'
    }`
    btn.addEventListener('click', () => {
      activeType = type
      renderTabs()
      renderIcons()
    })
    container.insertBefore(btn, indicator)
  })

  // Update indicator
  requestAnimationFrame(() => {
    const activeIndex = TYPES.indexOf(activeType)
    const activeBtn = container.children[activeIndex] as HTMLElement
    if (activeBtn) {
      indicator.style.width = `${activeBtn.offsetWidth}px`
      indicator.style.transform = `translateX(${activeBtn.offsetLeft}px)`
    }
  })
}

// --- Render variant toggle ---

function renderVariants() {
  const container = document.getElementById('variants')!
  container.innerHTML = ''

  VARIANTS.forEach((variant) => {
    const label = document.createElement('button')
    label.textContent = variant
    label.className = `z-[1] flex w-full items-center justify-center rounded-full px-4 py-1 text-sm ${
      activeVariant === variant ? 'bg-gray-lightest' : ''
    }`
    label.addEventListener('click', () => {
      activeVariant = variant
      renderVariants()
      renderIcons()
    })
    container.appendChild(label)
  })
}

// --- Render icon grid ---

function renderIcons() {
  const container = document.getElementById('icons')!
  container.innerHTML = ''

  const icons = getIcons(activeType, activeVariant, searchQuery)

  if (icons.length === 0) {
    container.innerHTML =
      '<div class="col-span-4 flex items-center justify-center py-12 text-white/30">No icons found</div>'
    return
  }

  // Render in batches for performance
  const BATCH_SIZE = 100
  let rendered = 0

  function renderBatch() {
    const fragment = document.createDocumentFragment()
    const end = Math.min(rendered + BATCH_SIZE, icons.length)

    for (let i = rendered; i < end; i++) {
      const icon = icons[i]!
      const card = document.createElement('button')
      card.className =
        'icon-card flex flex-col items-center justify-center gap-1 px-2 py-4 duration-150 hover:bg-gray-light cursor-pointer'
      card.innerHTML = `
        <div class="flex items-center justify-center w-8 h-8">${icon.svg}</div>
        <span class="mt-1 text-center text-[10px] text-white/60 truncate w-full">${icon.name}</span>
      `
      card.title = `Copy ${icon.name} SVG`
      card.addEventListener('click', () => copyToClipboard(icon.svg, icon.name))
      fragment.appendChild(card)
    }

    container.appendChild(fragment)
    rendered = end

    if (rendered < icons.length) {
      requestAnimationFrame(renderBatch)
    }
  }

  renderBatch()
}

// --- Search ---

function setupSearch() {
  const input = document.getElementById('search') as HTMLInputElement
  let debounceTimer: ReturnType<typeof setTimeout> | null = null

  input.addEventListener('input', () => {
    if (debounceTimer) clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      searchQuery = input.value.trim()
      renderIcons()
    }, 150)
  })
}

// --- Init ---

function init() {
  renderTabs()
  renderVariants()
  renderIcons()
  setupSearch()
}

document.addEventListener('DOMContentLoaded', init)
