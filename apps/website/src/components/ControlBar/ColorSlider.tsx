import cx from 'classnames'
import { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface Props {
  className?: string
  label: string
  color: string
  setColor: Dispatch<SetStateAction<string>>
  // eslint-disable-next-line no-unused-vars
  onChange?: (color: string) => void
  disabled: boolean
}

export default function ColorSlider({
  className,
  color,
  setColor,
  label,
  disabled,
}: Props): JSX.Element {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    const regex = /^#?([0-9A-F]{0,6})$/i
    if (regex.test(value)) {
      setColor(value)
      const completeHexRegex = /^#([0-9A-F]{3}){1,2}$/i
      if (completeHexRegex.test(value)) {
        setColor(value.startsWith('#') ? value : `#${value}`)
      }
    }
  }

  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(event.target.value, 10)
    setColor(`#${num.toString(16).padStart(6, '0')}`)
  }

  return (
    <div className={cx(className, 'flex w-full flex-col gap-2')}>
      <div className="flex w-full justify-between text-sm">
        <label htmlFor={`${label}-slider`}>{label}</label>
        <input
          type="text"
          disabled={disabled}
          value={color}
          onChange={handleInputChange}
          pattern="#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?"
          className={cx(
            'w-full bg-transparent text-right focus:outline-none',
            '[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none',
            'disabled:pointer-events-none disabled:opacity-20',
          )}
        />
      </div>
      <input
        type="range"
        disabled={disabled}
        min="0"
        max="16777215"
        value={parseInt(color.substring(1), 16)}
        onChange={handleRangeChange}
        className={cx(
          'h-2 w-full appearance-none rounded-full duration-150',
          '[&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:duration-150',
          'active:h-4 [&::-webkit-slider-thumb]:active:w-6',
          'disabled:pointer-events-none disabled:opacity-20',
        )}
        style={{
          background:
            'linear-gradient(to right, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))',
        }}
      />
    </div>
  )
}
