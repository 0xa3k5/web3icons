import { useState, useEffect, PropsWithChildren } from 'react'
import cx from 'classnames'
import Tooltip from '../ActionBar/Tooltip'

interface Props {
  className?: string
  copyContent: string
  disabled?: boolean
}

export default function CopyButton({
  className,
  copyContent,
  disabled,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const [tooltip, setTooltip] = useState({ toggle: false, text: '' })

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timer: NodeJS.Timeout
    if (tooltip.toggle) {
      timer = setTimeout(() => setTooltip({ toggle: false, text: '' }), 1000)
    }
    return () => clearTimeout(timer)
  }, [tooltip])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyContent)
      setTooltip({ toggle: true, text: 'copied!' })
    } catch (err) {
      console.log('err', err)
      console.error(err)
      setTooltip({ toggle: true, text: 'Failed to copy' })
    }
  }

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        aria-disabled={disabled}
        className={cx(
          className,
          'aria-disabled:pointer-events-none aria-disabled:text-opacity-20',
          'text-opacity-60 hover:bg-gray-lightest hover:text-opacity-100',
          'relative flex gap-2 p-2 text-white duration-150',
        )}
        disabled={disabled}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      </button>
      <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
    </div>
  )
}
