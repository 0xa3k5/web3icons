import { useState, useEffect } from 'react'
import tokens from '@token-icons/core/dist/metadata/tokens.json'
import cx from 'classnames'
import Tooltip from './Tooltip'

interface Props {
  className?: string
  selectedIcons: string[]
  variant: string
}

export default function CopyButton({
  className,
  selectedIcons,
  variant,
}: Props): JSX.Element {
  const [tooltip, setTooltip] = useState({ toggle: false, text: '' })
  const isDisabled = selectedIcons.length > 1

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (tooltip.toggle) {
      timer = setTimeout(() => setTooltip({ toggle: false, text: '' }), 1000)
    }
    return () => clearTimeout(timer)
  }, [tooltip])

  const handleCopy = async () => {
    if (selectedIcons.length === 1) {
      const iconName = selectedIcons[0]!.replace('Icon', '').toLocaleUpperCase()

      let hasMonoVariant = false
      let hasBrandedVariant = false

      tokens
        .find(
          (token) =>
            token.symbol.toLocaleLowerCase() === iconName.toLocaleLowerCase(),
        )
        ?.variants?.forEach((variant) => {
          hasMonoVariant = variant.includes('mono')
          hasBrandedVariant = variant.includes('branded')
        })

      console.log(hasBrandedVariant, hasMonoVariant)

      try {
        if (
          (variant === 'mono' && hasMonoVariant) ||
          (variant === 'branded' && hasBrandedVariant)
        ) {
          const svgModule = await import(
            `@token-icons/core/dist/svgs/${variant}/${iconName}.svg`
          )
          const response = await fetch(svgModule.default.src)
          const svgContent = await response.text()
          await navigator.clipboard.writeText(svgContent)
        } else if (hasBrandedVariant) {
          const svgModule = await import(
            `@token-icons/core/dist/svgs/branded/${iconName}.svg`
          )
          const response = await fetch(svgModule.default.src)
          const svgContent = await response.text()
          await navigator.clipboard.writeText(svgContent)
        } else if (hasMonoVariant) {
          const svgModule = await import(
            `@token-icons/core/dist/svgs/mono/${iconName}.svg`
          )
          const response = await fetch(svgModule.default.src)
          const svgContent = await response.text()
          await navigator.clipboard.writeText(svgContent)
        }
        setTooltip({ toggle: true, text: 'copied!' })
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
          'relative flex gap-2 p-4 text-white duration-150',
        )}
        disabled={isDisabled}
      >
        copy svg
      </button>
      <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
    </div>
  )
}
