import cx from "classnames";
import { ChangeEvent } from "react";

interface Props {
  className?: string;
  minValue: number;
  maxValue: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  label: string;
}

export default function Slider({
  className,
  minValue,
  maxValue,
  value,
  label,
  setValue,
}: Props): JSX.Element {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    setValue(newValue);
  };

  return (
    <div className={cx(className, "flex w-full flex-col gap-2")}>
      <div className="flex w-full justify-between font-mono text-sm">
        <label htmlFor={`${label}-slider`}>{label}</label>
        <input
          type="number"
          min={minValue}
          max={maxValue}
          value={value}
          onChange={handleChange}
          className="appearance-none rounded-lg bg-transparent focus:outline-none"
        />
      </div>
      <input
        id={`${label}-slider`}
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        onChange={handleChange}
        className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20"
      />
    </div>
  );
}
