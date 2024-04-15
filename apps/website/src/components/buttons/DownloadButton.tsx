import React, { useState, useEffect, PropsWithChildren } from 'react'
import JSZip from 'jszip'
import Tooltip from '../ActionBar/Tooltip'
import { networks, tokens } from '@token-icons/core/metadata'
import { fetchSvgContent } from '../../utils'
import cx from 'classnames'

interface DownloadButtonProps {
  className?: string
  selectedIcons: string[]
  type: 'tokens' | 'networks'
  variant: 'mono' | 'branded'
}

const DownloadButton: React.FC<PropsWithChildren<DownloadButtonProps>> = ({
  className,
  selectedIcons,
  variant,
  type,
  children,
}) => {
  const [tooltip, setTooltip] = useState<{ toggle: boolean; text: string }>({
    toggle: false,
    text: '',
  })

  const triggerDownload = (blob: Blob, filename: string): void => {
    const url = URL.createObjectURL(blob)
    const element = document.createElement('a')
    element.href = url
    element.download = filename
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
    URL.revokeObjectURL(url)
  }

  const handleDownload = async () => {
    if (selectedIcons.length === 0) return

    if (selectedIcons.length === 1) {
      // Handle single SVG download

      const iconName =
        type === 'tokens'
          ? selectedIcons[0]!.replace('Token', '').toLocaleUpperCase()
          : selectedIcons[0]!.replace('Network', '').toLocaleLowerCase()

      const token = tokens.find(
        (token) => token.symbol.toLocaleLowerCase() === iconName,
      )

      const network = networks.find(
        (network) =>
          network.id?.toLocaleLowerCase() === iconName ||
          network.name.toLocaleLowerCase() === iconName,
      )

      try {
        const name =
          type === 'tokens'
            ? token?.symbol.toLocaleLowerCase()
            : network?.name.toLocaleLowerCase()

        if (!name) return
        const svgContent = await fetchSvgContent(name, variant, type)
        await navigator.clipboard.writeText(svgContent)
      } catch (err) {
        console.error(err)
        setTooltip({ toggle: true, text: 'Failed to download' })
      }
    } else {
      // Handle multiple SVGs download as ZIP
      const zip = new JSZip()

      try {
        for (const iconName of selectedIcons) {
          const name = iconName.replace('Icon', '').toUpperCase()
          const token = tokens.find(
            (t) => t.symbol.toLowerCase() === name.toLowerCase(),
          )

          if (token) {
            const svgContent = await fetchSvgContent(name, variant, 'tokens')
            zip.file(`${name}-${variant}.svg`, svgContent)
          }
        }

        const blob = await zip.generateAsync({ type: 'blob' })
        triggerDownload(blob, 'token-icons.zip')
        setTooltip({ toggle: true, text: 'downloaded!' })
      } catch (err) {
        console.error('Download error:', err)
        setTooltip({ toggle: true, text: "couldn't download" })
      }
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timer: NodeJS.Timeout
    if (tooltip.toggle) {
      timer = setTimeout(() => setTooltip({ toggle: false, text: '' }), 1000)
    }
    return () => clearTimeout(timer)
  }, [tooltip])

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleDownload}
        className={cx(
          className,
          'flex h-full gap-2 p-2 text-white text-opacity-60 duration-150 hover:bg-gray-lightest hover:text-opacity-100',
        )}
      >
        {children}
      </button>
      {tooltip.toggle && (
        <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
      )}
    </div>
  )
}

export default DownloadButton
