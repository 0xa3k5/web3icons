import { IconComponentProps } from "@token-icons/react";
import cx from "classnames";
import { useEffect, useState } from "react";
import Checkbox from "./Checkbox";

interface Props {
  className?: string;
  iconName: string;
  variant: IconComponentProps["variant"];
  IconComponent: React.ForwardRefExoticComponent<
    IconComponentProps & React.RefAttributes<SVGSVGElement>
  >;
  size: number;
  selectedIcons: string[];
  setSelectedIcons: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function IconCard({
  className,
  iconName,
  IconComponent,
  variant,
  size,
  selectedIcons,
  setSelectedIcons,
}: Props): JSX.Element {
  const [hover, setHover] = useState(false);
  const isSelected = selectedIcons.includes(iconName);

  const handleCheckboxChange = () => {
    setSelectedIcons((prevSelectedIcons) =>
      isSelected
        ? prevSelectedIcons.filter((icon) => icon !== iconName)
        : [...prevSelectedIcons, iconName],
    );
  };

  useEffect(() => {
    const spacedown = (e: KeyboardEvent) => {
      if (hover && e.key === " ") {
        console.log(iconName);
        e.preventDefault();
        setSelectedIcons((selectedIcons) => {
          return isSelected
            ? selectedIcons.filter((selectedIcon) => selectedIcon !== iconName)
            : [...selectedIcons, iconName];
        });
      }
    };

    document.addEventListener("keydown", spacedown);
    return () => document.removeEventListener("keydown", spacedown);
  });

  return (
    <label
      className={cx(
        "border-gray-lightest relative flex cursor-pointer flex-col items-center justify-center gap-4 border p-12 duration-150",
        className,
        isSelected ? "bg-gray-light" : hover && "bg-gray",
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <IconComponent
        key={iconName}
        size={size}
        className="rounded-ful"
        variant={variant}
      />
      <span
        className={cx(
          "font-mono text-white",
          isSelected ? "text-opacity-100" : "text-opacity-60",
        )}
      >
        {iconName.replace("Icon", "")}
      </span>
      <input
        type="checkbox"
        className="sr-only"
        checked={isSelected}
        onChange={handleCheckboxChange}
        id={`checkbox-${iconName}`}
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
  );
}
