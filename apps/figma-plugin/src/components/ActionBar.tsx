import { h } from 'preact'
import cx from 'classnames'
import { Dispatch, StateUpdater } from 'preact/hooks'
import { emit } from '@create-figma-plugin/utilities'
import { InsertSvgsHandler, SvgIcon } from '../types'

interface Props {
  className?: string
  setSelectedIcons: Dispatch<StateUpdater<SvgIcon[]>>
  selectedIcons: SvgIcon[]
}

export default function ActionBar({
  className,
  setSelectedIcons,
  selectedIcons,
}: Props): h.JSX.Element {
  const handleClearAll = () => {
    setSelectedIcons([])
  }

  const handleInsert = () => {
    emit<InsertSvgsHandler>('INSERT_SVGS', selectedIcons)
  }

  return (
    <div
      className={cx(
        className,
        'fixed bottom-0 z-10 -mx-4 flex w-full justify-between divide-x divide-gray-lightest border-t border-gray-lightest bg-gray-light text-sm',
      )}
    >
      <ActionBarButton text="clear all" onClick={handleClearAll} />
      <ActionBarButton
        text={`insert(${selectedIcons.length})`}
        onClick={handleInsert}
      />
    </div>
  )
}

const ActionBarButton = ({
  text,
  onClick,
}: {
  text: string
  onClick: () => void
}): h.JSX.Element => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-center gap-2 p-4 text-xs text-white text-opacity-60 duration-150 hover:bg-gray-lightest hover:text-opacity-100"
    >
      {text}
    </button>
  )
}
