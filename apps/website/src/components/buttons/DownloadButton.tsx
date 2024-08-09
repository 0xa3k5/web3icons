import React, { useState, useEffect, PropsWithChildren } from 'react'
import JSZip from 'jszip'
import Tooltip from '../ActionBar/Tooltip'
import { fetchSvgContent } from '../../utils'
import cx from 'classnames'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/core'

interface DownloadButtonProps {
  className?: string
  icons: (INetworkMetadata | ITokenMetadata | IWalletMetadata)[]
  type: TType
  variant: TVariant
}

const DownloadButton: React.FC<PropsWithChildren<DownloadButtonProps>> = ({
  className,
  icons,
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
    if (icons.length === 0) return

    if (icons.length === 1) {
      // Handle single SVG download
      try {
        const svgContent = await fetchSvgContent(icons[0]!, variant, type)
        const blob = new Blob([svgContent], { type: 'image/svg+xml' })
        triggerDownload(blob, `${name}-${variant}.svg`)
        setTooltip({ toggle: true, text: 'downloaded!' })
      } catch (err) {
        console.error(err)
        setTooltip({ toggle: true, text: 'Failed to download' })
      }
    } else {
      // Handle multiple SVGs download as ZIP
      const zip = new JSZip()
      try {
        for (const i of icons) {
          const svgContent = await fetchSvgContent(i, variant, type)
          zip.file(`${i}-${variant}.svg`, svgContent)
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
