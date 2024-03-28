import cx from 'classnames'
import JSZip from 'jszip'
import { useState } from 'react'
import Tooltip from './Tooltip'
import { tokens } from '@token-icons/core'

interface Props {
  className?: string
  selectedIcons: string[]
  variant: string
}

const triggerDownload = (url: string, filename: string) => {
  const element = document.createElement('a')
  element.href = url
  element.download = filename
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

export default function DownloadButton({
  className,
  selectedIcons,
  variant,
}: Props): JSX.Element {
  const [tooltip, setTooltip] = useState({ toggle: false, text: '' })

  const handleDownload = async () => {
    if (selectedIcons.length === 0) return

    const zip = new JSZip()

    for (const iconName of selectedIcons) {
      const name = iconName.replace('Icon', '').toLocaleUpperCase()

      const token = tokens.find(
        (t) => t.symbol.toLocaleLowerCase() === name.toLocaleLowerCase(),
      )

      if (!token) continue

      let svgModule

      const hasVariant = token.variants.includes(variant)

      svgModule = await import(
        `@token-icons/core/dist/optimized-svgs/${hasVariant ? variant : token.variants[0]}/${name}.svg`
      )

      const response = await fetch(svgModule.default.src)
      const svgContent = await response.text()
      const fileName = hasVariant ? `${name}-${variant}.svg` : `${name}.svg`

      if (selectedIcons.length > 1) {
        zip.file(fileName, svgContent)
      }

      if (selectedIcons.length === 1) {
        try {
          const blob = new Blob([svgContent], { type: 'image/svg+xml' })
          const url = URL.createObjectURL(blob)
          triggerDownload(url, fileName)
          break
        } catch (err) {
          console.error(`Error downloading ${name}:`, err)
          setTooltip({ toggle: true, text: "couldn't download" })
        }
      }
    }

    if (selectedIcons.length > 1) {
      try {
        const blob = await zip.generateAsync({ type: 'blob' })
        const url = URL.createObjectURL(blob)
        triggerDownload(url, 'token-icons.zip')
      } catch (err) {
        console.log(err)
        setTooltip({ toggle: true, text: "couldn't download" })
      }
    }
  }

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleDownload}
        className={cx(
          className,
          'flex gap-2 p-4 text-white text-opacity-60 duration-150 hover:bg-gray-lightest hover:text-opacity-100',
        )}
      >
        download
        <span className="text-primary">
          ({selectedIcons.length.toString()})
        </span>
      </button>
      <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
    </div>
  )
}
