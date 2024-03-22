import cx from 'classnames'
import DownloadButton from './DownloadButton'
import CopyButton from './CopyButton'
import { useAppContext } from '../../hooks'

interface Props {
  className?: string
}

export default function ActionBar({ className }: Props): JSX.Element {
  const { variant, selectedIcons, setSelectedIcons } = useAppContext()

  const handleClearAll = () => {
    setSelectedIcons([])
  }

  return (
    <div
      className={cx(
        'fixed bottom-4 z-10 mx-auto flex justify-between divide-x divide-gray-lightest rounded-full border border-gray-lightest bg-gray-light text-sm',
        className,
      )}
    >
      <CopyButton
        variant={variant}
        selectedIcons={selectedIcons}
        className="rounded-l-full"
      />
      <DownloadButton variant={variant} selectedIcons={selectedIcons} />
      <button
        type="button"
        onClick={handleClearAll}
        className="flex gap-2 rounded-r-full p-4 text-white text-opacity-60 duration-150 hover:bg-gray-lightest hover:text-opacity-100 "
      >
        clear all
      </button>
    </div>
  )
}
