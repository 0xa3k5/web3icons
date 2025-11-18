'use client'
import { SearchResult } from '../utils/search'
import { Web3Icon } from './web3-icon'
import { ITokenMetadata } from '@web3icons/common'
import cx from 'classnames'
import { useEffect, useRef } from 'react'
import { Tag } from './tag'

interface Props {
  results: SearchResult[]
  isVisible: boolean
  activeIndex: number
}

export function SearchResults({ results, isVisible, activeIndex }: Props) {
  const activeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
  }, [activeIndex])

  if (!isVisible || results.length === 0) {
    return null
  }

  return (
    <div
      id="search-results"
      role="listbox"
      className="border-gray-lightest bg-gray-darkest absolute left-0 right-0 top-full z-50 mt-2 max-h-96 overflow-y-auto rounded-md border shadow-lg"
    >
      {results.map((result, index) => {
        const { metadata, type } = result
        const label =
          type === 'token'
            ? (metadata as ITokenMetadata).symbol?.toUpperCase()
            : metadata.name

        const iconId =
          type === 'token'
            ? (metadata as ITokenMetadata).symbol?.toUpperCase() || metadata.id
            : metadata.id

        const href = `/${type}s/${iconId}`
        const isActive = index === activeIndex
        const Element = 'a'

        return (
          <Element
            key={`${type}-${metadata.id}-${index}`}
            id={`search-option-${index}`}
            href={href}
            role="option"
            aria-selected={isActive}
            className={cx(
              'flex items-center gap-4 px-4 py-3 duration-150',
              'hover:bg-gray border-gray-lightest',
              index < results.length - 1 && 'border-b',
              isActive && 'bg-gray',
            )}
          >
            <Web3Icon
              metadata={metadata}
              variant={
                metadata.variants.includes('branded') ? 'branded' : 'mono'
              }
              type={type}
              size={32}
            />
            <div className="flex flex-1 flex-col gap-1">
              <span className="text-sm font-medium text-white">{label}</span>
              <span className="text-xs text-white/40">{metadata.name}</span>
            </div>
            <Tag>{type}</Tag>
          </Element>
        )
      })}
    </div>
  )
}
