'use client'
import {
  Dispatch,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { tokens } from '@token-icons/core'
import * as Icons from '@token-icons/react'
import { ITokenMetadata } from '@token-icons/utils'

export interface AppContextType {
  icons: [
    string,
    ForwardRefExoticComponent<
      Icons.IconComponentProps & RefAttributes<SVGSVGElement>
    >,
  ][]
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
  variant: Icons.IconComponentProps['variant']
  setVariant: Dispatch<SetStateAction<'mono' | 'branded'>>
  size: number
  setSize: Dispatch<SetStateAction<number>>
  selectedIcons: string[]
  setSelectedIcons: React.Dispatch<React.SetStateAction<string[]>>
  tokenMetadata: ITokenMetadata[]
  color: string
  setColor: Dispatch<SetStateAction<string>>
  loadMoreIcons: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppContextProvider({ children }: { children: ReactNode }) {
  const PER_PAGE = 48

  const [variant, setVariant] =
    useState<Icons.IconComponentProps['variant']>('mono')
  const [size, setSize] = useState(64)
  const [selectedIcons, setSelectedIcons] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [color, setColor] = useState('#FFFFFF')
  const [nextBatchIndex, setNextBatchIndex] = useState(0)
  const [shownIcons, setShownIcons] = useState<AppContextType['icons']>([])

  const filterAndSetIcons = useCallback(() => {
    const filteredMetadata = tokens.filter((token) =>
      [token.symbol, token.name, token.id].some((id) =>
        id.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
      ),
    )

    const newFilteredIcons = Object.entries(Icons).filter(([iconName]) =>
      filteredMetadata.some((token) =>
        iconName.toLocaleLowerCase().includes(token.symbol.toLocaleLowerCase()),
      ),
    )

    setShownIcons(newFilteredIcons.slice(0, nextBatchIndex + PER_PAGE))
  }, [searchTerm, nextBatchIndex])

  useEffect(() => {
    filterAndSetIcons()
  }, [searchTerm, filterAndSetIcons])

  const loadMoreIcons = useCallback(() => {
    setNextBatchIndex((prevIndex) => prevIndex + PER_PAGE)
  }, [])

  useEffect(() => {
    loadMoreIcons()
  }, [loadMoreIcons])

  return (
    <AppContext.Provider
      value={{
        icons: shownIcons,
        searchTerm,
        setSearchTerm,
        tokenMetadata: tokens,
        variant,
        setVariant,
        size,
        setSize,
        selectedIcons,
        setSelectedIcons,
        color,
        setColor,
        loadMoreIcons,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useIconContext must be used within a AppContextProvider')
  }
  return context
}

export default AppContextProvider
