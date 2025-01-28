'use client'
import Slider from './Slider'
import SegmentedControl from './SegmentedControl'
import ColorSlider from './ColorSlider'
import { useAppContext } from '../../hooks'
import SearchInput from '../SearchInput'
import { TVariant } from '@web3icons/common'
import cx from 'classnames'

interface Props {
  className?: string
  handleVariantChange: (value: TVariant) => void
}
export default function ControlBar({
  className,
  handleVariantChange,
}: Props): JSX.Element {
  const { variant, size, setSize, color, setColor, searchTerm, setSearchTerm } =
    useAppContext()

  return (
    <div
      className={cx(
        'flex flex-col gap-8 md:flex-row md:justify-between',
        className,
      )}
    >
      <SegmentedControl
        options={['mono', 'branded', 'background']}
        selected={variant}
        onChange={(variant) => handleVariantChange(variant as TVariant)}
        className="inline-flex md:hidden"
      />
      <SearchInput
        onInput={(e) => setSearchTerm(e.target.value)}
        placeholder="Search"
        value={searchTerm}
      />

      <div className="flex w-full flex-row gap-8">
        <Slider
          label="size"
          minValue={16}
          maxValue={96}
          value={size}
          setValue={(value) => setSize(value)}
          className="w-1/2 md:w-full"
        />

        <ColorSlider
          disabled={variant !== 'mono'}
          label="color"
          color={color}
          setColor={setColor}
          className="w-1/2 md:w-full"
        />
      </div>
    </div>
  )
}
