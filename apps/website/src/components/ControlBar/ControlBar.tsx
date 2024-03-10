import { IconComponentProps } from "@token-icons/react";
import cx from "classnames";
import SearchInput from "./SearchInput";
import Slider from "./Slider";
import SegmentedControl from "./SegmentedControl";

interface Props {
  className?: string;
  variant?: IconComponentProps["variant"];
  setVariant: React.Dispatch<
    React.SetStateAction<"mono" | "branded" | undefined>
  >;
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export default function ControlBar({
  className,
  variant,
  setVariant,
  size,
  setSize,
  searchTerm,
  setSearchTerm,
}: Props): JSX.Element {
  return (
    <div className="flex justify-center">
      <div
        className={cx(
          "sticky top-4 z-10 flex w-full flex-col justify-between rounded-lg bg-gray-darkest/40 backdrop-blur-lg md:flex-row",
          className,
        )}
      >
        <SearchInput
          className="w-64"
          placeholder="Search icons"
          value={searchTerm}
          onInput={(event) => setSearchTerm(event.target.value)}
        />
        <SegmentedControl
          className="w-fit"
          options={["mono", "branded"]}
          selected={variant === "mono" ? "mono" : "branded"}
          onChange={(value) => setVariant(value as "mono" | "branded")}
        />
        <Slider
          className="max-w-64"
          label="size"
          minValue={16}
          maxValue={96}
          value={size}
          setValue={(value) => setSize(value)}
        />
      </div>
    </div>
  );
}
