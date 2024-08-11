'use client'
import cx from 'classnames'
import Slider from './Slider'
import SegmentedControl from './SegmentedControl'
import ColorSlider from './ColorSlider'
import { useAppContext } from '../../hooks'
import SearchInput from '../SearchInput'
import Tabs from '../Tabs'
import { useRouter, useSearchParams } from 'next/navigation'
import { TVariant } from '@web3icons/core'
import { useState } from 'react'

interface Props {
  className?: string
}
export default function ControlBar({ className }: Props): JSX.Element {
  const {
    variant,
    type,
    size,
    setSize,
    color,
    setColor,
    searchTerm,
    setSearchTerm,
  } = useAppContext()

  const router = useRouter()
  const searchParams = useSearchParams()
  const activeVariantParam = searchParams.get('variant') as TVariant | null
  // prettier-ignore
  const [activeVariant, setActiveVariant] = useState<TVariant>(activeVariantParam || 'mono')

  const handleSegmentedControlChange = (value: TVariant) => {
    setActiveVariant(value)
    router.replace(`?type=${type}&variant=${value}`, {
      scroll: false,
    })
  }

  return (
    <div className="grid grid-cols-10 gap-4 lg:gap-0">
      <div className="col-span-5 flex items-center justify-center md:pr-4 lg:col-span-4">
        <SearchInput
          onInput={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
        />
      </div>
      <div className="col-span-5 flex items-center justify-center px-4 lg:col-span-2">
        <SegmentedControl
          options={['mono', 'branded']}
          selected={activeVariant}
          onChange={(value) => handleSegmentedControlChange(value as TVariant)}
        />
      </div>
      <div className="col-span-full flex items-center justify-center px-4 lg:col-span-2">
        <Slider
          label="size"
          minValue={16}
          maxValue={96}
          value={size}
          setValue={(value) => setSize(value)}
        />
      </div>
      <div className="col-span-full flex items-center justify-center px-4 lg:col-span-2">
        <ColorSlider
          disabled={variant === 'branded'}
          label="color"
          color={color}
          setColor={setColor}
        />
      </div>
    </div>
  )
}
