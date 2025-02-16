import { Fragment, h } from 'preact'
import cx from 'classnames'
import { useRef } from 'preact/hooks'

interface SegmentedControlProps {
  className?: string
  options: string[]
  selected: string
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void
}

export default function SegmentedControl({
  className,
  options,
  selected,
  onChange,
}: SegmentedControlProps): h.JSX.Element {
  const optionRefs = useRef<(HTMLLabelElement | null)[]>([])

  return (
    <div
      className={cx(
        className,
        'relative inline-flex w-full rounded-full border border-gray-lightest bg-gray-light p-1 text-white',
        '[&:has(:focus-visible)]:focus-within:outline  [&:has(:focus-visible)]:focus-within:outline-gray-lightest',
      )}
    >
      {options.map((option, index) => (
        <Fragment key={option}>
          <input
            type="radio"
            id={`option-${option}`}
            name="segmented-control"
            value={option}
            checked={selected === option}
            onChange={(e) => onChange(e.currentTarget.value)}
            className="sr-only"
          />
          <label
            ref={(el) => (optionRefs.current[index] = el)}
            htmlFor={`option-${option}`}
            className={cx(
              'z-[1] flex w-full items-center justify-center rounded-full px-4 py-1 text-sm',
              selected === option ? 'bg-gray-lightest' : 'null',
            )}
          >
            {option}
          </label>
        </Fragment>
      ))}
    </div>
  )
}
