'use client'
import Link from 'next/link'
import { Web3IconLogo } from '@web3icons/react'
import { Button } from './button'
import { Breadcrumb } from './breadcrumbs'
import cx from 'classnames'
import SearchInput from './search-input'
import { SearchResults } from './search-results'
import { useState, useRef, useEffect } from 'react'
import { searchIcons, SearchResult } from '../utils/search'

interface Props {
  className?: string
}

export function Header({ className }: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showResults, setShowResults] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const searchRef = useRef<HTMLDivElement>(null)

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
      <div className="container max-sm:px-4 flex w-full items-center justify-between gap-8">
        <div className="flex sm:flex-1 items-center">
          <Link href="/">
            <Web3IconLogo size={48} />
          </Link>
          <Breadcrumb className="hidden md:flex" />
        </div>

        <div ref={searchRef} className="relative flex-1">
          <SearchInput
            onInput={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search"
            value={searchTerm}
            className="w-full grow sm:w-96"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showResults}
            aria-controls="search-results"
            aria-activedescendant={
              activeIndex >= 0 ? `search-option-${activeIndex}` : undefined
            }
          />
          <SearchResults
            results={searchResults}
            isVisible={showResults}
            activeIndex={activeIndex}
          />
        </div>

        <div className="flex sm:flex-1 items-center justify-end gap-4">
          <Link href="/docs">
            <Button variant="ghost">docs</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
