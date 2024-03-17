'use client'
import {
  Dispatch,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { ITokenMetadata, tokens } from '@token-icons/core'
import * as Icons from '@token-icons/react'

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
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  const [variant, setVariant] =
    useState<Icons.IconComponentProps['variant']>('mono')
  const [size, setSize] = useState(64)
  const [selectedIcons, setSelectedIcons] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [color, setColor] = useState('#FFFFFF')
  const [filteredIcons, setFilteredIcons] = useState<
    [
      string,
      React.ForwardRefExoticComponent<
        Icons.IconComponentProps & React.RefAttributes<SVGSVGElement>
      >,
    ][]
  >([])

  useEffect(() => {
    const filteredMetadata = tokens.filter(
      (token) =>
        token.symbol
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        token.name
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase()) ||
        token.id.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
    )

    setFilteredIcons(
      Object.entries(Icons).filter(([iconName]) =>
        filteredMetadata.some((token) =>
          iconName
            .toLocaleLowerCase()
            .includes(token.symbol.toLocaleLowerCase()),
        ),
      ),
    )
  }, [searchTerm])

  return (
    <AppContext.Provider
      value={{
        icons: filteredIcons.length > 0 ? filteredIcons : Object.entries(Icons),
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
