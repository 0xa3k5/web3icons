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
import {
  TType,
  ITokenMetadata,
  INetworkMetadata,
  IWalletMetadata,
  TVariant,
  TMetadata,
} from '@web3icons/common'

export interface AppContextType {
  type: TType
  icons: ITokenMetadata[] | INetworkMetadata[] | IWalletMetadata[]
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  variant: TVariant
  size: number
  setSize: React.Dispatch<React.SetStateAction<number>>
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  selectedIcons: TMetadata[]
  //prettier-ignore
  setSelectedIcons: React.Dispatch<React.SetStateAction<(TMetadata)[]>>
  loadMoreIcons: () => void
}

interface AppContextProviderProps {
  children: ReactNode
}
const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}: AppContextProviderProps) => {
  const PER_PAGE = 96
  const searchParams = useSearchParams()
  const [type, setType] = useState<TType>('token')
  const [variant, setVariant] = useState<TVariant>('mono')
  const [size, setSize] = useState(64)
  const [color, setColor] = useState('#FFFFFF')
  const [searchTerm, setSearchTerm] = useState('')
  const [nextBatchIndex, setNextBatchIndex] = useState(0)
  // prettier-ignore
  const [shownIcons, setShownIcons] = useState<(TMetadata)[]>([])
  // prettier-ignore
  const [selectedIcons, setSelectedIcons] = useState<(TMetadata)[]>([])

  const loadMoreIcons = () => {
    setShownIcons(
      filterAndSortIcons({
        variant,
        searchTerm,
        type,
        nextBatchIndex,
        perPage: PER_PAGE,
      }) ?? [],
    )
    setNextBatchIndex((prevIndex) => prevIndex + PER_PAGE)
  }

  useEffect(() => {
    loadMoreIcons()
  }, [])

  useEffect(() => {
    setShownIcons(
      filterAndSortIcons({
        variant,
        searchTerm,
        type,
        nextBatchIndex,
        perPage: PER_PAGE,
      }) ?? [],
    )
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
        icons: shownIcons,
        searchTerm,
        setSearchTerm,
        variant,
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
