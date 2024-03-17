import cx from 'classnames'

interface Props {
  className?: string
  toggle: boolean
  text: string
}

export default function Tooltip({
  className,
  toggle,
  text,
}: Props): JSX.Element {
  return (
    <div
      className={cx(
        className,
        toggle ? '-translate-y-8 opacity-100' : 'translate-y-0 opacity-0',
        'absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-md border border-gray-lightest bg-gray-darkest px-4 py-2 text-xs transition-all duration-150',
      )}
    >
      {text}
    </div>
  )
}
