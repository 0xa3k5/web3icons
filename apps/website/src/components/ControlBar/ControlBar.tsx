import { IconComponentProps } from '@token-icons/react'
import cx from 'classnames'
import SearchInput from '../SearchInput'
import Slider from './Slider'
import SegmentedControl from './SegmentedControl'
import ColorSlider from './ColorSlider'
import { useAppContext } from '../../hooks'

interface Props {
  className?: string
}

export default function ControlBar({ className }: Props): JSX.Element {
  const { variant, setVariant, size, setSize } =
    useAppContext()

  return (
    <div
      className={cx(
        'sticky left-0 top-4 z-10 flex h-fit flex-col gap-16',
        className,
      )}
    >
      <SegmentedControl
        className="w-fit"
        options={['mono', 'branded']}
        selected={variant === 'mono' ? 'mono' : 'branded'}
        onChange={(value) => setVariant(value as 'mono' | 'branded')}
      />
      <Slider
        label="size"
        minValue={16}
        maxValue={96}
        value={size}
        setValue={(value) => setSize(value)}
      />
      <ColorSlider
        disabled={variant === 'branded'}
        label="color"
        color={color}
        setColor={setColor}
      />
    </div>
  )
}
