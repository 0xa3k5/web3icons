import { render } from '@create-figma-plugin/ui'
import { h } from 'preact'
import '!./css/output.css'
import { tokens } from '@token-icons/core/metadata'
import { svgs, ITokenMetadata } from '@token-icons/core'
import { useEffect, useState } from 'preact/hooks'
import {
  IconCard,
  SearchInput,
  SegmentedControl,
  ActionBar,
} from './components'
import { SvgIcon } from './types'

const PER_PAGE = 50

function Plugin() {
  const [searchKey, setSearchKey] = useState('')
  const [variant, setVariant] = useState<'mono' | 'branded'>('mono')
  const [selectedIcons, setSelectedIcons] = useState<SvgIcon[]>([])
  const [displayedIcons, setDisplayedIcons] = useState<SvgIcon[]>([])
  const [nextBatchIndex, setNextBatchIndex] = useState<number>(0)

  const tokenIcons: { [key: string]: SvgIcon[] } = {
    branded: [],
    mono: [],
  }
  const networkIcons: { [key: string]: SvgIcon[] } = {
    branded: [],
    mono: [],
  }

  Object.entries(svgs.tokens).forEach(([name, svg]) => {
    if (name.startsWith('branded')) {
      tokenIcons.branded!.push({ name: name.replace('branded', ''), svg })
    } else if (name.startsWith('mono')) {
      tokenIcons.mono!.push({ name: name.replace('mono', ''), svg })
    }
  })

  Object.entries(svgs.networks).forEach(([name, svg]) => {
    if (name.startsWith('branded')) {
      networkIcons.branded!.push({ name: name.replace('branded', ''), svg })
    } else if (name.startsWith('mono')) {
      networkIcons.mono!.push({ name: name.replace('mono', ''), svg })
    }
  })

  const filterIcons = (searchKey: string): SvgIcon[] => {
    if (!searchKey.trim()) {
      return variant === 'branded'
        ? (tokenIcons.branded as SvgIcon[])
        : (tokenIcons.mono as SvgIcon[])
    }

    const searchLower = searchKey.toLowerCase()
    const filteredTokens = tokens.filter((token: ITokenMetadata) => {
      return (
        token.name.toLowerCase().includes(searchLower) ||
        token.id.toLowerCase().includes(searchLower) ||
        token.symbol.toLowerCase().includes(searchLower)
      )
    })

    // todo implement network filtering
    const filteredSvgs =
      variant === 'branded'
        ? (tokenIcons.branded as SvgIcon[])
        : (tokenIcons.mono as SvgIcon[])

    return filteredSvgs.filter((svg) => {
      return filteredTokens.some(
        (token) => token.symbol === svg.name.toLocaleLowerCase(),
      )
    })
  }

  useEffect(() => {
    loadMoreIcons()
  }, [])

  useEffect(() => {
    const filteredIcons = filterIcons(searchKey)
    setDisplayedIcons(filteredIcons.slice(0, PER_PAGE))
    setNextBatchIndex(PER_PAGE)
  }, [searchKey, variant])

  const loadMoreIcons = () => {
    const newIcons = filterIcons(searchKey).slice(
      nextBatchIndex,
      nextBatchIndex + PER_PAGE,
    )
    setDisplayedIcons((prevIcons) => [...prevIcons, ...newIcons])
    setNextBatchIndex((prevIndex) => prevIndex + PER_PAGE)
  }

  return (
    <main className="flex flex-col gap-4 w-full p-4 bg-gray-darkest">
      <SegmentedControl
        onChange={(value) => setVariant(value as 'mono' | 'branded')}
        options={['branded', 'mono']}
        selected={variant}
      />
      <SearchInput
        placeholder="Search"
        value={searchKey}
        onInput={(event) => setSearchKey(event.currentTarget.value)}
      />
      <div className="grid grid-cols-4 gap-0 -mx-4">
        {displayedIcons.map((svg) => (
          <IconCard
            key={svg.name}
            svg={svg.svg}
            selectedIcons={selectedIcons}
            setSelectedIcons={setSelectedIcons}
            iconName={
              svg.name.startsWith('branded')
                ? svg.name.replace('branded', '').toLocaleLowerCase()
                : svg.name.replace('mono', '').toLocaleLowerCase()
            }
            className="col-span-1"
          />
        ))}
      </div>

      <button
        type="button"
        className="w-full py-2 hover:bg-gray-dark duration-150 text-white"
        onClick={loadMoreIcons}
      >
        load more
      </button>

      {selectedIcons.length > 0 && (
        <ActionBar
          selectedIcons={selectedIcons}
          setSelectedIcons={setSelectedIcons}
        />
      )}
    </main>
  )
}

export default render(Plugin)
