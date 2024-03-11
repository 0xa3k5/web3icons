import cx from 'classnames'
import { ChangeEvent } from 'react'

interface Props {
  className?: string
  minValue: number
  maxValue: number
  value: number
  setValue: React.Dispatch<React.SetStateAction<number>>
  label: string
}

export default function Slider({
  className,
  minValue,
  maxValue,
  value,
  label,
  setValue,
}: Props): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value)
    setValue(newValue)
  }

  return (
    <div className={cx(className, 'flex w-full flex-col gap-2')}>
      <div className="flex w-full justify-between text-sm">
        <label htmlFor={`${label}-slider`}>{label}</label>
        <input
          type="number"
          min={minValue}
          max={maxValue}
          value={value}
          onChange={handleChange}
          className={cx(
            'rounded-lg bg-transparent focus:outline-none',
            '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
          )}
        />
      </div>
      <input
        id={`${label}-slider`}
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChange}
        className={cx(
          'h-2 w-full appearance-none rounded-full bg-gray-lightest duration-150',
          '[&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:duration-150',
          'active:h-4 [&::-webkit-slider-thumb]:active:w-6',
        )}
      />
    </div>
  )
}
