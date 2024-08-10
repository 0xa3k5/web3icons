'use client'
import React, { useState, useEffect, PropsWithChildren } from 'react'
import JSZip from 'jszip'
import Tooltip from '../Tooltip'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/core'
import { useSvgContent } from '../../hooks/useSvgContent'
import Button from './Button'

interface Props {
  className?: string
  icons: (INetworkMetadata | ITokenMetadata | IWalletMetadata)[]
  type: TType
  variant: TVariant
}

export default function DownloadButton({
  className,
  icons,
  variant,
  type,
  children,
}: PropsWithChildren<Props>): JSX.Element {
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

  const { svgContent } = useSvgContent({
    metadata: icons[0]!,
    variant,
    type,
  })

  const handleDownload = async () => {
    if (icons.length === 0) return

    if (icons.length === 1) {
      // Handle single SVG download
      try {
        const blob = new Blob([svgContent], { type: 'image/svg+xml' })
        triggerDownload(blob, `${icons[0]!.id}-${variant}.svg`)
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
          zip.file(`${i.id}-${variant}.svg`, svgContent)
        }
        const blob = await zip.generateAsync({ type: 'blob' })
        triggerDownload(blob, 'web3-icons.zip')
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
    <div className="relative inline-block">
      <Button
        onClick={handleDownload}
        className={className}
        icon={
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        }
      >
        {children}
      </Button>
      {tooltip.toggle && (
        <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
      )}
    </div>
  )
}
