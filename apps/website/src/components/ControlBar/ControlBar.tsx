import { IconComponentProps } from "@token-icons/react";
import cx from "classnames";
import SearchInput from "./SearchInput";
import Slider from "./Slider";

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
          "bg-gray-darkest/40 sticky top-4 z-10 flex w-full justify-between rounded-lg p-4 backdrop-blur-lg",
          className,
        )}
      >
        <SearchInput
          placeholder="Search icons"
          value={searchTerm}
          onInput={(event) => setSearchTerm(event.target.value)}
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        />
        <div className="flex gap-2">
          <button
            onClick={() => setVariant(variant === "mono" ? "branded" : "mono")}
            className="rounded-full px-4 py-2 font-mono text-sm text-white"
          >
            variant: {variant}
          </button>
          <Slider
            label="size"
            minValue={16}
            maxValue={96}
            value={size}
            setValue={(value) => setSize(value)}
          />
        </div>
      </div>
    </div>
  );
}
