'use client'
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

import { filterAndSortIcons } from '../utils'
import { useSearchParams } from 'next/navigation'
import { TType, TVariant, TMetadata } from '@web3icons/common'

export interface AppContextType {
  type: TType
  setType: React.Dispatch<React.SetStateAction<TType>>
  icons: TMetadata[]
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  variant: TVariant
  setVariant: React.Dispatch<React.SetStateAction<TVariant>>
  size: number
  setSize: React.Dispatch<React.SetStateAction<number>>
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  selectedIcons: TMetadata[]
  setSelectedIcons: React.Dispatch<React.SetStateAction<TMetadata[]>>
  loadMoreIcons: () => void
  hasMoreIcons: boolean
}

interface AppContextProviderProps {
  children: ReactNode
}
const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps) => {
  const PER_PAGE = 200
  const searchParams = useSearchParams()
  const [type, setType] = useState<TType>('token')
  const [variant, setVariant] = useState<TVariant>('mono')
  const [size, setSize] = useState(64)
  const [color, setColor] = useState('#FFFFFF')
  const [searchTerm, setSearchTerm] = useState('')
  const [nextBatchIndex, setNextBatchIndex] = useState(0)
  const [shownIcons, setShownIcons] = useState<TMetadata[]>([])
  const [selectedIcons, setSelectedIcons] = useState<TMetadata[]>([])
  const [hasMoreIcons, setHasMoreIcons] = useState(false)

  const loadIcons = () => {
    const icons = filterAndSortIcons({
      variant,
      searchTerm,
      type,
    })

    setShownIcons(icons.slice(0, nextBatchIndex + PER_PAGE) ?? [])
    setNextBatchIndex((prevIndex) => prevIndex + PER_PAGE)
    setHasMoreIcons(icons.length > nextBatchIndex + PER_PAGE)
  }

  useEffect(() => {
    loadIcons()
  }, [searchTerm, variant, type])

  useEffect(() => {
    const _type = searchParams.get('type') as TType | null
    if (_type && _type !== type) {
      setType(_type)
    }
  }, [searchParams])

  useEffect(() => {
    const _variant = searchParams.get('variant') as TVariant | null
    if (_variant && _variant !== variant) {
      setVariant(_variant)
    }
  }, [searchParams])

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
        loadMoreIcons: loadIcons,
        icons: shownIcons,
        searchTerm,
        setSearchTerm,
        variant,
        setVariant,
        size,
        setSize,
        selectedIcons,
        setSelectedIcons,
        color,
        setColor,
        hasMoreIcons,
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
