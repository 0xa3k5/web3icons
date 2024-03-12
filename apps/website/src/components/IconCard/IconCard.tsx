import cx from 'classnames'
import { useEffect, useState } from 'react'
import Checkbox from './Checkbox'
import { useAppContext } from '../../hooks'
import { IconComponentProps } from '@token-icons/react'

interface Props {
  className?: string
  iconName: string
  IconComponent: React.ForwardRefExoticComponent<
    IconComponentProps & React.RefAttributes<SVGSVGElement>
  >
}

export default function IconCard({
  className,
  iconName,
  IconComponent,
}: Props): JSX.Element {
  const {
    size,
    variant,
    selectedIcons,
    setSelectedIcons,
    color,
    tokenMetadata,
  } = useAppContext()

  const [hover, setHover] = useState(false)
  const isSelected = selectedIcons.includes(iconName)
  let hasMatchingVariant = true

  const token = tokenMetadata.find(
    (t) =>
      t.symbol.toLocaleLowerCase() ===
      iconName.replace('Icon', '').toLocaleLowerCase(),
  )

  hasMatchingVariant = token?.variants.includes(variant) ? true : false

  const handleCheckboxChange = () => {
    setSelectedIcons((prevSelectedIcons) =>
      isSelected
        ? prevSelectedIcons.filter((icon) => icon !== iconName)
        : [...prevSelectedIcons, iconName],
    )
  }

  useEffect(() => {
    const spacedown = (e: KeyboardEvent) => {
      if (hover && e.key === ' ') {
        e.preventDefault()
        setSelectedIcons((selectedIcons) => {
          return isSelected
            ? selectedIcons.filter((selectedIcon) => selectedIcon !== iconName)
            : [...selectedIcons, iconName]
        })
      }
    }

    document.addEventListener('keydown', spacedown)
    return () => document.removeEventListener('keydown', spacedown)
  })

  return (
    <label
      className={cx(
        'relative flex flex-col items-center justify-center gap-4 border border-gray-lightest p-12 duration-150',
        className,
        isSelected ? 'bg-gray-light' : hover && 'bg-gray',
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IconComponent
        key={iconName}
        size={size}
        className={!hasMatchingVariant ? 'opacity-10' : 'opacity-100'}
        variant={variant}
        color={color}
      />
      <span
        className={cx(
          'text-white',
          isSelected ? 'text-opacity-100' : 'text-opacity-60',
        )}
      >
        {iconName.replace('Icon', '')}
      </span>
      <input
        type="checkbox"
        id={`checkbox-${iconName}`}
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="sr-only"
      />
      {(isSelected || hover) && (
        <span className="absolute left-2 top-2">
          <Checkbox
            className="absolute left-2 top-2"
            checked={isSelected}
            onChange={handleCheckboxChange}
          />
        </span>
      )}
    </label>
  )
}
