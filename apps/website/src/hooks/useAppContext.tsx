'use client'
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useTransition,
  useMemo,
  useCallback,
} from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

import { filterAndSortIcons } from '../utils'
import { TType, TVariant, TMetadata } from '@web3icons/common'

const validTypes: TType[] = ['token', 'network', 'wallet', 'exchange']
const validVariants: TVariant[] = ['branded', 'mono', 'background']

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
  const router = useRouter()
  const pathname = usePathname()
  const [, startTransition] = useTransition()

  const [type, setType] = useState<TType>(() => {
    const param = searchParams.get('type')
    return param && validTypes.includes(param as TType)
      ? (param as TType)
      : 'token'
  })
  const [variant, setVariant] = useState<TVariant>(() => {
    const param = searchParams.get('variant')
    return param && validVariants.includes(param as TVariant)
      ? (param as TVariant)
      : 'branded'
  })
  const [size, setSize] = useState(64)
  const [color, setColor] = useState('#FFFFFF')
  const [searchTerm, setSearchTerm] = useState('')
  const [page, setPage] = useState(1)
  const [selectedIcons, setSelectedIcons] = useState<TMetadata[]>([])

  useEffect(() => {
    if (pathname !== '/') return
    const params = new URLSearchParams(searchParams.toString())
    params.set('type', type)
    params.set('variant', variant)
    router.replace(`?${params.toString()}`, { scroll: false })
  }, [type, variant, router, searchParams, pathname])

  const filteredIcons = useMemo(
    () => filterAndSortIcons({ variant, searchTerm, type }),
    [variant, searchTerm, type],
  )

  const shownIcons = useMemo(
    () => filteredIcons.slice(0, page * PER_PAGE),
    [filteredIcons, page],
  )

  const hasMoreIcons = useMemo(
    () => filteredIcons.length > page * PER_PAGE,
    [filteredIcons, page],
  )

  useEffect(() => {
    setPage(1)
  }, [searchTerm, type])

  const loadMoreIcons = useCallback(() => {
    startTransition(() => {
      setPage((prev) => prev + 1)
    })
  }, [startTransition])

  const contextValue = useMemo<AppContextType>(
    () => ({
      type,
      setType,
      loadMoreIcons,
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
    }),
    [
      type,
      loadMoreIcons,
      shownIcons,
      searchTerm,
      variant,
      size,
      selectedIcons,
      color,
      hasMoreIcons,
    ],
  )

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
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
