'use client'
import React, { useState, useEffect, PropsWithChildren } from 'react'
import Tooltip from '../Tooltip'
import { fetchSvgContent } from '../../utils'
import { TMetadata, TType, TVariant } from '@web3icons/common'
import { saveAs } from 'file-saver'
import cx from 'classnames'

interface Props {
  className?: string
  metadata: TMetadata
  type: TType
  variant: TVariant
}

export default function DownloadButton({
  className,
  metadata,
  variant,
  type,
  children,
}: PropsWithChildren<Props>): JSX.Element {
  const [tooltip, setTooltip] = useState<{ toggle: boolean; text: string }>({
    toggle: false,
    text: '',
  })

  const handleDownload = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur()

    const { svg } = await fetchSvgContent({
      metadata,
      variant,
      type,
    })

    const blob = new Blob([svg])
    saveAs(blob, `${metadata.id}-${variant}.svg`)
    setTooltip({ toggle: true, text: 'downloaded!' })
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
      <button
        type="button"
        onClick={(event) => handleDownload(event)}
        className={cx(
          'items-center rounded-sm aria-disabled:pointer-events-none aria-disabled:text-opacity-20',
          'text-opacity-60 hover:bg-gray-lightest hover:text-opacity-100',
          'relative flex gap-2 p-2 text-white duration-150',
          className,
        )}
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
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
      </button>

      {tooltip.toggle && (
        <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
      )}
    </div>
  )
}
