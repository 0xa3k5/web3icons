'use client'
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import { tokens } from '@token-icons/core/metadata'
import { ITokenMetadata } from '@token-icons/utils'
export interface AppContextType {
  icons: ITokenMetadata[]
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  variant: 'mono' | 'branded'
  setVariant: React.Dispatch<React.SetStateAction<'mono' | 'branded'>>
  size: number
  setSize: React.Dispatch<React.SetStateAction<number>>
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  selectedIcons: string[]
  setSelectedIcons: React.Dispatch<React.SetStateAction<string[]>>
  loadMoreIcons: () => void
}

interface AppContextProviderProps {
  children: ReactNode
}
const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps) => {
  const PER_PAGE = 48
  const [variant, setVariant] = useState<'mono' | 'branded'>('mono')
  const [size, setSize] = useState(64)
  const [color, setColor] = useState('#FFFFFF')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIcons, setSelectedIcons] = useState<string[]>([])
  const [nextBatchIndex, setNextBatchIndex] = useState(0)
  const [shownIcons, setShownIcons] = useState<ITokenMetadata[]>([])

  tokens.sort(
    (a, b) => (a.marketCapRank || Infinity) - (b.marketCapRank || Infinity),
  )

  const uniqueTokensMap = new Map()

  // Filter out unique tokens, preferring those with higher market cap rank
  tokens.forEach((token) => {
    const existingToken = uniqueTokensMap.get(token.symbol)
    if (
      !existingToken ||
      (token.marketCapRank &&
        (!existingToken.marketCapRank ||
          token.marketCapRank < existingToken.marketCapRank))
    ) {
      uniqueTokensMap.set(token.symbol, token)
    }
  })

  const groupedTokens: Record<string, ITokenMetadata[]> = {}

  // Group the unique tokens by their variants
  Array.from(uniqueTokensMap.values()).forEach((token) => {
    token.variants.forEach((variant: 'mono' | 'branded') => {
      if (!groupedTokens[variant]) {
        groupedTokens[variant] = []
      }
      groupedTokens[variant]!.push(token)
    })
  })

  const filterAndSortIcons = useCallback(() => {
    const filteredIcons = groupedTokens[variant]!.filter(
      (token) =>
        (token.variants.includes(variant) &&
          token.symbol.toLowerCase().includes(searchTerm.toLowerCase())) ||
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.id.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return filteredIcons.slice(0, nextBatchIndex + PER_PAGE)
  }, [searchTerm, variant, nextBatchIndex])

  useEffect(() => {
    setShownIcons(filterAndSortIcons())
  }, [filterAndSortIcons])

  const loadMoreIcons = useCallback(() => {
    setNextBatchIndex((prevIndex) => prevIndex + PER_PAGE)
  }, [])

  return (
    <AppContext.Provider
      value={{
        icons: shownIcons,
        searchTerm,
        setSearchTerm,
        variant,
        setVariant,
        size,
        setSize,
        selectedIcons,
        setSelectedIcons,
        loadMoreIcons,
        color,
        setColor,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }
  return context
}

export default AppContextProvider
