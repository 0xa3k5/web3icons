'use client'
import Link from 'next/link'
import { Web3IconLogo } from '@web3icons/react'
import { Breadcrumb } from './breadcrumbs'
import cx from 'classnames'
import { SearchInput } from './search-input'
import { SearchResults } from './search-results'
import { useState, useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { searchIcons, SearchResult } from '../utils/search'

interface Props {
  className?: string
}

export const Header = ({ className }: Props) => {
  const pathname = usePathname()
  const isDocsPage = pathname?.startsWith('/docs')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      const results = searchIcons(searchTerm, 20)
      setSearchResults(results)
      setShowResults(true)
      setActiveIndex(-1)
    } else {
      setSearchResults([])
      setShowResults(false)
      setActiveIndex(-1)
    }
  }, [searchTerm])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    function handleSlashKey(event: KeyboardEvent) {
      if (
        event.key === '/' &&
        !['INPUT', 'TEXTAREA'].includes((event.target as HTMLElement).tagName)
      ) {
        event.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleSlashKey)
    return () => {
      document.removeEventListener('keydown', handleSlashKey)
    }
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showResults || searchResults.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev,
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case 'Enter':
        e.preventDefault()
        if (activeIndex >= 0) {
          const activeLink = document.getElementById(
            `search-option-${activeIndex}`,
          )
          activeLink?.click()
        }
        break
      case 'Escape':
        e.preventDefault()
        setShowResults(false)
        setActiveIndex(-1)
        break
    }
  }

  return (
    <div
      className={cx(
        'border-gray-lightest bg-gray-darkest sticky top-0 z-50 mx-auto flex h-16 w-screen justify-center border-b py-2',
        className,
      )}
    >
      <div className="container flex w-full items-center justify-between gap-8 max-sm:px-4">
        <div className="flex items-center sm:flex-1">
          <Link href="/" className={isDocsPage ? 'hidden lg:block' : ''}>
            <Web3IconLogo size={48} />
          </Link>
          <Breadcrumb
            className={isDocsPage ? 'hidden lg:flex' : 'hidden md:flex'}
          />
        </div>

        <div ref={searchRef} className="relative flex-1">
          <SearchInput
            ref={inputRef}
            onInput={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            value={searchTerm}
            className="group w-full sm:w-96"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showResults}
            aria-controls="search-results"
            aria-activedescendant={
              activeIndex >= 0 ? `search-option-${activeIndex}` : undefined
            }
          >
            <kbd className="border-gray-lightest rounded border px-2 py-1 font-mono text-xs text-white/40 group-focus-within:hidden max-sm:hidden">
              /
            </kbd>
          </SearchInput>
          <SearchResults
            results={searchResults}
            isVisible={showResults}
            activeIndex={activeIndex}
          />
        </div>

        <div className="flex items-center justify-end gap-4 sm:flex-1">
          <Link
            href="/docs"
            className="flex items-center gap-2 font-mono text-sm text-white/60 transition-colors hover:text-white"
          >
            Docs
          </Link>
          <hr className="bg-gray-lightest h-6 w-px text-transparent" />
          <a
            href="https://github.com/0xa3k5/web3icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-white"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7927 7.59481C18.9879 6.18129 17.8962 5.06221 16.5174 4.23731C15.1384 3.41237 13.6329 3 11.9999 3C10.3671 3 8.86115 3.41249 7.48241 4.23731C6.10348 5.06217 5.01185 6.18129 4.20705 7.59481C3.40236 9.00828 3 10.5518 3 12.2253C3 14.2356 3.57216 16.0433 4.71678 17.6489C5.86127 19.2546 7.33978 20.3657 9.1522 20.9823C9.36316 21.0224 9.51934 20.9942 9.62089 20.8983C9.72247 20.8023 9.7732 20.6821 9.7732 20.5381C9.7732 20.5141 9.77119 20.2979 9.76729 19.8894C9.76327 19.4809 9.76138 19.1246 9.76138 18.8205L9.49184 18.8683C9.31999 18.9006 9.10319 18.9142 8.84145 18.9104C8.57983 18.9066 8.30823 18.8785 8.02704 18.8263C7.74572 18.7745 7.48406 18.6544 7.24185 18.4662C6.99977 18.278 6.82791 18.0316 6.72633 17.7275L6.60915 17.4511C6.53104 17.2671 6.40807 17.0626 6.24007 16.8385C6.07208 16.6142 5.90219 16.4622 5.73034 16.3821L5.64829 16.3219C5.59362 16.2819 5.54289 16.2336 5.49597 16.1776C5.4491 16.1216 5.41401 16.0656 5.39057 16.0095C5.36709 15.9533 5.38655 15.9072 5.44914 15.8711C5.51173 15.8349 5.62485 15.8174 5.78899 15.8174L6.02327 15.8533C6.17953 15.8854 6.37281 15.9813 6.60336 16.1415C6.83378 16.3017 7.02321 16.5098 7.17166 16.766C7.35144 17.0944 7.56803 17.3447 7.82206 17.5169C8.07588 17.6891 8.33179 17.7751 8.58955 17.7751C8.84732 17.7751 9.06994 17.755 9.25752 17.7152C9.44489 17.6751 9.62068 17.6149 9.78482 17.5349C9.85513 16.9981 10.0466 16.5858 10.359 16.2975C9.9137 16.2495 9.51339 16.1773 9.15782 16.0812C8.80245 15.9851 8.43523 15.829 8.05638 15.6125C7.67734 15.3964 7.36289 15.128 7.11297 14.8078C6.86301 14.4875 6.65787 14.0669 6.49783 13.5465C6.33772 13.0259 6.25764 12.4253 6.25764 11.7446C6.25764 10.7755 6.5663 9.95074 7.18349 9.26998C6.89437 8.54134 6.92166 7.72452 7.26545 6.8196C7.49202 6.74744 7.82801 6.80159 8.27326 6.98171C8.7186 7.16191 9.04466 7.31628 9.25177 7.44427C9.45888 7.57221 9.62483 7.68064 9.74985 7.76857C10.4765 7.56043 11.2265 7.45634 11.9998 7.45634C12.7732 7.45634 13.5233 7.56043 14.25 7.76857L14.6953 7.48041C14.9998 7.28813 15.3594 7.11193 15.7732 6.95175C16.1873 6.79166 16.5039 6.74757 16.7228 6.81972C17.0742 7.72469 17.1055 8.54147 16.8163 9.27011C17.4335 9.95086 17.7422 10.7758 17.7422 11.7448C17.7422 12.4254 17.6619 13.0279 17.502 13.5525C17.3419 14.0772 17.135 14.4974 16.8812 14.8139C16.6271 15.1303 16.3106 15.3966 15.9318 15.6127C15.5529 15.8289 15.1855 15.985 14.8302 16.0812C14.4746 16.1774 14.0743 16.2497 13.6291 16.2977C14.0352 16.658 14.2383 17.2266 14.2383 18.0033L14.2383 20.5378C14.2383 20.6817 14.2871 20.8019 14.3849 20.898C14.4825 20.9939 14.6367 21.0221 14.8477 20.9819C16.6603 20.3654 18.1389 19.2543 19.2833 17.6486C20.4276 16.043 21 14.2353 21 12.225C20.9996 10.5517 20.597 9.00828 19.7927 7.59481Z"
              />
            </svg>
          </a>
          <a
            href="https://www.figma.com/community/plugin/1170720285035693761/web3-icons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 transition-colors hover:text-white"
            aria-label="Figma"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.47 9.181A3.395 3.395 0 0 1 6 6.362C6 4.505 7.447 3 9.232 3h5.536C16.553 3 18 4.505 18 6.362c0 1.18-.585 2.22-1.47 2.82C17.415 9.78 18 10.818 18 12c0 1.857-1.447 3.362-3.232 3.362h-.059a3.152 3.152 0 0 1-2.187-.887v3.132c0 1.878-1.478 3.393-3.276 3.393C7.466 21 6 19.498 6 17.638c0-1.18.585-2.22 1.47-2.819A3.395 3.395 0 0 1 6 12c0-1.18.585-2.22 1.47-2.819ZM12.522 12c0 1.257.98 2.276 2.188 2.276h.058c1.208 0 2.188-1.02 2.188-2.276 0-1.257-.98-2.276-2.188-2.276h-.059c-1.207 0-2.187 1.02-2.187 2.276Zm-1.044-2.276H9.232c-1.208 0-2.188 1.02-2.188 2.276 0 1.254.976 2.272 2.18 2.276h2.254V9.724Zm-2.246 5.638h-.008c-1.204.004-2.18 1.022-2.18 2.276 0 1.253.99 2.276 2.202 2.276 1.228 0 2.232-1.037 2.232-2.307v-2.245H9.232Zm2.246-6.724H9.232c-1.208 0-2.188-1.019-2.188-2.276s.98-2.276 2.188-2.276h2.246v4.552Zm3.29 0h-2.246V4.086h2.246c1.208 0 2.188 1.02 2.188 2.276 0 1.257-.98 2.276-2.188 2.276Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
