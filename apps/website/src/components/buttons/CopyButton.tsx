import { useState, useEffect, PropsWithChildren } from 'react'
import { tokens } from '@token-icons/core/metadata'
import cx from 'classnames'
import Tooltip from '../ActionBar/Tooltip'
import { fetchSvgContent } from '../../utils'

interface Props {
  className?: string
  selectedIcons: string[]
  variant: 'mono' | 'branded'
}

export default function CopyButton({
  className,
  selectedIcons,
  variant,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const [tooltip, setTooltip] = useState({ toggle: false, text: '' })
  const isDisabled = selectedIcons.length > 1

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timer: NodeJS.Timeout
    if (tooltip.toggle) {
      timer = setTimeout(() => setTooltip({ toggle: false, text: '' }), 1000)
    }
    return () => clearTimeout(timer)
  }, [tooltip])

  const handleCopy = async () => {
    if (selectedIcons.length === 1) {
      // action bar only appears when selected icons is not empty
      // so we can assume that there is at least only one icon
      const iconName = selectedIcons[0]!.replace('Icon', '').toLocaleUpperCase()
      const token = tokens.find(
        (token) =>
          token.symbol.toLocaleLowerCase() === iconName.toLocaleLowerCase(),
      )

      try {
        if (token) {
          const symbol = token.symbol.toLocaleUpperCase()
          const svgContent = await fetchSvgContent(symbol, variant, 'tokens')
          await navigator.clipboard.writeText(svgContent)
          setTooltip({ toggle: true, text: 'copied!' })
        }
      } catch (err) {
        console.error(err)
        setTooltip({ toggle: true, text: 'Failed to copy' })
      }
    }
  }

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        className={cx(
          className,
          isDisabled
            ? 'pointer-events-none text-opacity-20'
            : 'text-opacity-60 hover:bg-gray-lightest hover:text-opacity-100',
          'relative flex gap-2 p-2 text-white duration-150',
        )}
        disabled={isDisabled}
      >
        {children}
      </button>
      <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
    </div>
  )
}