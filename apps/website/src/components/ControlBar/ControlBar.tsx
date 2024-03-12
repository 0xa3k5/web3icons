import cx from 'classnames'
import Slider from './Slider'
import SegmentedControl from './SegmentedControl'
import ColorSlider from './ColorSlider'
import { useAppContext } from '../../hooks'

interface Props {
  className?: string
}

export default function ControlBar({ className }: Props): JSX.Element {
  const { variant, setVariant, size, setSize, color, setColor } =
    useAppContext()

  return (
    <div className={cx('flex h-fit flex-col items-center gap-12', className)}>
      <SegmentedControl
        className=""
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
