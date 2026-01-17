'use client'
import Link from 'next/link'
import { Web3IconLogo } from '@web3icons/react'
import { Breadcrumb } from './breadcrumbs'
import cx from 'classnames'
import { SearchInput } from './search-input'
import { SearchResults } from './search-results'
import { GitHubStars } from './github-stars'
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
          <hr className="bg-gray-lightest h-6 w-px text-transparent max-sm:hidden" />
          <div className="max-sm:hidden">
            <GitHubStars />
          </div>
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
