import { render } from '@create-figma-plugin/ui'
import { h } from 'preact'
import '!./css/output.css'
import { useEffect, useState } from 'preact/hooks'
import {
  IconCard,
  SearchInput,
  SegmentedControl,
  ActionBar,
} from './components'
import { SvgIcon } from './types'
import Tabs from './components/Tabs'
import { filterIcons } from './utils'
const PER_PAGE = 50

function Plugin() {
  const [searchKey, setSearchKey] = useState('')
  const [variant, setVariant] = useState<'mono' | 'branded'>('mono')
  const [type, setType] = useState<'tokens' | 'networks'>('tokens')
  const [selectedIcons, setSelectedIcons] = useState<SvgIcon[]>([])
  const [displayedIcons, setDisplayedIcons] = useState<SvgIcon[]>([])
  const [nextBatchIndex, setNextBatchIndex] = useState<number>(0)
  const [totalFilteredIcons, setTotalFilteredIcons] = useState(0)

  const loadMoreIcons = () => {
    const allFilteredIcons = filterIcons(searchKey, type, variant)
    if (!allFilteredIcons) return

    const newIcons = allFilteredIcons.slice(
      nextBatchIndex,
      nextBatchIndex + PER_PAGE,
    )
    setDisplayedIcons((prevIcons) => [...prevIcons, ...newIcons])
    setNextBatchIndex((prevIndex) => prevIndex + PER_PAGE)
  }

  const loadInitialIcons = () => {
    const initialIcons = filterIcons(searchKey, type, variant)
    if (!initialIcons) return

    setDisplayedIcons(initialIcons.slice(0, PER_PAGE))
    setTotalFilteredIcons(initialIcons.length)
    setNextBatchIndex(PER_PAGE)
  }

  useEffect(() => {
    const filteredIcons = filterIcons(searchKey, type, variant)
    setDisplayedIcons(filteredIcons.slice(0, PER_PAGE))
    setTotalFilteredIcons(filteredIcons.length)
    setNextBatchIndex(PER_PAGE)
  }, [searchKey, variant, type])

  useEffect(() => {
    loadInitialIcons()
  }, [])

  return (
    <main className="flex w-full flex-col gap-4 bg-gray-darkest p-4">
      <Tabs
        activeTab={type}
        onChange={(value) => setType(value as 'tokens' | 'networks')}
      />
      <div className="flex gap-4">
        <SearchInput
          placeholder="Search"
          value={searchKey}
          onInput={(event) => setSearchKey(event.currentTarget.value)}
        />
        <SegmentedControl
          onChange={(value) => setVariant(value as 'mono' | 'branded')}
          options={['branded', 'mono']}
          selected={variant}
        />
      </div>
      <div className="-mx-4 grid grid-cols-4 gap-0">
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

      {displayedIcons.length < totalFilteredIcons && (
        <button
          type="button"
          className="w-full py-2 text-white duration-150 hover:bg-gray-dark"
          onClick={loadMoreIcons}
        >
          Load more
        </button>
      )}

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
