'use client'
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import { networks, tokens } from '@token-icons/core/metadata'
import { INetworkMetadata, ITokenMetadata } from '@token-icons/core'
export interface AppContextType {
  type: 'tokens' | 'networks'
  setType: React.Dispatch<React.SetStateAction<'tokens' | 'networks'>>
  tokenIcons: ITokenMetadata[] | INetworkMetadata[]
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
  const [type, setType] = useState<'tokens' | 'networks'>('tokens')
  const [variant, setVariant] = useState<'mono' | 'branded'>('mono')
  const [size, setSize] = useState(64)
  const [color, setColor] = useState('#FFFFFF')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIcons, setSelectedIcons] = useState<string[]>([])
  const [nextBatchIndex, setNextBatchIndex] = useState(0)
  const [shownIcons, setShownIcons] = useState<
    ITokenMetadata[] | INetworkMetadata[]
  >([])

  tokens.sort(
    (a, b) => (a.marketCapRank || Infinity) - (b.marketCapRank || Infinity),
  )

  // group by variants
  const groupedTokens: Record<string, ITokenMetadata[]> = {}

  tokens.forEach((token) => {
    token.variants.forEach((variant) => {
      if (!groupedTokens[variant]) {
        groupedTokens[variant] = []
      }
      groupedTokens[variant]!.push(token)
    })
  })

  const groupedNetworks: Record<string, INetworkMetadata[]> = {}

  networks.forEach((network) => {
    network.variants.forEach((variant) => {
      if (!groupedNetworks[variant]) {
        groupedNetworks[variant] = []
      }
      groupedNetworks[variant]!.push(network)
    })
  })

  const filterAndSortIcons = useCallback(() => {
    const filteredNetworkIcons = groupedNetworks[variant]!.filter(
      (network) =>
        network.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        network.id.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    const filteredTokens = groupedTokens[variant]!.filter(
      (token) =>
        (token.variants.includes(variant) &&
          token.symbol.toLowerCase().includes(searchTerm.toLowerCase())) ||
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.id.toLowerCase().includes(searchTerm.toLowerCase()),
    )

    return type === 'tokens'
      ? filteredTokens.slice(0, nextBatchIndex + PER_PAGE)
      : filteredNetworkIcons.slice(0, nextBatchIndex + PER_PAGE)
  }, [searchTerm, variant, nextBatchIndex, type])

  useEffect(() => {
    setShownIcons(filterAndSortIcons())
  }, [filterAndSortIcons])

  const loadMoreIcons = useCallback(() => {
    setNextBatchIndex((prevIndex) => prevIndex + PER_PAGE)
  }, [])

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
        tokenIcons: shownIcons,
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
