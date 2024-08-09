import { useState, useEffect, PropsWithChildren } from 'react'
import cx from 'classnames'
import Tooltip from '../ActionBar/Tooltip'
import { fetchSvgContent } from '../../utils'
import {
  INetworkMetadata,
  ITokenMetadata,
  IWalletMetadata,
  TType,
  TVariant,
} from '@web3icons/core'

interface Props {
  className?: string
  variant: TVariant
  type: TType
  metadata: INetworkMetadata | ITokenMetadata | IWalletMetadata
  disabled?: boolean
}

export default function CopyButton({
  className,
  variant,
  type,
  children,
  metadata,
  disabled,
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
      const svgContent = await fetchSvgContent(metadata, variant, type)
      await navigator.clipboard.writeText(svgContent)
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
      </button>
      <Tooltip text={tooltip.text} toggle={tooltip.toggle} />
    </div>
  )
}
