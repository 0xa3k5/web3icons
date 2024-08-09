'use client'
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/core'
import { filterAndSortIcons } from '../utils'

export interface AppContextType {
  type: TType
  setType: React.Dispatch<React.SetStateAction<TType>>
  icons: ITokenMetadata[] | INetworkMetadata[] | IWalletMetadata[]
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  variant: TVariant
  setVariant: React.Dispatch<React.SetStateAction<TVariant>>
  size: number
  setSize: React.Dispatch<React.SetStateAction<number>>
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  selectedIcons: (ITokenMetadata | INetworkMetadata | IWalletMetadata)[]
  //prettier-ignore
  setSelectedIcons: React.Dispatch<React.SetStateAction<(ITokenMetadata | INetworkMetadata | IWalletMetadata)[]>>
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
  const [type, setType] = useState<TType>('token')
  const [variant, setVariant] = useState<TVariant>('mono')
  const [size, setSize] = useState(64)
  const [color, setColor] = useState('#FFFFFF')
  const [searchTerm, setSearchTerm] = useState('')
  const [nextBatchIndex, setNextBatchIndex] = useState(0)
  // prettier-ignore
  const [shownIcons, setShownIcons] = useState<(ITokenMetadata | INetworkMetadata | IWalletMetadata)[]>([])
  // prettier-ignore
  const [selectedIcons, setSelectedIcons] = useState<(ITokenMetadata | INetworkMetadata | IWalletMetadata)[]>([])

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

  return (
    <AppContext.Provider
      value={{
        type,
        setType,
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
